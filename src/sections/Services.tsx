"use client";

import { FaGlobe, FaServer, FaPaintBrush, FaDatabase } from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe className="text-sky-500 dark:text-teal-400" />,
    title: "Full-Stack Web Development",
    description: "Designing and building scalable, end-to-end web applications that connect seamless frontend user interfaces with robust, secure backend engines.",
    includes: ["Next.js App Router integrations", "SSR & SSG rendering models", "Responsive design execution", "State-management setups"],
    tech: ["Next.js", "React.js", "C#", "ASP.NET Core", "Tailwind CSS"],
  },
  {
    icon: <FaServer className="text-blue-500 dark:text-cyan-400" />,
    title: "Backend API Engineering",
    description: "Crafting highly structured, secure, and developer-friendly RESTful APIs built on professional object-oriented architectures.",
    includes: ["JWT authentication & authorization", "Swagger API documentation", "Custom middleware layers", "Third-party API integrations"],
    tech: ["C#", "ASP.NET Core Web API", "Razor Pages", "JWT", "Swagger"],
  },
  {
    icon: <FaPaintBrush className="text-indigo-500 dark:text-blue-400" />,
    title: "Frontend UI/UX Engineering",
    description: "Developing pixel-perfect, highly interactive interfaces with clean animations, outstanding accessibility, and fluid responsiveness.",
    includes: ["Semantic HTML structure", "Light/Dark theme support", "GSAP animations", "Lighthouse audit optimizations"],
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: <FaDatabase className="text-rose-500 dark:text-pink-400" />,
    title: "Database Design & Management",
    description: "Designing efficient database schemas, structuring queries, and organizing relational and non-relational database-driven solutions.",
    includes: ["Database schema design", "CRUD operations script writing", "Migration handling", "Data integration"],
    tech: ["Microsoft SQL Server", "PostgreSQL", "MySQL", "MongoDB"],
  },
];

export default function Services() {
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
    <section id="services" className="py-24 px-6 relative transition-colors duration-300">
      <div className="absolute inset-0 bg-sky-500/5 dark:bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-4 inline-block relative">
            Services I Offer
            <span className="absolute -bottom-2 left-[10%] w-[80%] h-1 bg-sky-500 dark:bg-teal-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Providing professional developer solutions that help transform ideas into dynamic digital systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-4xl mb-6 p-4 w-fit rounded-2xl bg-slate-100 dark:bg-slate-800/50 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-light text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    What is Included
                  </h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-teal-500"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-850 dark:text-teal-300 rounded-lg border border-slate-200 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-500 dark:text-teal-400 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Request Service <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
