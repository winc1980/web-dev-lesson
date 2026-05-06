import ClientDashboard from "@/components/ClientDashboard";

// [Week 13 新規追加] Server Component でのデータ取得
export default async function Home() {
  // GitHub API からデータを取得 (サーバーサイドで実行)
  const res = await fetch('https://api.github.com/users/octocat', { next: { revalidate: 3600 } });
  const githubUser = await res.json();

  return <ClientDashboard githubUser={githubUser} />;
}
