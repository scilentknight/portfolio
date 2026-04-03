import { FaReact, FaNodeJs, FaPhp, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiFigma, SiBootstrap } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
  { name: "MySQL", icon: <FaDatabase className="text-[#4479A1]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 inline-block relative">
            My Skills
            <span className="absolute -bottom-2 left-[5%] w-[90%] h-1 bg-teal-500 rounded-full"></span>

          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            A look at the technologies and tools I work with to build exceptional digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-3 px-6 py-4 bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-teal-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(20,184,166,0.1)] cursor-pointer"
            >
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="font-semibold text-slate-200 group-hover:text-white transition-colors tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
