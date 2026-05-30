#!/usr/bin/env node
// 授業当日: Discord のリアクションを集計して出欠レポートを投稿する
import { readFileSync } from 'fs';

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

if (!DISCORD_BOT_TOKEN || !DISCORD_CHANNEL_ID) {
  console.error('DISCORD_BOT_TOKEN and DISCORD_CHANNEL_ID are required');
  process.exit(1);
}

const attendance = JSON.parse(readFileSync('data/attendance.json', 'utf8'));

const now = new Date();
const jstNow = new Date(now.getTime() + 9 * 60 * 60 * 1000);
const todayStr = jstNow.toISOString().slice(0, 10);

async function getReactions(messageId, emoji) {
  const encoded = encodeURIComponent(emoji);
  const res = await fetch(
    `https://discord.com/api/v10/channels/${DISCORD_CHANNEL_ID}/messages/${messageId}/reactions/${encoded}?limit=100`,
    { headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` } }
  );
  if (!res.ok) return [];
  const users = await res.json();
  // Botユーザーを除外
  return users.filter((u) => !u.bot).map((u) => u.username);
}

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
}

for (const [key, session] of Object.entries(attendance.sessions)) {
  if (session.date !== todayStr) continue;
  if (!session.message_id) {
    console.log(`No message_id for ${key}, skipping.`);
    continue;
  }

  console.log(`Fetching reactions for ${key}...`);
  const present = await getReactions(session.message_id, '✅');
  const absent = await getReactions(session.message_id, '❌');

  const classLabel = session.class === 'beginner' ? '初心者班' : '経験者班';
  const dateFormatted = session.date.replace(/-/g, '/');

  let report =
    `📋 **【出欠確認レポート】**\n` +
    `${classLabel} | **${session.title}** (${dateFormatted})\n\n`;

  if (present.length > 0) {
    report += `✅ **出席 (${present.length}名)**\n${present.map((u) => `・${u}`).join('\n')}\n\n`;
  } else {
    report += `✅ **出席**: なし\n\n`;
  }

  if (absent.length > 0) {
    report += `❌ **欠席 (${absent.length}名)**\n${absent.map((u) => `・${u}`).join('\n')}`;
  } else {
    report += `❌ **欠席**: なし`;
  }

  console.log(report);
  await postMessage(report);
  console.log(`Report posted for ${key}`);
}
