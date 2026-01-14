"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Menu, X,Mail, Download, Sun, Moon, CheckCircle, Briefcase, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";
import logo from "./logo.png"




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
    impact: "Helped Consultants fill Business Registration form seamlessly",
    tech: ["nextjs", "tailwindcss", "Typescript"],
    link: "https://chromewebstore.google.com/search/Vrado",
  },
  {
    title: "incognito",
    desc: "Real-time Anonymous Chatapp",
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
    link: "https://fit-foot.netlify.app/",
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
  "HTML,CSS"
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main
      className={`${dark ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500`}
    >
      {/* Intro Loader */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className={`fixed inset-0 origin-left ${dark ? "bg-white" : "bg-black"} z-50`}
      />

      {/* Navbar */}
     
      <nav
      className={`sticky top-0 z-40 backdrop-blur border-b ${
        dark ? "bg-black/70 border-white/10" : "bg-white/70 border-black/10"
      }`}
    >
      <div className="flex items-center justify-between p-6 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Michael Ani Personal Logo" width="30"/>
          <h1 className="text-2xl font-bold">Michael Ani</h1>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#projects" className="hover:opacity-70">Projects</a>
          <a href="#skills" className="hover:opacity-70">Skills</a>
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#contact" className="hover:opacity-70">Hire Me</a>
          <button
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-full border ${
              dark ? "border-white/20 hover:bg-white/10" : "border-black/20 hover:bg-black/10"
            }`}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-full border ${
              dark ? "border-white/20 hover:bg-white/10" : "border-black/20 hover:bg-black/10"
            }`}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md border ${
              dark ? "border-white/20 hover:bg-white/10" : "border-black/20 hover:bg-black/10"
            }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div
          className={`md:hidden flex flex-col gap-4 pb-6 text-center ${
            dark ? "bg-black/80 border-t border-white/10" : "bg-white/80 border-t border-black/10"
          }`}
        >
          <a href="#projects" className="hover:opacity-70" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" className="hover:opacity-70" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#about" className="hover:opacity-70" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="hover:opacity-70" onClick={() => setIsOpen(false)}>Hire Me</a>
        </div>
      )}
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
              href="/Michael Ani - CV.pdf"
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
              target="_blank" rel="noopener noreferrer"
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
          I’m a Frontend Developer with 4+ years of experience creating user-friendly digital products that enhance engagement and drive growth . Proven expertise in delivering impactful, intuitive designs accross opinion-management,e-commerce,edtech and Business Registration  </p>
      </section>

     {/* Contact */}
<section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
  <h3 className="text-3xl font-bold mb-6">Let’s Work Together</h3>
  <p className="opacity-80 mb-12">
    Looking for a frontend developer? Reach me directly.
  </p>

  <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
    {/* Email */}
    <a
      href="mailto:animichaelchijindu@gmail.com"
      className={`p-6 rounded-2xl border transition hover:scale-105 ${
        dark
          ? "border-white/20 hover:bg-white/5"
          : "border-black/20 hover:bg-black/5"
      }`}
    >
      <Mail className="mx-auto mb-3" size={28} />
      <p className="font-semibold">Email</p>
      <p className="text-sm opacity-70 break-all">
        animichaelchijindu@gmail.com
      </p>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/mickey2143/"
      target="_blank"
      className={`p-6 rounded-2xl border transition hover:scale-105 ${
        dark
          ? "border-white/20 hover:bg-white/5"
          : "border-black/20 hover:bg-black/5"
      }`}
    >
      <Github className="mx-auto mb-3" size={28} />
      <p className="font-semibold">GitHub</p>
      <p className="text-sm opacity-70">github.com/mickey2143</p>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/ani-michael-chijindu"
      target="_blank"
      className={`p-6 rounded-2xl border transition hover:scale-105 ${
        dark
          ? "border-white/20 hover:bg-white/5"
          : "border-black/20 hover:bg-black/5"
      }`}
    >
      <Linkedin className="mx-auto mb-3" size={28} />
      <p className="font-semibold">LinkedIn</p>
      <p className="text-sm opacity-70">Connect with me</p>
    </a>
  </div>


</section>


      {/* Footer */}
      <footer className="text-center py-10 opacity-70">
        © {new Date().getFullYear()} Michael Ani. All rights reserved.
      </footer>
    </main>
  );
}
