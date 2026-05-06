import { Sidebar } from "@/components/Sidebar";
import { DashboardSection } from "@/components/DashboardSection";
import { Widget } from "@/components/Widget";
import { SkillItem } from "@/components/SkillItem";

export default function Home() {
  const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* [Week 11 新規追加] コンポーネントに分割したサイドバー */}
      <Sidebar name="WINC 太郎" role="Next.js Developer" />

      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <DashboardSection title="About Me">
            <p className="text-slate-600 leading-relaxed">
              第11週では、一つの大きなファイルだった page.tsx を、
              Sidebar や DashboardSection といった部品（Component）に分割しました。
              Props を使うことで、中身を自由に入れ替えられるようになっています。
            </p>
          </DashboardSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Widget 
              label="Latest Project" 
              title="my-identity-dashboard" 
              description="Refactoring to Components..." 
            />

            <Widget label="Support" title="">
              <button className="border-2 border-red-400 text-red-400 px-6 py-2 rounded-full font-bold hover:bg-red-50 transition-colors w-full">
                ❤️ 0 Likes
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
