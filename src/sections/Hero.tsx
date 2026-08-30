"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import GSAPReveal from "@/components/GSAPReveal";

export default function Hero() {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 transition-colors duration-300"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400 dark:bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 dark:opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 dark:bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 dark:opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-400 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 dark:opacity-15 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full z-10">
        {/* Left Text Column */}
        <div className="md:flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <GSAPReveal direction="right" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 dark:bg-teal-500/10 text-sky-600 dark:text-teal-400 text-sm font-semibold mb-6">
              <FaMapMarkerAlt /> Kathmandu, Nepal
            </div>
          </GSAPReveal>

          <GSAPReveal direction="right" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-slate-800 dark:text-slate-100 leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                Prakash Pathak
              </span>
            </h1>
          </GSAPReveal>

          <GSAPReveal direction="right" delay={0.3}>
            <h2 className="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-400 mb-6">
              Junior .NET Developer & Full Stack Developer
            </h2>
          </GSAPReveal>

          <GSAPReveal direction="right" delay={0.4}>
            <p className="text-base md:text-lg mb-8 text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-light">
              I build modern, secure, and highly performant full-stack web applications. Skilled in C#, ASP.NET Core Web API, SQL Server, and Next.js, I bridge backend reliability with seamless frontend interactive design.
            </p>
          </GSAPReveal>

          <GSAPReveal direction="right" delay={0.5}>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center mb-8">
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="bg-sky-500 hover:bg-sky-600 text-white dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-900 px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-8 py-3.5 rounded-full font-bold hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-transparent dark:border-slate-700"
              >
                Contact Me
              </a>
            </div>
          </GSAPReveal>

          <GSAPReveal direction="right" delay={0.6}>
            <div className="flex gap-4">
              <a
                href="https://github.com/scilentknight"
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                className="text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-teal-400 transition-colors text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/scilentknight02"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
                className="text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-cyan-400 transition-colors text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </GSAPReveal>
        </div>

        {/* Right Image Column */}
        <div className="md:flex-1 w-full max-w-sm relative group flex justify-center">
          <GSAPReveal direction="left" delay={0.3}>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 transform transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-teal-500 dark:to-cyan-500 rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <Image
                src="/images/profile.webp"
                alt="Prakash Pathak"
                fill
                sizes="(max-w-768px) 288px, (max-w-1024px) 320px, 384px"
                priority
                className="object-cover rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-800/50"
              />
            </div>
          </GSAPReveal>
        </div>
      </div>
    </section>
  );
}
