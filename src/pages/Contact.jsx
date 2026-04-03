import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dateInput = document.createElement("input");
    dateInput.type = "hidden";
    dateInput.name = "date";
    dateInput.value = new Date().toLocaleString();
    form.current.appendChild(dateInput);

    emailjs
      .sendForm(
        "service_portfoliocontact",
        "template_7ev10px",
        form.current,
        "_Ls7PoDbInWTrDhYg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully! I'll get back to you soon.");
          e.target.reset();
          form.current.removeChild(dateInput);
          setIsSubmitting(false);
          setTimeout(() => setSuccess(""), 5000);
        },
        (error) => {
          console.log(error.text);
          setSuccess("Failed to send message. Try again later.");
          form.current.removeChild(dateInput);
          setIsSubmitting(false);
          setTimeout(() => setSuccess(""), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-[5%] w-[90%] h-1 bg-teal-500 rounded-full"></span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to drop a message!
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-700/50 shadow-2xl relative overflow-hidden">
          {/* Subtle glow inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 relative z-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-slate-300 font-medium ml-1">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="username"
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300 placeholder-slate-500"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-slate-300 font-medium ml-1">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="user@example.com"
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300 placeholder-slate-500"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-300 font-medium ml-1">Your Message</label>
              <textarea
                name="message"
                placeholder="How can I help you?"
                rows="5"
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300 resize-none placeholder-slate-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <FaPaperPlane className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${isSubmitting ? "hidden" : "block"}`} />
            </button>

            {success && (
              <div className={`mt-4 p-4 rounded-lg text-center font-medium border border-slate-700/50 backdrop-blur-sm ${success.includes("successfully")
                ? "bg-teal-500/10 text-teal-400"
                : "bg-red-500/10 text-red-400"
                }`}>
                {success}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
