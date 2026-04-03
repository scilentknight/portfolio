import myImage from "../assets/myimage.jpg";

function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glowing blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>

      {/* Container for content */}
      <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full z-10">
        
        {/* Left side: Text */}
        <div className="md:flex-1 text-center md:text-left flex flex-col items-center md:items-start group">
          <p className="text-teal-400 font-semibold tracking-wide uppercase mb-3 drop-shadow-sm">Welcome to my portfolio</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-slate-100 leading-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="bg-linear-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Prakash</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 text-slate-400 max-w-lg leading-relaxed">
            Building modern, responsive web applications that are both intuitive and engaging for users. I transform ideas into seamless digital experiences.
          </p>

          <div className="flex gap-4">
            <a href="#projects" className="bg-teal-500 text-slate-900 px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] hover:-translate-y-1 transition-all duration-300">
              View My Work
            </a>
            <a href="#contact" className="bg-slate-800 text-white px-8 py-3.5 rounded-full font-bold border border-slate-700 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="md:flex-1 w-full max-w-md relative group perspective">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative transform transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
            <img src={myImage} alt="Prakash Pathak" className="w-full h-auto aspect-square object-cover rounded-2xl shadow-2xl border border-slate-800/50" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
