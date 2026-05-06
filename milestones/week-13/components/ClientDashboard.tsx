'use client';

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardSection } from "@/components/DashboardSection";
import { Widget } from "@/components/Widget";
import { SkillItem } from "@/components/SkillItem";

interface ClientDashboardProps {
  githubUser: any;
}

export default function ClientDashboard({ githubUser }: ClientDashboardProps) {
  const [aboutText, setAboutText] = useState(
    githubUser.bio || "Next.js で GitHub からプロフィールを取得しました！"
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
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar 
        name={githubUser.name || githubUser.login} 
        role="GitHub Explorer" 
        avatarUrl={githubUser.avatar_url}
      />

      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-sm font-semibold text-slate-400 uppercase mb-4">Live Followers</h2>
            <div className="text-3xl font-bold text-blue-600">{githubUser.followers}</div>
          </section>

          <DashboardSection title="About Me">
            <p className="text-slate-600 leading-relaxed">{aboutText}</p>
            <form onSubmit={handleStatusSubmit} className="mt-6 flex gap-2">
              <input 
                type="text" 
                value={tempStatus}
                onChange={(e) => setTempStatus(e.target.value)}
                placeholder="ステータスを更新"
                className="flex-1 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold">更新</button>
            </form>
          </DashboardSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Widget label="GitHub Link" title={githubUser.login}>
              <a href={githubUser.html_url} target="_blank" className="text-blue-500 hover:underline">View Profile</a>
            </Widget>

            <Widget label="Support" title="">
              <button 
                onClick={() => setLikeCount(likeCount + 1)}
                className="border-2 border-red-400 text-red-400 px-6 py-2 rounded-full font-bold hover:bg-red-50 w-full transition-all"
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
