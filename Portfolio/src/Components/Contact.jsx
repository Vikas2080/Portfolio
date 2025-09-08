import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, User, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const ContactPage = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ngbcgbu", // your service ID
        "template_qfzwhti", // your template ID
        form.current,
        "72RRgoIT2qh5hEaGD" // your public key
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          setMessageSent(true);
          setErrorMsg("");
          setLoading(false);
        },
        (error) => {
          console.error("❌ Email error:", error.text);
          setErrorMsg("Something went wrong. Please try again.");
          setLoading(false);
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Get in <span className="text-blue-400">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-col justify-center space-y-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-blue-500/30 transition"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">+91 7534903066</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">vikasbisht208@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Tallital, Nainital – 263001</span>
            </div>

            <div className="flex gap-6 mt-4">
              <a
                href="https://github.com/vikas2080"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-blue-400 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vikasbisht2/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            {...fadeUp(0.4)}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-blue-500/30 transition"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <div className="flex items-center gap-2 bg-black/50 border border-white/20 rounded-lg p-2">
                <User className="w-5 h-5 text-blue-400" />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  required
                  className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                />
              </div>
              <div className="flex items-center gap-2 bg-black/50 border border-white/20 rounded-lg p-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  required
                  className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex items-start gap-2 bg-black/50 border border-white/20 rounded-lg p-2 mb-6">
              <MessageSquare className="w-5 h-5 text-blue-400 mt-1" />
              <textarea
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
                rows="5"
                required
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-500/30 transition ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {messageSent && (
              <p className="text-green-400 mt-4 text-center">
                ✅ Thank you... Your message has been delivered!
              </p>
            )}
            {errorMsg && (
              <p className="text-red-400 mt-4 text-center">
                ❌ {errorMsg}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
