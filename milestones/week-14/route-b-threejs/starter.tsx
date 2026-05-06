/**
 * Week 14: Route B - Three.js Design (Starter)
 * Canvas の設置と、基本オブジェクトの配置
 */

import React from 'react';
import { Canvas } from '@react-three/fiber';

export const ThreeDScene = () => {
  return (
    <div className="h-64 bg-slate-900 rounded-2xl overflow-hidden shadow-inner">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* [Week 14 課題] 箱を表示し、アニメーション（回転）を加えてみよう */}
        <mesh rotation={[45, 45, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>
      </Canvas>
    </div>
  );
};
