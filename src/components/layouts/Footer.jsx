import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 mt-10 relative overflow-hidden">
      {/* Decorative gradient blur at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-teal-500/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 relative z-10">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-extrabold text-teal-400 mb-6 tracking-wide">
            Prakash<span className="text-white"></span>
          </h3>
          <p className="text-slate-400 leading-relaxed font-light">
            Passionate developer building modern, responsive, and interactive web experiences using React & Tailwind CSS. I turn ideas into elegant digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 font-medium">
            <li>
              <a href="/" className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-teal-400 transition-colors"></span> Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-teal-400 transition-colors"></span> About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-teal-400 transition-colors"></span> Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-teal-400 transition-colors"></span> Skills
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Connect with Me</h3>
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/scilentknight"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/scilentknight02"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://facebook.com/scilentknight02"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-500 hover:bg-slate-700 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=scilentknight512@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-rose-400 hover:bg-slate-700 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(251,113,133,0.3)]"
            >
              <FaEnvelope className="text-lg" />
            </a>
            <a
              href="tel:+9779861252006"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-green-400 hover:bg-slate-700 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)]"
            >
              <FaPhone className="text-lg" />
            </a>
          </div>

          <div className="pt-6 border-t border-slate-700/50">
            <p className="text-slate-500 text-sm font-medium">&copy; {new Date().getFullYear()} Prakash Pathak. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
