import React from 'react';

export const SkillItem: React.FC<{ name: string }> = ({ name }) => {
  return (
    <span className="bg-slate-100 px-4 py-2 rounded-lg text-sm font-bold text-slate-700">
      {name}
    </span>
  );
};
