import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative grid grid-cols-1 lg:grid-cols-5 gap-6 p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xl transition-all duration-300"
    >
      <div className="lg:col-span-2 rounded-xl overflow-hidden aspect-video lg:aspect-square">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="lg:col-span-3 flex flex-col justify-between py-2">
        <div>
          <h4 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-zinc-700 transition-colors">
            {project.title}
          </h4>
          <p className="text-zinc-500 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map(tech => (
              <span key={tech} className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
