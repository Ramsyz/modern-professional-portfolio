import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with real-time inventory management and secure payment integration.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/seed/shop/800/600',
  },
  {
    id: '2',
    title: 'AI Task Manager',
    description: 'Smart task prioritization using machine learning to help users focus on high-impact work.',
    techStack: ['TypeScript', 'Python', 'React', 'FastAPI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/seed/ai/800/600',
  },
  {
    id: '3',
    title: 'Collaborative Whiteboard',
    description: 'Real-time drawing and brainstorming tool for remote teams with WebSocket synchronization.',
    techStack: ['React', 'Socket.io', 'Canvas API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/seed/draw/800/600',
  },
];

export const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Docker', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
  { name: 'AWS', category: 'Tools' },
];
