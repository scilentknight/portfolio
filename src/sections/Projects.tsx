"use client";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Next.js E-commerce Website",
    description: "A modern, full-stack e-commerce solution featuring product catalogs, cart management, secure user authentication with JWT, and database persistence using Prisma.",
    code: "https://github.com/scilentknight/React-ECOM",
    tags: ["Next.js", "JavaScript", "JWT", "Prisma", "Tailwind CSS"],
  },
  {
    name: "Cafe Management System",
    description: "A secure, robust business management application built with ASP.NET Core MVC to handle member ordering, inventory tracking, sales reporting, and user administration.",
    code: "https://github.com/scilentknight/PHP_Proz",
    tags: ["ASP.NET Core MVC", "C#", "MS SQL Server", "Bootstrap"],
  },
  {
    name: "Django E-commerce Web App",
    description: "A dynamic and scalable e-commerce system using Django's powerful ORM, featuring inventory control, transaction security, and an optimized customer interface.",
    code: "https://github.com/scilentknight/DjangoProz",
    tags: ["Django", "Python", "Bootstrap", "JavaScript"],
  },
  {
    name: "Gym Management System",
    description: "A comprehensive management system built with PHP and MySQL to manage subscriptions, user profiles, workout plans, and administrative billing functions.",
    code: "https://github.com/scilentknight/PHP_Proz",
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    name: "MERN Blog Web App",
    description: "A feature-rich personal blogging platform supporting Markdown rendering, article creation, tags classification, and responsive user comment sections.",
    code: "https://github.com/scilentknight/MERN-Blog",
    tags: ["MongoDB", "Express", "React.js", "Node.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-4 inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-[10%] w-[80%] h-1 bg-sky-500 dark:bg-teal-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            A selection of web systems and applications highlighting backend API architecture, database integrity, and frontend interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-850 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card top glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-teal-500 dark:to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="p-8 grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-sky-500 dark:group-hover:text-teal-400 transition-colors duration-300 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-850 dark:text-teal-300 rounded-full border border-slate-200/50 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white py-2.5 rounded-xl font-semibold text-sm transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
                  >
                    <FaGithub className="text-base" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
