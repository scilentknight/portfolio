"use client";

import { FaLaptopCode, FaCode, FaGraduationCap, FaAward } from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode className="text-sky-500 dark:text-teal-400" />,
    value: "1+",
    label: "Years Experience",
    description: "Full-Stack Development",
  },
  {
    icon: <FaCode className="text-blue-500 dark:text-cyan-400" />,
    value: "10+",
    label: "Projects Completed",
    description: "Web & System Apps",
  },
  {
    icon: <FaGraduationCap className="text-indigo-500 dark:text-blue-400" />,
    value: "BCA",
    label: "Education",
    description: "Kathford College (Ongoing)",
  },
  {
    icon: <FaAward className="text-rose-500 dark:text-pink-400" />,
    value: "3+",
    label: "Certifications",
    description: "React, Python, Next.js",
  },
];

export default function About() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative transition-colors duration-300">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-sky-500/5 dark:bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-4 inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-[10%] w-[80%] h-1 bg-sky-500 dark:bg-teal-500 rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-lg dark:hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm">
                  {stat.label}
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-xs mt-1">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white leading-relaxed">
              I am a Full Stack Developer driven by a <span className="text-sky-500 dark:text-teal-400">passion for building robust backend services</span> and responsive client interfaces.
            </h3>

            <div className="space-y-5 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
              <p>
                Hello! I am Prakash Pathak, a Full Stack Developer with practical experience in building complete web applications. My professional journey involves developing full-stack web applications at <strong>Global Tech Nepal Pvt. Ltd.</strong>, utilizing modern web frameworks like Next.js, React, C#, and ASP.NET Core.
              </p>

              <p>
                I thrive on solving complex API integrations, building secure JWT authentication schemes, designing databases with Microsoft SQL Server, and mapping high-speed user interfaces using Tailwind CSS. 
              </p>

              <p>
                Currently, I am pursuing my Bachelor of Computer Application (BCA) at Kathford International College. I am focused on continuous learning, applying industry-standard coding conventions, and producing clean, maintainable code architectures.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="inline-flex items-center gap-2 text-sky-500 dark:text-teal-400 font-bold hover:text-sky-600 dark:hover:text-cyan-400 transition-colors group cursor-pointer"
              >
                Let's work together
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
