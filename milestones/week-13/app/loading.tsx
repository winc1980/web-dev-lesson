export default function Loading() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="w-full md:w-80 bg-slate-800 p-10 flex flex-col items-center animate-pulse">
        <div className="w-32 h-32 bg-slate-700 rounded-full mb-6" />
        <div className="h-8 w-32 bg-slate-700 rounded mb-2" />
        <div className="h-4 w-24 bg-slate-700 rounded" />
      </aside>
      <main className="flex-1 p-6 md:p-12 space-y-8 animate-pulse">
        <div className="h-40 bg-slate-200 rounded-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-32 bg-slate-200 rounded-2xl" />
          <div className="h-32 bg-slate-200 rounded-2xl" />
        </div>
      </main>
    </div>
  );
}
