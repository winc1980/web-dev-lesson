#!/usr/bin/env node
// Discord Bot API でアナウンスを投稿し、message_id を data/attendance.json に保存する
import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'js-yaml';
import { execSync } from 'child_process';

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

if (!DISCORD_BOT_TOKEN || !DISCORD_CHANNEL_ID) {
  console.error('DISCORD_BOT_TOKEN and DISCORD_CHANNEL_ID are required');
  process.exit(1);
}

const schedule = parse(readFileSync('config/schedule.yml', 'utf8'));
const attendance = JSON.parse(readFileSync('data/attendance.json', 'utf8'));

const now = new Date();
// JST offset: +9h
const jstNow = new Date(now.getTime() + 9 * 60 * 60 * 1000);
const todayStr = jstNow.toISOString().slice(0, 10);

async function postMessage(content) {
  const res = await fetch(`https://discord.com/api/v10/channels/${DISCORD_CHANNEL_ID}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Discord API error: ${res.status} ${text}`);
  }
  return res.json();
}

function daysUntil(dateStr) {
  const target = new Date(dateStr + 'T00:00:00+09:00');
  const today = new Date(todayStr + 'T00:00:00+09:00');
  return Math.round((target - today) / (1000 * 60 * 60 * 24));
}

function classLabel(cls) {
  return cls === 'beginner' ? '初心者班' : '経験者班';
}

let updated = false;

for (const session of schedule.sessions) {
  const days = daysUntil(session.date);
  if (days !== 3 && days !== 1) continue;

  const key = `${session.date}_${session.class}`;
  const label = days === 3 ? '3日前' : '前日';
  const dateFormatted = session.date.replace(/-/g, '/');

  const message =
    `📅 **【授業${label}リマインド】**\n` +
    `${classLabel(session.class)} | **${session.title}**\n` +
    `📆 日時: ${dateFormatted}\n\n` +
    `出席できる方は ✅、欠席の方は ❌ でリアクションしてください。`;

  console.log(`Posting announcement for ${key} (${label})...`);
  const msg = await postMessage(message);
  console.log(`Message posted: ${msg.id}`);

  if (!attendance.sessions[key]) {
    attendance.sessions[key] = {};
  }
  attendance.sessions[key].message_id = msg.id;
  attendance.sessions[key].date = session.date;
  attendance.sessions[key].title = session.title;
  attendance.sessions[key].class = session.class;
  updated = true;
}

if (updated) {
  writeFileSync('data/attendance.json', JSON.stringify(attendance, null, 2) + '\n');
  execSync('git config user.name "github-actions[bot]"');
  execSync('git config user.email "github-actions[bot]@users.noreply.github.com"');
  execSync('git add data/attendance.json');
  execSync('git commit -m "chore: update attendance message IDs [skip ci]"');
  execSync('git push');
  console.log('data/attendance.json committed and pushed.');
} else {
  console.log('No announcements to send today.');
}
