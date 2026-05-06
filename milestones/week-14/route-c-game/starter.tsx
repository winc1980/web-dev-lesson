/**
 * Week 14: Route C - Simple Web Game (Starter)
 * ゲームループの構築と基本描画
 */

import React, { useState, useEffect } from 'react';

export const SimpleGame = () => {
  const [playerPos, setPos] = useState({ x: 50, y: 50 });

  // [Week 14 課題] requestAnimationFrame を使って位置を滑らかに更新してみよう
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setPos(p => ({ ...p, x: p.x + 5 }));
      if (e.key === 'ArrowLeft') setPos(p => ({ ...p, x: p.x - 5 }));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="relative h-64 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 overflow-hidden">
      <div 
        className="absolute w-8 h-8 bg-red-500 rounded shadow-lg transition-all duration-75"
        style={{ left: `${playerPos.x}px`, top: `${playerPos.y}px` }}
      />
    </div>
  );
};
