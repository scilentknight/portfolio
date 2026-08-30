"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
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
      window.history.pushState(null, "", `#${id}`);
      setActive(id);
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      setActive("home");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg py-3 border-b border-slate-200/50 dark:border-slate-800/50"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-sky-500 to-blue-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
        >
          PRAKASH
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 py-1 cursor-pointer ${
                    active === item.id
                      ? "text-sky-500 dark:text-teal-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  } group`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-[2px] bg-sky-500 dark:bg-teal-400 transform origin-left transition-transform duration-300 ${
                      active === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="px-5 py-2 rounded-full border border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-slate-900 font-medium transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.1)] dark:shadow-[0_0_15px_rgba(20,184,166,0.1)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Actions */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-600 dark:text-slate-200 text-2xl focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-3xl overflow-hidden transition-all duration-500 ease-in-out border-b border-slate-200 dark:border-slate-800 ${
          menuOpen ? "max-h-[450px] opacity-100 py-6" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 text-center items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`text-lg font-medium transition-colors cursor-pointer ${
                  active === item.id ? "text-sky-500 dark:text-teal-400" : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="inline-block px-6 py-2 rounded-full bg-sky-500 text-white dark:bg-teal-500 dark:text-slate-900 font-semibold mt-2 cursor-pointer"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
