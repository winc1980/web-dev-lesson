#!/usr/bin/env node
// 生徒リポジトリの進捗を GitHub API で確認して Discord に投稿する
import { readFileSync } from 'fs';
import { parse } from 'js-yaml';

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;
const GH_PAT = process.env.GH_PAT;

if (!DISCORD_BOT_TOKEN || !DISCORD_CHANNEL_ID || !GH_PAT) {
  console.error('DISCORD_BOT_TOKEN, DISCORD_CHANNEL_ID, and GH_PAT are required');
  process.exit(1);
}

const students = parse(readFileSync('config/students.yml', 'utf8')).students;

async function githubGet(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Authorization: `Bearer ${GH_PAT}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${path}`);
  return res.json();
}

async function fileExists(repo, path) {
  const result = await githubGet(`/repos/${repo}/contents/${path}`);
  return result !== null;
}

async function estimateWeek(repo) {
  // 最新コミット日時
  const commits = await githubGet(`/repos/${repo}/commits?per_page=1`);
  if (!commits || commits.length === 0) return { week: '不明', lastCommit: 'なし' };

  const lastCommitDate = commits[0].commit.author.date.slice(0, 10);

  // ファイル存在チェックで週を推定
  const hasPackageJson = await fileExists(repo, 'package.json');
  if (!hasPackageJson) {
    return { week: '1〜9', lastCommit: lastCommitDate };
  }

  const hasComponents = await fileExists(repo, 'components');
  if (!hasComponents) {
    return { week: '10', lastCommit: lastCommitDate };
  }

  // components/ があれば week11+。さらに詳細チェック
  const hasAppDir = await fileExists(repo, 'app');
  const hasSrcDir = await fileExists(repo, 'src');
  if (hasAppDir || hasSrcDir) {
    return { week: '11+', lastCommit: lastCommitDate };
  }

  return { week: '11', lastCommit: lastCommitDate };
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

// 初心者班・経験者班ごとに集計
const beginners = students.filter((s) => s.class === 'beginner');
const experienced = students.filter((s) => s.class === 'experienced');

async function buildReport(label, list) {
  const lines = [];
  for (const student of list) {
    try {
      const { week, lastCommit } = await estimateWeek(student.repo);
      lines.push(`・**${student.name}** — Week ${week} (最終コミット: ${lastCommit})`);
    } catch (e) {
      lines.push(`・**${student.name}** — 取得失敗 (${e.message})`);
    }
  }
  return `**${label}**\n${lines.join('\n')}`;
}

const now = new Date();
const jstNow = new Date(now.getTime() + 9 * 60 * 60 * 1000);
const dateStr = jstNow.toISOString().slice(0, 10).replace(/-/g, '/');

console.log('Checking student progress...');
const [beginnerReport, experiencedReport] = await Promise.all([
  buildReport('📗 初心者班', beginners),
  buildReport('📘 経験者班', experienced),
]);

const message =
  `📊 **【週次進捗レポート】** (${dateStr})\n\n` +
  beginnerReport +
  '\n\n' +
  experiencedReport;

console.log(message);
await postMessage(message);
console.log('Progress report posted.');
