export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* [Week 10 新規追加] サイドバー領域 (Tailwind CSS でスタイリング) */}
      <aside className="w-full md:w-80 bg-slate-800 text-white p-10 flex flex-col items-center">
        <div className="w-32 h-32 bg-slate-700 rounded-full border-4 border-blue-500 mb-6 overflow-hidden">
          {/* アバター画像プレースホルダー */}
          <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-teal-400" />
        </div>
        <h1 className="text-2xl font-bold">WINC 太郎</h1>
        <p className="text-slate-400 text-sm mt-2">Next.js Learner</p>
        
        <div className="flex gap-4 mt-10">
          <a href="#" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm transition-colors">Twitter</a>
          <a href="#" className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded text-sm transition-colors">GitHub</a>
        </div>
      </aside>

      {/* メインコンテンツ領域 */}
      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* プロフィールセクション */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 border-l-4 border-blue-500 pl-4 mb-6">About Me</h2>
            <p className="text-slate-600 leading-relaxed">
              こんにちは！WINC 太郎です。これまで Vanilla JS で作ってきたダッシュボードを、
              今週から Next.js と Tailwind CSS でリプレースしています。
              コンポーネント化することで、より管理しやすく拡張性の高いアプリを目指します！
            </p>
          </section>

          {/* ウィジェットエリア (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Latest Project</h2>
              <div className="text-lg font-bold text-blue-500">my-identity-dashboard</div>
              <p className="text-sm text-slate-500 mt-1">Refactoring to Next.js...</p>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Support</h2>
              <button className="border-2 border-red-400 text-red-400 px-6 py-2 rounded-full font-bold hover:bg-red-50 transition-colors">
                ❤️ 0 Likes
              </button>
            </section>
          </div>

          {/* スキル一覧 */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 border-l-4 border-blue-500 pl-4 mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"].map((skill) => (
                <span key={skill} className="bg-slate-100 px-4 py-2 rounded-lg text-sm font-bold text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
