"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download, Sun, Moon, CheckCircle, Briefcase, MapPin } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Election Dashboard",
    desc: "Role-based admin dashboard with auth, analytics, audit logs and file uploads.",
    impact: "Reduced admin processing time by 40%",
    tech: ["Next.js", "Tailwind"],
    link: "#",
  },
  {
    title: "Vrado Webapp",
    desc: "A Webapp that helps Cac Consultant collect details and document from clients",
    impact: "Improved review accuracy for technical documents",
    tech: ["nextjs", "tailwindcss", "Typescript"],
    link: "https://consultant.vrado.app",
  },
  {
    title: "Davkart | Digitizing Commerce",
    desc: "A scalable Online Platform to Manage Payments,Inventory,sales and Orders from Whatsapp, Instagram and Facebook - all in one Place",
    impact: "Increased online visibility",
    tech: ["Nextjs","Tailwindcss"],
    link: "https://davkart.com/",
  },
  {
    title: "Vrado Extention",
    desc: "A chrome Extention that helps Cac Consultant fill Business details on CAC Portal",
    impact: "Improved review accuracy for technical documents",
    tech: ["nextjs", "tailwindcss", "Typescript"],
    link: "https://chromewebstore.google.com/search/Vrado",
  },
  {
    title: "Anonymous Chat",
    desc: "Real-time chat app",
    impact: "Handled 1k messages/day in testing",
    tech: ["Next.js", "WebSocket"],
    link: "https://chatanoni.netlify.app/",
  },{
    title: "Orphanage Website",
    desc: "A website for an Orphanage Home",
    impact: "Increased online visibility",
    tech: ["HTML", "CSS","JS"],
    link: "https://orphanagehomenigeria.netlify.app/",
  },{
    title: "Fit&Foot",
    desc: "An Eccommerce for Products",
    impact: "Learning",
    tech: ["Nextjs","Tailwindcss","Payment Integretion"],
    link: "https://fit&foot.netlify.app/",
  }
  
  
];

const skills = [
  "Next.js / React",
  "TypeScript",
  "Tailwind CSS",
  "SvelteKit",
  "Firebase",
  "REST APIs",
  "Performance Optimization",
  "UI/UX & Animations",
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div
      className={`${dark ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500 font-serif`}
    >
      {/* Intro Loader */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className={`fixed inset-0 origin-left ${dark ? "bg-white" : "bg-black"} z-50`}
      />

      {/* Navbar */}
      <nav className={`sticky top-0 z-40 backdrop-blur border-b ${dark ? "bg-black/70 border-white/10" : "bg-white/70 border-black/10"}`}>
        <div className="flex items-center justify-between p-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">Michael Ani</h1>
            <span className={`text-xs px-2 py-1 rounded-full ${dark ? "bg-green-500/20 text-green-300" : "bg-green-100 text-green-700"}`}>
              Open to work
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Hire Me</a>
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 rounded-full border ${dark ? "border-white/20 hover:bg-white/10" : "border-black/20 hover:bg-black/10"}`}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div style={{ y }}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            I am Michael Ani
            {/* <span className="block opacity-70">I build fast, reliable, production-ready web apps</span> */}
          </motion.h2>
          <p className="mt-6 opacity-80">
           A Frontend engineer With Proven expertise in delivering impactful, intuitive designs accross Various Industries
          </p>

          <div className="flex items-center gap-4 mt-4 text-sm opacity-80">
            <span className="flex items-center gap-2"><Briefcase size={16} /> Available for full-time / contract</span>
            <span className="flex items-center gap-2"><MapPin size={16} /> Remote </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className={`px-7 py-3 rounded-xl font-semibold transition ${dark ? "bg-white text-black hover:opacity-80" : "bg-black text-white hover:opacity-80"}`}
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className={`px-7 py-3 rounded-xl border transition ${dark ? "border-white/30 hover:bg-white/10" : "border-black/30 hover:bg-black/10"}`}
            >
              View Work
            </a>
            <a
              href="/cv.pdf"
              className={`px-7 py-3 rounded-xl flex items-center gap-2 border transition ${dark ? "border-white/30 hover:bg-white/10" : "border-black/30 hover:bg-black/10"}`}
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className={`w-full h-96 rounded-3xl ${dark ? "bg-white" : "bg-black"} shadow-2xl`} />
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-10">Core Skills</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div
              key={s}
              className={`flex items-center gap-3 p-4 rounded-xl border ${dark ? "border-white/20 bg-white/5" : "border-black/20 bg-black/5"}`}
            >
              <CheckCircle className="opacity-70" size={18} />
              <span className="font-medium">{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold mb-12">Selected Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              whileHover={{ y: -10 }}
              className={`p-6 rounded-2xl border backdrop-blur transition hover:shadow-xl ${dark ? "border-white/20 bg-white/5" : "border-black/20 bg-black/5"}`}
            >
              <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
              <p className="text-sm opacity-85 mb-3">{p.desc}</p>
              <p className="text-xs opacity-70 mb-4">Impact: {p.impact}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-xs px-2 py-1 rounded-full ${dark ? "bg-white/10" : "bg-black/10"}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold mb-10">Why Hire Me?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {["Production-focused mindset", "Clean & maintainable code", "Strong UI/UX + performance balance","Agile Development"].map((v) => (
            <div
              key={v}
              className={`p-6 rounded-2xl border ${dark ? "border-white/20 bg-white/5" : "border-black/20 bg-black/5"}`}
            >
              <p className="font-semibold">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="opacity-85">
          I’m a Frontend Developer wiľh 4+ years of experience creating user-friendly digital products that enhance engagement and drive growth . Proven expertise in delivering impactful, intuitive designs accross opinion-management,e-commerce,edtech and Business Registration  </p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h3 className="text-3xl font-bold mb-6">Let’s Work Together</h3>
        <p className="opacity-80 mb-8">Looking for a frontend developer? Let’s talk.</p>

        <form name="contact" className="grid gap-4 max-w-md mx-auto" >
        <input type="hidden" name="form-name" value="contact" />
          <input
            placeholder="Your name"
            required
            type="text" name="name" 
            className={`p-3 rounded-xl bg-transparent border ${dark ? "border-white/30 text-white" : "border-black/30 text-black"}`}
          />
          <input
            required
            placeholder="Your email"
            type="email" name="email" 
            className={`p-3 rounded-xl bg-transparent border ${dark ? "border-white/30  text-white" : "border-black/30 text-black"}`}
          />
          <textarea
            required
            placeholder="Tell me about your project or role"
             name="message" 
            className={`p-3 rounded-xl bg-transparent border ${dark ? "border-white/30  text-white" : "border-black/30 text-black"}`}
          />
          <button
          type="submit"
            className={`px-6 py-3 rounded-xl font-semibold transition ${dark ? "bg-white text-black hover:opacity-80" : "bg-black text-white hover:opacity-80"}`}
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-10 opacity-80">
          <a href="https://github.com/mickey2143/" className="hover:opacity-60"><Github /></a>
          <a href="www.linkedin.com/in/ani-michael-chijindu" className="hover:opacity-60"><Linkedin /></a>
          <a href="mailto:animichaelchijindu@gmail.com"><Mail /></a>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 opacity-70">
        © {new Date().getFullYear()} Michael Ani. All rights reserved.
      </footer>
    </div>
  );
}
