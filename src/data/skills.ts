export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: string;
}

export const skills: Skill[] = [
  { name: 'React', level: 'advanced', category: 'Frontend' },
  { name: 'TypeScript', level: 'advanced', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 'intermediate', category: 'Frontend' },
  { name: 'Node.js', level: 'intermediate', category: 'Backend' },
  { name: 'Python', level: 'advanced', category: 'Backend' },
  { name: 'MongoDB', level: 'intermediate', category: 'Database' },
  { name: 'Git', level: 'advanced', category: 'Tools' },
  { name: 'Docker', level: 'beginner', category: 'Tools' },
];
