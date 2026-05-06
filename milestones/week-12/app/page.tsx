'use client'; // [Week 12 新規追加] インタラクティブな機能を使うために必須

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardSection } from "@/components/DashboardSection";
import { Widget } from "@/components/Widget";
import { SkillItem } from "@/components/SkillItem";

export default function Home() {
  // --- [Week 12 新規追加] 状態 (State) の定義 ---
  const [aboutText, setAboutText] = useState(
    "第12週では、useState を使ってページに「動き」を戻しました。入力欄に文字を打つと、この文章がリアルタイムで書き換わります。"
  );
  const [likeCount, setLikeCount] = useState(0);
  const [tempStatus, setTempStatus] = useState("");

  const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"];

  const handleStatusSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempStatus.trim()) {
      setAboutText(tempStatus);
      setTempStatus("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen transition-colors duration-300">
      <Sidebar name="WINC 太郎" role="React Developer" />

      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* ステータス更新フォーム */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-sm font-semibold text-slate-400 uppercase mb-4">Update Status</h2>
            <form onSubmit={handleStatusSubmit} className="flex gap-2">
              <input 
                type="text" 
                value={tempStatus}
                onChange={(e) => setTempStatus(e.target.value)}
                placeholder="今何してる？"
                className="flex-1 border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors">
                更新
              </button>
            </form>
          </section>

          <DashboardSection title="About Me">
            <p className="text-slate-600 leading-relaxed">
              {aboutText}
            </p>
          </DashboardSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Widget 
              label="Latest Project" 
              title="react-state-dashboard" 
              description="Managing interactions with useState..." 
            />

            <Widget label="Support" title="">
              <button 
                onClick={() => setLikeCount(likeCount + 1)}
                className="border-2 border-red-400 text-red-400 px-6 py-2 rounded-full font-bold hover:bg-red-50 transition-all active:scale-95 w-full"
              >
                ❤️ {likeCount} Likes
              </button>
            </Widget>
          </div>

          <DashboardSection title="Skills">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillItem key={skill} name={skill} />
              ))}
            </div>
          </DashboardSection>

        </div>
      </main>
    </div>
  );
}
