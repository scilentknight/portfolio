"use client";

import { FaReact, FaNodeJs, FaPhp, FaDatabase, FaGitAlt, FaGithub, FaPython, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiBootstrap, SiDjango, SiPostman, SiPostgresql, SiMysql, SiDotnet } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C#", icon: <SiDotnet className="text-[#512BD4]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
      { name: "C", icon: <FaCode className="text-[#A8B9CC]" /> },
      { name: "Java", icon: <FaCode className="text-[#007396]" /> },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "Next.js", icon: <FaCode className="text-black dark:text-white" /> },
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "ASP.NET Core MVC", icon: <SiDotnet className="text-[#512BD4]" /> },
      { name: "ASP.NET Core Web API", icon: <SiDotnet className="text-[#512BD4]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL Server", icon: <FaDatabase className="text-[#CC292B]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    ],
  },
  {
    title: "DevTools & Tech",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Swagger", icon: <FaCode className="text-[#85EA2D]" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-sky-500/5 dark:bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-4 inline-block relative">
            Technical Skills
            <span className="absolute -bottom-2 left-[10%] w-[80%] h-1 bg-sky-500 dark:bg-teal-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            An overview of the programming languages, framework libraries, database systems, and dev tools I use.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800/80 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="group flex items-center gap-3 px-5 py-3.5 bg-white dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800/80 hover:border-sky-500 dark:hover:border-teal-500/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
                  >
                    <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
