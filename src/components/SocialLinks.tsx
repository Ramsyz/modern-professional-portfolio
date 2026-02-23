import { Github, Linkedin, Mail } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a href="#" className="p-2 rounded-lg bg-zinc-100 text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors">
        <Github size={20} />
      </a>
      <a href="#" className="p-2 rounded-lg bg-zinc-100 text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="mailto:hello@alexrivera.dev" className="p-2 rounded-lg bg-zinc-100 text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors">
        <Mail size={20} />
      </a>
    </div>
  );
};
