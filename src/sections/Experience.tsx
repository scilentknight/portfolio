"use client";

import { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCalendarAlt } from "react-icons/fa";

type Tab = "work" | "education" | "certifications";

const workExperience = [
  {
    role: "Full Stack Developer",
    company: "Global Tech Nepal Pvt. Ltd.",
    period: "January 2026 – Present",
    location: "Kathmandu, Nepal",
    points: [
      "Developing full-stack web applications using Next.js, React.js, C#, and ASP.NET Core.",
      "Building responsive and reusable user interfaces using JavaScript, Tailwind CSS, and Bootstrap.",
      "Developing and integrating RESTful APIs using ASP.NET Core Web API with JWT-based security.",
      "Working with Microsoft SQL Server for database design, complex queries, and data-driven application development.",
      "Implementing CRUD operations, authentication, authorization, and API integrations.",
      "Utilizing Git and GitHub for version control and agile collaborative development.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Kathford International College, Lalitpur",
    period: "2022 – Present",
    description: "Gaining solid foundation in computer applications, programming paradigms, and software development methodologies.",
  },
  {
    degree: "+2 (Management with Computer Science)",
    institution: "Koteshwor Multiple Campus, Kathmandu",
    period: "2019 – 2021",
    description: "Developed early programming concepts and computer systems basics.",
  },
  {
    degree: "Secondary Education Examination (SEE)",
    institution: "Shree Satyashwar Secondary School, Dolakha",
    period: "2009 – 2019",
    description: "Completed secondary education with focused interest in science and technology.",
  },
];

const certifications = [
  {
    title: "Next.js Development Internship",
    provider: "Global Tech Nepal Pvt. Ltd.",
    description: "Applied internship experience focused on server-side rendering, API routes, and optimized frontend architecture.",
  },
  {
    title: "Front-End Development with React",
    provider: "Evolve IT Hub Nepal Pvt. Ltd.",
    description: "Specialized training on component design, state management, hooks, and responsive design systems.",
  },
  {
    title: "Python with Data Science & Machine Learning",
    provider: "Samastha Group Pvt. Ltd.",
    description: "Foundational training on data analysis, visualization, and algorithm scripting in Python.",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  return (
    <section id="experience" className="py-24 px-6 relative bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-4 inline-block relative">
            Experience & Education
            <span className="absolute -bottom-2 left-[10%] w-[80%] h-1 bg-sky-500 dark:bg-teal-500 rounded-full"></span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-16 border-b border-slate-200 dark:border-slate-800 pb-px">
          {[
            { id: "work", label: "Work History", icon: <FaBriefcase /> },
            { id: "education", label: "Education", icon: <FaGraduationCap /> },
            { id: "certifications", label: "Certificates", icon: <FaCertificate /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-2 -mb-[2px] cursor-pointer ${
                activeTab === tab.id
                  ? "border-sky-500 text-sky-600 dark:border-teal-500 dark:text-teal-400"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="min-h-[300px]">
          {activeTab === "work" && (
            <div className="space-y-12">
              {workExperience.map((job, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500 dark:border-teal-500 group-hover:scale-125 transition-transform duration-300"></div>

                  <div className="bg-white dark:bg-slate-900/60 p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                          {job.role}
                        </h3>
                        <p className="text-sky-600 dark:text-teal-400 font-semibold mt-1">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                        <FaCalendarAlt />
                        {job.period}
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-4">
                      {job.location}
                    </p>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-light list-disc list-inside">
                      {job.points.map((point, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">
                          <span className="relative -left-1">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-12">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 group"
                >
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500 dark:border-teal-500 group-hover:scale-125 transition-transform duration-300"></div>

                  <div className="bg-white dark:bg-slate-900/60 p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-sky-600 dark:text-teal-400 font-semibold mt-1">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                        <FaCalendarAlt />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sky-600 dark:text-teal-400 font-semibold text-sm mb-4">
                      {cert.provider}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
