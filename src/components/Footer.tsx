"use client";

import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-100 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-500 dark:text-slate-400 overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/5 dark:bg-teal-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 relative z-10">
        {/* Profile Card */}
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-sky-500 to-blue-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent tracking-tighter">
            PRAKASH PATHAK
          </h3>
          <p className="leading-relaxed font-light text-slate-600 dark:text-slate-400">
            Passionate Full Stack Developer and Junior .NET Developer building modern, responsive, and database-driven web experiences using C#, ASP.NET Core, SQL Server, and Next.js.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 font-medium">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "services", label: "Services" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="hover:text-sky-500 dark:hover:text-teal-400 transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-sky-500 dark:group-hover:bg-teal-400 transition-colors"></span>{" "}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect & Social */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">Connect with Me</h3>
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/scilentknight"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-teal-400 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/scilentknight02"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-cyan-400 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://facebook.com/scilentknight02"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Profile"
              className="w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=scilentknight512@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email Address"
              className="w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-rose-500 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <FaEnvelope className="text-lg" />
            </a>
            <a
              href="tel:+9779861252006"
              aria-label="Phone Number"
              className="w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-green-500 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <FaPhone className="text-lg" />
            </a>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs font-medium text-slate-500">
              &copy; {currentYear} Prakash Pathak. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
