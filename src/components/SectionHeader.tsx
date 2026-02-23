import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  Icon: LucideIcon;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, Icon }) => {
  return (
    <h3 className="text-2xl font-bold text-zinc-900 flex items-center gap-3">
      <Icon className="text-zinc-400" /> {title}
    </h3>
  );
};
