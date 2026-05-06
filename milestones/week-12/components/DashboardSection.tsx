import React from 'react';

interface DashboardSectionProps {
  title: string;
  children: React.ReactNode;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({ title, children }) => {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <h2 className="text-xl font-bold text-slate-800 border-l-4 border-blue-500 pl-4 mb-6">{title}</h2>
      {children}
    </section>
  );
};
