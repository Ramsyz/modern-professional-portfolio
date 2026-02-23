import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Mail, 
  ArrowUp,
  Cpu,
  Layers
} from 'lucide-react';

import { PROJECTS, SKILLS } from './constants';
import { SocialLinks } from './components/SocialLinks';
import { SkillBadge } from './components/SkillBadge';
import { ProjectCard } from './components/ProjectCard';
import { ContactForm } from './components/ContactForm';
import { SectionHeader } from './components/SectionHeader';

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col md:flex-row">
        <Helmet>
          <title>Seetaram Vannemreddi | Junior Full Stack Developer</title>
          <meta name="description" content="Portfolio of Seetaram Vannemreddi, a junior full stack developer specializing in React, TypeScript, and modern web applications." />
        </Helmet>

        {/* LEFT COLUMN: Bio & Skills (Fixed on desktop) */}
        <aside className="w-full md:w-[40%] md:h-screen md:fixed left-0 top-0 p-8 lg:p-16 flex flex-col justify-between bg-white border-r border-zinc-200 overflow-y-auto">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img 
                  src="/Profile.jpg"
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-2">
                Alex Rivera
              </h1>
              <h2 className="text-xl font-medium text-zinc-600 mb-6">
                Senior Software Engineer
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-md">
                I build accessible, pixel-perfect digital experiences for the web. 
                Focused on performance, scalability, and clean architecture.
              </p>

              <div className="mb-12">
                <SocialLinks />
              </div>
            </motion.div>

            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-4 flex items-center gap-2">
                  <Cpu size={14} /> Technical Arsenal
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} />
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          <div className="hidden md:block pt-8">
            <p className="text-xs text-zinc-400 font-medium">
              © {new Date().getFullYear()} Seetaram Vannemreddi • Built with React & Tailwind
            </p>
          </div>
        </aside>

        {/* RIGHT COLUMN: Projects & Contact (Scrollable) */}
        <main className="w-full md:w-[60%] md:ml-[40%] p-8 lg:p-16 space-y-24">
          
          {/* Projects Section */}
          <section id="projects" className="space-y-12">
            <SectionHeader title="Recent Projects" Icon={Layers} />

            <div className="grid gap-8">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-12">
            <SectionHeader title="Get In Touch" Icon={Mail} />
            <ContactForm />
          </section>

          {/* Footer */}
          <footer className="pt-12 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-zinc-400">
              Designed & Built by Alex Rivera
            </p>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-zinc-600 transition-colors group"
            >
              Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </footer>
        </main>
      </div>
    </HelmetProvider>
  );
}
