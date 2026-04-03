import { FaCode, FaLaptopCode, FaGraduationCap, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 inline-block relative">
            About Me
                        <span className="absolute -bottom-2 left-[5%] w-[90%] h-1 bg-teal-500 rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Stats or Experience cards */}
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-teal-500/10 blur-[100px] rounded-full"></div>
            
            <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition transform hover:-translate-y-2 shadow-xl flex flex-col items-center justify-center text-center group">
              <FaLaptopCode className="text-4xl text-teal-400 group-hover:text-cyan-400 transition-colors mb-3" />
              <h3 className="text-3xl font-black text-white mb-1">10+</h3>
              <p className="text-slate-400 font-medium text-sm">Personal Projects</p>
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition transform hover:-translate-y-2 shadow-xl flex flex-col items-center justify-center text-center group mt-8">
              <FaCode className="text-4xl text-blue-400 group-hover:text-teal-400 transition-colors mb-3" />
              <h3 className="text-3xl font-black text-white mb-1">500+</h3>
              <p className="text-slate-400 font-medium text-sm">Hours Coding</p>
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition transform hover:-translate-y-2 shadow-xl flex flex-col items-center justify-center text-center group -mt-8">
              <FaGraduationCap className="text-4xl text-cyan-400 group-hover:text-blue-400 transition-colors mb-3" />
              <h3 className="text-3xl font-black text-white mb-1">100%</h3>
              <p className="text-slate-400 font-medium text-sm">Dedication</p>
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition transform hover:-translate-y-2 shadow-xl flex flex-col items-center justify-center text-center group">
              <FaLightbulb className="text-4xl text-teal-500 group-hover:text-cyan-500 transition-colors mb-3" />
              <h3 className="text-xl font-black text-white mb-1 tracking-wide">QUICK</h3>
              <p className="text-slate-400 font-medium text-sm">Learner</p>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6 leading-relaxed">
              I'm an aspiring web developer driven by curiosity and a <span className="text-teal-400">passion for coding</span>.
            </h3>
            
            <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I am Prakash Pathak, an enthusiastic fresher stepping into the world of web development. I focus on building responsive and highly interactive interfaces using React and modern frontend tools.
              </p>
              
              <p>
                My journey into programming has been hands-on—spending countless hours building personal projects, exploring new technologies, and constantly refining my problem-solving skills. I love bringing ideas to life through code and exploring better ways to craft digital experiences.
              </p>
              
              <p>
                Currently, I am actively seeking an entry-level position or internship where I can contribute my baseline skills, learn from experienced professionals, and grow into a capable full-stack developer.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-cyan-400 transition-colors group">
                Let's work together 
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
