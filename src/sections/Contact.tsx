"use client";

import { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ status: "success" | "error" | ""; message: string }>({
    status: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ status: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback({
          status: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFeedback({
          status: "error",
          message: data.error || "Failed to send message. Please try again later.",
        });
      }
    } catch (err) {
      setFeedback({
        status: "error",
        message: "Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative transition-colors duration-300">
      <div className="absolute inset-0 bg-sky-500/5 dark:bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-4 inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-[10%] w-[80%] h-1 bg-sky-500 dark:bg-teal-500 rounded-full"></span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Have a project in mind, a job opportunity, or just want to connect? Drop a message!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Details Column */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
              <div className="text-2xl text-sky-500 dark:text-teal-400 p-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-1">
                  Email
                </h4>
                <a
                  href="mailto:scilentknight512@gmail.com"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-teal-400 text-sm font-light transition-colors break-all"
                >
                  scilentknight512@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
              <div className="text-2xl text-sky-500 dark:text-teal-400 p-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl">
                <FaPhone />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-1">
                  Phone
                </h4>
                <a
                  href="tel:+9779861252006"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-teal-400 text-sm font-light transition-colors"
                >
                  +977-9861252006
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
              <div className="text-2xl text-sky-500 dark:text-teal-400 p-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-1">
                  Location
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-light">
                  Kathmandu, Bagmati, Nepal
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="md:col-span-2 bg-white dark:bg-slate-900/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-slate-700 dark:text-slate-300 font-semibold text-sm ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-teal-500 transition-all duration-300 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-slate-700 dark:text-slate-300 font-semibold text-sm ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-teal-500 transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-slate-700 dark:text-slate-300 font-semibold text-sm ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-teal-500 transition-all duration-300 text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-slate-700 dark:text-slate-300 font-semibold text-sm ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-teal-500 transition-all duration-300 resize-none text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full bg-sky-500 hover:bg-sky-600 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-900 font-bold py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-75 disabled:cursor-not-allowed group cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${isSubmitting ? "hidden" : "block"}`} />
              </button>

              {feedback.status && (
                <div
                  className={`p-4 rounded-xl text-center font-semibold border text-sm backdrop-blur-xs ${
                    feedback.status === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                      : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-450"
                  }`}
                >
                  {feedback.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
