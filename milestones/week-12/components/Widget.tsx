import React from 'react';

interface WidgetProps {
  label: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const Widget: React.FC<WidgetProps> = ({ label, title, description, children }) => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">{label}</h2>
      <div className="text-lg font-bold text-blue-500">{title}</div>
      {description && <p className="text-sm text-slate-500 mt-1">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </section>
  );
};
