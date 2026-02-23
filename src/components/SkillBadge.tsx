import React from 'react';

interface SkillBadgeProps {
  name: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
      {name}
    </span>
  );
};
