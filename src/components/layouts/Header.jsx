import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClass = (id) => `relative text-sm font-medium tracking-wide transition-colors duration-300 ${active === id ? "text-teal-400" : "text-slate-300 hover:text-white"} group`;

  const underlineClass = (id) => `absolute -bottom-1 left-0 w-full h-[2px] bg-teal-400 transform origin-left transition-transform duration-300 ${active === id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`;

  const scrollToHome = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
    setActive("home");
    setMenuOpen(false); // close mobile menu
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 shadow-lg py-3" : "bg-transparent py-5"}`}>
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a href="/" onClick={scrollToHome} className="text-2xl font-extrabold tracking-tighter bg-linear-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          PRAKASH<span className="text-white"></span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <a href="/" onClick={scrollToHome} className={linkClass("home")}>
              Home
              <span className={underlineClass("home")}></span>
            </a>
          </li>
          <li>
            <a href="#about" className={linkClass("about")}>
              About
              <span className={underlineClass("about")}></span>
            </a>
          </li>
          <li>
            <a href="#projects" className={linkClass("projects")}>
              Projects
              <span className={underlineClass("projects")}></span>
            </a>
          </li>
          <li>
            <a href="#skills" className={linkClass("skills")}>
              Skills
              <span className={underlineClass("skills")}></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="px-5 py-2 rounded-full border border-teal-500 text-teal-400 font-medium hover:bg-teal-500 hover:text-slate-900 transition-colors duration-300 shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:shadow-[0_0_20px_rgba(45,212,191,0.5)]">
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden text-slate-200 text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-3xl overflow-hidden transition-all duration-500 ease-in-out border-b border-slate-800 ${menuOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col gap-6 text-center items-center">
          <li>
            <a href="/" onClick={scrollToHome} className={`text-lg font-medium ${active === "home" ? "text-teal-400" : "text-slate-300"}`}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)} className={`text-lg font-medium ${active === "about" ? "text-teal-400" : "text-slate-300"}`}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-lg font-medium ${active === "projects" ? "text-teal-400" : "text-slate-300"}`}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)} className={`text-lg font-medium ${active === "skills" ? "text-teal-400" : "text-slate-300"}`}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="inline-block px-6 py-2 rounded-full bg-teal-500 text-slate-900 font-semibold mt-2">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
