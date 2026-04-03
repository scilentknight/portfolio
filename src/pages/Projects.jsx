import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  // {
  //   name: "Portfolio Website",
  //   description: "A personal interactive website built with React and Tailwind CSS highlighting my skills and works.",
  //   demo: "https://pathakprakash.com.np",
  //   code: "https://github.com/scilentknight/Portfolio",
  //   tags: ["React", "Tailwind CSS", "Vite"]
  // },
  {
    name: "Gym Management System",
    description: "A comprehensive gym management system built to handle members, subscriptions, and routines efficiently.",
    demo: "#",
    code: "https://github.com/scilentknight/PHP_Proz",
    tags: ["PHP", "MySQL", "Bootstrap"]
  },
  {
    name: "E-commerce Website",
    description: "A modern, full-stack e-commerce solution featuring product listings, cart management, and user authentication.",
    demo: "#",
    code: "https://github.com/scilentknight/React-ECOM",
    tags: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    name: "Blog Web App",
    description: "A feature-rich blogging platform where users can read, write, and interact with engaging articles.",
    demo: "#",
    code: "https://github.com/scilentknight/Blog-MERN",
    tags: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    name: "Django Ecommerce",
    description: "A dynamic e-commerce web application robustly built for handling various scalable transactions.",
    demo: "#",
    code: "https://github.com/scilentknight/DjangoProz",
    tags: ["Django", "Python", "Bootstrap"]
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-[5%] w-[90%] h-1 bg-teal-500 rounded-full"></span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Here are some of my recent works. Each project reflects my focus on clean code, responsive design, and providing great user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 overflow-hidden hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              {/* Top gradient glow line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-slate-100 group-hover:text-teal-400 transition-colors">{project.name}</h3>

                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-slate-900/80 text-teal-300 rounded-full border border-teal-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons: Demo & Code */}
                <div className="flex gap-4 pt-4 border-t border-slate-700/50">
                  <a
                    href={project.demo}
                    target={project.demo === "#" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 py-2.5 rounded-xl font-bold transition-colors shadow-lg"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-2.5 rounded-xl font-bold transition-colors shadow-lg border border-slate-600"
                  >
                    <FaGithub className="text-lg" /> Code
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

export default Projects;
