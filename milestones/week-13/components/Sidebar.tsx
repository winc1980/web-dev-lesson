import React from 'react';

interface SidebarProps {
  name: string;
  role: string;
  avatarUrl?: string; // [Week 13] 動的な画像URLに対応
}

export const Sidebar: React.FC<SidebarProps> = ({ name, role, avatarUrl }) => {
  return (
    <aside className="w-full md:w-80 bg-slate-800 text-white p-10 flex flex-col items-center">
      <div className="w-32 h-32 bg-slate-700 rounded-full border-4 border-blue-500 mb-6 overflow-hidden relative">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-teal-400" />
        )}
      </div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-slate-400 text-sm mt-2">{role}</p>
      
      <div className="flex gap-4 mt-10">
        <a href="#" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm transition-colors">Twitter</a>
        <a href="#" className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded text-sm transition-colors">GitHub</a>
      </div>
    </aside>
  );
};
