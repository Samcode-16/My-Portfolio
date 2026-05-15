"use client"
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { CldImage } from "next-cloudinary";
import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Code,
  Mail,
  ExternalLink,
  Menu,
  X,
  Monitor,
  ChevronRight,
  Moon,
  Sun
} from 'lucide-react';

export const PortfolioContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted flag to avoid hydration mismatch
    setMounted(true);
    
    // Load dark mode preference from localStorage or system preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedMode !== null ? savedMode === 'true' : prefersDark;
    setIsDarkMode(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // Update DOM whenever isDarkMode changes
    if (!mounted) return;
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode, mounted]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const skills = {
    languages: ['C', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript'],
    frameworks: ['React', 'Express.js'],
    tools: ['Git', 'GitHub', 'VS Code'],
    databases: ['MySQL', 'MongoDB'],
    cloud: ['Vercel'],
    coursework: ['DBMS', 'OOP', 'COA', 'OS', 'DSA', 'Web Technologies', 'Cybersecurity', 'Cryptography'],
    interests: ['Web Development', 'Machine Learning', 'Product Management', 'Agentic AI']
  };

  const positions = [
    { title: 'Student Coordinator', organization: 'TIP Cell (Training, Internship & Placement)', year: 'Present' },
    { title: 'Volunteer', organization: 'Srujana TechFest 2025', year: 'April 2025' }
  ];

  const coActivities = [
    { title: 'Member', organization: 'Turing Club', desc: 'Organised coding challenges and tech talks on CS and emerging technologies.', year: '2024–Present' },
    { title: 'Core Team Member', organization: 'IKS (Indian Knowledge Systems)', desc: 'Planned events promoting Indian knowledge traditions.', year: '2024–Present' }
  ];

  const achievements = [
    { title: '2nd Place – Social Innovation Challenge', desc: 'Designed a repurposed ship container-based clinic to improve rural healthcare accessibility.', year: 'Mar 2026' },
    { title: '2nd Place – Startup Pitch Competition', desc: 'Pitched an innovative startup idea at Atria University.', year: 'April 2026' },
    { title: '4th Place – Inunity Innovation & Design Thinking Course', desc: 'Built a Dasara navigation web app competing against MSc Data Science and MCA students.', year: 'Dec 2025' },
    { title: '1st Place – Inunity Innovation & Design Thinking Course Sem 2', desc: 'Built a Dasara Mitra Kiosk to help visitors at mysuru during dasara.', year: 'May 2026' }

  ];

  const clubsAndActivities = [
    { id: 'Screenshot_2026-05-08_111534', title: 'Student Coordinator', organization: 'TIP Cell' },
    { id: 'Screenshot_2026-05-11_203837', title: 'Turing Club Member', organization: 'Coding & Tech' },
  ];

  const videoProjects = [
    {
      id: 'Screen_Recording_2026-05-11_161335',
      title: 'Dasara Mitra',
      desc: 'An ultimate trilingual digital companion for navigating through mysuru dasara festival, planning transport and connect with chatbot for queries.',
      link: 'https://github.com/Samcode-16/Dasara-Mitra',
      context: 'Inunity - Innovation & Design Thinking',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Chatbot', 'Geolocation API'],
      category: 'Web Development'
    },
    {
      id: 'Video_Project_4',
      title: 'Electoral voter information extractor',
      desc: 'OCR system to extract voter details from electoral roll PDF',
      link: 'https://github.com/DeekshaR06/electoral-roll-ocr',
      context: 'Collaborative Project',
      technologies: ['Python', 'OCR', 'PDF Processing', 'Computer Vision', 'Machine Learning'],
      category: 'AI/ML'
    },
    {
      id: 'Screen_Recording_2026-05-11_185615',
      title: 'Multilayer File Encryption',
      desc: 'Multi layer file encryption combining Playfair cipher, columnar transposition, and DES block cipher. Encrypt and decrypt files through a sophisticated triple-layer pipeline with an intuitive web interface.',
      link: 'https://github.com/Samcode-16/cipherstack-files',
      context: 'Cryptography Course Project',
      technologies: ['React', 'JavaScript', 'Cryptography', 'DES', 'Web Encryption', 'Tailwind CSS'],
      category: 'Security & Cryptography'
    },
    {
      id: 'Screen_Recording_2026-05-11_193356',
      title: 'Smart Receipt Analyzer',
      desc: 'An AI-powered web application that extracts, analyzes, and organizes data from receipt images using Google AI Studio and Firebase.',
      link: 'https://github.com/Samcode-16/Smart-Receipt-Analyser',
      context: 'Personal Project',
      technologies: ['React', 'Google AI Studio', 'Firebase', 'Image Processing', 'JavaScript', 'Tailwind CSS'],
      category: 'Web Development & AI'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-rose-100 dark:selection:bg-rose-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-rose-50 dark:bg-rose-900/30 rounded-lg flex items-center justify-center font-bold text-rose-500 border border-rose-100 dark:border-rose-800">S</div>
            <span className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Samudyatha K Bhat</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-zinc-400 dark:text-zinc-500 tracking-wide">
            <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a>
            <a href="#activities" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Activities</a>
            <a href="#achievements" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-rose-500 transition-colors font-medium text-zinc-600 dark:text-zinc-400">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
              {isDarkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-zinc-600" />}
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="px-6 py-4 flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#activities" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Activities</a>
              <a href="#achievements" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Achievements</a>
              <a href="#contact" className="hover:text-rose-500 transition-colors py-2 font-medium text-rose-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center pt-20 px-6 bg-gradient-to-br from-amber-50/60 dark:from-zinc-900 via-white dark:via-zinc-950 to-rose-50/40 dark:to-zinc-950">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
        
         {/* Portrait */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[540px] md:h-[540px] rounded-[3rem] overflow-hidden shadow-2xl shadow-rose-100 dark:shadow-rose-900/30">
              <CldImage 
                src="WhatsApp_Image_2026-05-08_at_12.33.11" 
                alt="Profile Image" 
                fill 
                className="object-cover" 
                crop="fill" 
                gravity="face" 
                format="auto" 
                quality="auto" 
                sizes="(max-width: 768px) 288px, 540px"
              />
            </div>
          </div>

          {/* Intro text */}
          <div className="text-center md:text-left">
            <p className="text-rose-400 dark:text-rose-400 text-lg italic mb-3">
              Glad you're here — I'm
            </p>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter mb-6 leading-[0.9] uppercase text-zinc-900 dark:text-zinc-100">
              Samudyatha <br/>


                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-400">K Bhat</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-10 max-w-lg">
               BCA student and lifelong learner passionate about building software solutions that create real impact. I enjoy turning ideas into practical applications, exploring new technologies, and continuously improving my skills through hands-on projects. Always open to collaborating with like-minded people to build meaningful and innovative solutions together.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="px-10 py-4 bg-zinc-900 dark:bg-rose-600 text-white rounded-full font-semibold hover:bg-zinc-700 dark:hover:bg-rose-500 transition-all hover:scale-105 flex items-center gap-2">
                Get in Touch <ChevronRight size={18} />
              </a>
              <a href="#projects" className="px-10 py-4 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-full font-light hover:border-rose-300 hover:text-rose-500 dark:hover:border-rose-600 dark:hover:text-rose-400 transition-all">
                Explore My Work
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-zinc-900 dark:text-zinc-100 uppercase mb-4">Technical Skills</h2>
            <p className="text-zinc-400 dark:text-zinc-500 max-w-2xl text-lg font-light">Equipped with diverse technical expertise across modern development stacks and emerging technologies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-rose-500 font-semibold uppercase text-[10px] tracking-[0.3em] mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, i) => (
                  <span key={i} className="px-4 py-2 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 rounded-full text-sm font-light border border-rose-100 dark:border-rose-800">{lang}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-rose-500 font-semibold uppercase text-[10px] tracking-[0.3em] mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.frameworks, ...skills.tools].map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-full text-sm font-light border border-amber-100 dark:border-amber-800">{item}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-rose-500 font-semibold uppercase text-[10px] tracking-[0.3em] mb-4">Databases & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.databases, ...skills.cloud].map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full text-sm font-light border border-zinc-200 dark:border-zinc-700">{item}</span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-rose-500 font-semibold uppercase text-[10px] tracking-[0.3em] mb-4">Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {skills.coursework.map((course, i) => (
                  <span key={i} className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full text-sm font-light border border-zinc-200 dark:border-zinc-700">{course}</span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-rose-500 font-semibold uppercase text-[10px] tracking-[0.3em] mb-4">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {skills.interests.map((interest, i) => (
                  <span key={i} className="px-4 py-2 bg-gradient-to-r from-rose-50 dark:from-rose-900/20 to-amber-50 dark:to-amber-900/20 text-rose-600 dark:text-rose-400 rounded-full text-sm font-light border border-rose-200 dark:border-rose-800">{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-rose-50/20 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <div className="w-14 h-14 bg-white dark:bg-zinc-800 border border-rose-100 dark:border-rose-900/50 rounded-2xl flex items-center justify-center text-rose-400 shadow-sm">
              <Code size={28} />
            </div>
            <div>
              <h2 className="text-5xl font-extralight tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">Selected Projects</h2>
              <p className="text-zinc-400 dark:text-zinc-500 text-sm mt-1 italic">The projects I keep coming back to — the ones that taught me the most</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {videoProjects.map((project, idx) => (
              <div key={idx} className="group space-y-8">
                <div className="rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-2xl bg-zinc-200">
                  <CldVideoPlayer 
                    src={project.id} 
                    width="1280" 
                    height="720" 
                    transformation={{
                      width: 1280,
                      height: 720,
                      crop: 'fill',
                      gravity: 'auto'
                    }}
                   />
                </div>
                <div className="px-6">
                  <h3 className="text-2xl font-light mb-4 text-zinc-900 dark:text-zinc-100 tracking-tight">{project.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-8 text-lg">
                    {project.desc}
                  </p>

                  {/* Tech & Context Cards */}
                  <div className="mb-8 space-y-4">
                    {/* Context Card */}
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-rose-50 dark:from-rose-900/20 to-amber-50 dark:to-amber-900/20 rounded-xl border border-rose-100 dark:border-rose-900/50">
                      <Briefcase size={16} className="text-rose-500 dark:text-rose-400 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-rose-600 dark:text-rose-400 font-semibold">Where</p>
                        <p className="text-sm font-light text-rose-700 dark:text-rose-300">{project.context}</p>
                      </div>
                    </div>

                    {/* Category Card */}
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 dark:from-amber-900/20 to-zinc-50 dark:to-zinc-800 rounded-xl border border-amber-100 dark:border-amber-900/50">
                      <Code size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400 font-semibold">Category</p>
                        <p className="text-sm font-light text-amber-700 dark:text-amber-300">{project.category}</p>
                      </div>
                    </div>

                    {/* Tech Stack Card */}
                    <div className="p-4 bg-gradient-to-r from-zinc-50 dark:from-zinc-800 to-zinc-100 dark:to-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 font-semibold mb-3">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs rounded-full border border-zinc-200 dark:border-zinc-600 font-light hover:border-rose-300 hover:text-rose-600 dark:hover:border-rose-600 dark:hover:text-rose-400 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-rose-500 dark:text-rose-400 font-semibold group text-[10px] uppercase tracking-[0.3em] border-b border-rose-200 dark:border-rose-900/50 pb-2 hover:border-rose-500 dark:hover:border-rose-400 transition-colors">
                    View GitHub Repo <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Activities Section */}
      <section id="activities" className="py-32 px-6 relative bg-amber-50/20 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-zinc-900 dark:text-zinc-100 uppercase mb-4">Positions & Activities</h2>
            <p className="text-zinc-400 dark:text-zinc-500 max-w-2xl text-lg font-light">Leadership roles, positions of responsibility, and co-curricular engagement.</p>
          </div>

          {/* Positions of Responsibility */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-zinc-800 dark:text-zinc-200 uppercase mb-8 pb-4 border-b border-amber-200 dark:border-amber-900/50">Positions of Responsibility</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {positions.map((pos, idx) => (
                <div key={idx} className="p-6 bg-white dark:bg-zinc-800 rounded-2xl border border-amber-100 dark:border-amber-900/30 hover:border-rose-300 dark:hover:border-rose-600 hover:shadow-lg transition-all">
                  <h4 className="text-xl font-light text-zinc-900 dark:text-zinc-100 mb-2">{pos.title}</h4>
                  <p className="text-rose-500 dark:text-rose-400 font-semibold text-sm mb-2">{pos.organization}</p>
                  <p className="text-zinc-400 dark:text-zinc-500 text-xs font-mono">{pos.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Co-Curricular Activities */}
          <div>
            <h3 className="text-2xl font-light text-zinc-800 dark:text-zinc-200 uppercase mb-8 pb-4 border-b border-amber-200 dark:border-amber-900/50">Co-Curricular Activities</h3>
            <div className="space-y-6">
              {coActivities.map((activity, idx) => (
                <div key={idx} className="p-6 bg-white dark:bg-zinc-800 rounded-2xl border border-amber-100 dark:border-amber-900/30 hover:border-rose-300 dark:hover:border-rose-600 hover:shadow-lg transition-all">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h4 className="text-xl font-light text-zinc-900 dark:text-zinc-100">{activity.title}</h4>
                    <span className="text-zinc-400 dark:text-zinc-500 text-xs font-mono whitespace-nowrap">{activity.year}</span>
                  </div>
                  <p className="text-rose-500 dark:text-rose-400 font-semibold text-sm mb-3">{activity.organization}</p>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{activity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 px-6 bg-gradient-to-b from-amber-50/30 dark:from-zinc-900/30 to-white dark:to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-zinc-900 dark:text-zinc-100 uppercase mb-4">Achievements & Recognitions</h2>
            <p className="text-zinc-400 dark:text-zinc-500 max-w-2xl text-lg font-light">Recognition for innovation, design thinking, and contribution to meaningful projects.</p>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="group p-8 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl hover:border-rose-200 dark:hover:border-rose-900/50 hover:shadow-lg transition-all duration-500">
                <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-zinc-900 dark:text-zinc-100 mb-3">{achievement.title}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 font-light text-lg leading-relaxed mb-4">{achievement.desc}</p>
                  </div>
                  <div className="text-rose-400 dark:text-rose-500 font-mono text-sm whitespace-nowrap">{achievement.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-32 px-6 border-t border-rose-50 dark:border-zinc-800 bg-gradient-to-b from-white dark:from-zinc-950 to-amber-50/30 dark:to-zinc-900/30">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-900/50 rounded-[2.5rem] mb-12 flex items-center justify-center shadow-sm">
            <Mail size={32} className="text-rose-300 dark:text-rose-400" />
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-8 text-zinc-900 dark:text-zinc-100 uppercase">Let's Connect!</h2>
          <p className="text-zinc-400 dark:text-zinc-500 max-w-lg mb-12 font-light text-lg leading-relaxed">
            I love meeting curious, enthusiastic, dynamic and pro-active people. Whether you want to collaborate, 
            have a question, or just want to say hi — my inbox is always open.
          </p>
          <a href="mailto:hello@sharonyelenik.com" className="text-2xl md:text-5xl text-zinc-300 dark:text-zinc-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors border-b-2 border-zinc-100 dark:border-zinc-800 hover:border-rose-300 dark:hover:border-rose-600 pb-4 mb-20 inline-block font-thin tracking-tight">
            samudyathakbhat@gmail.com
          </a>
          
          <div className="flex gap-8 mb-24 opacity-60 hover:opacity-100 transition-opacity">
            <a href="#" className="text-zinc-400 dark:text-zinc-600 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"><Monitor size={28} /></a>
          </div>

          <div className="w-full pt-16 border-t border-amber-50 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-300 dark:text-zinc-600 text-[9px] font-mono tracking-[0.4em] uppercase">
            <p>© 2025 Samudyatha K Bhat</p>
            <div className="flex gap-12 text-zinc-400 dark:text-zinc-600">
              <a href="https://www.linkedin.com/in/samudyatha-k-bhat-s2716432s/" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">Resume</a>
              <a href="https://github.com/Samcode-16" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};
