import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cyber Runner 2077',
    description: 'A fast-paced endless runner set in a cyberpunk dystopia with procedurally generated levels.',
    type: 'unity',
    role: 'lead-developer',
    coverImage: '/images/projects/img_g1.png',
    previewGif: '/images/projects/cyber-runner-preview.gif',
    videoUrl: 'https://www.youtube.com/embed/example',
    demoUrl: 'https://example.com/demo',
    techStack: ['Unity', 'C#', 'Shader Graph', 'DOTS'],
    features: [
      'Procedural level generation',
      'Dynamic difficulty scaling',
      'Custom shader effects',
      'Mobile optimization'
    ],
    developmentTime: '3 months',
    teamSize: 2,
    isTeamProject: true,
    status: 'completed',
    year: '2024'
  },
  {
    id: '2',
    title: 'Mystic Realms',
    description: 'A fantasy RPG with turn-based combat and deep character customization.',
    type: 'unreal',
    role: 'gameplay-programmer',
    coverImage: '/images/projects/img_g2.png',
    videoUrl: 'https://www.youtube.com/embed/example2',
    demoUrl: 'https://example.com/mystic-demo',
    techStack: ['Unreal Engine', 'C++', 'Blueprints', 'Niagara'],
    features: [
      'Turn-based combat system',
      'Character progression',
      'Dynamic weather system',
      'Open world exploration'
    ],
    developmentTime: '6 months',
    teamSize: 4,
    isTeamProject: true,
    status: 'in-development',
    year: '2024'
  },
  {
    id: '3',
    title: 'Puzzle Master',
    description: 'A mobile puzzle game with unique mechanics and minimalist design.',
    type: 'mobile',
    role: 'solo-developer',
    coverImage: '/images/projects/img_g3.png',
    demoUrl: 'https://example.com/puzzle-demo',
    techStack: ['Unity', 'C#', 'Mobile Optimization'],
    features: [
      '150+ unique levels',
      'Intuitive touch controls',
      'Progressive difficulty',
      'Achievement system'
    ],
    developmentTime: '2 months',
    teamSize: 1,
    isTeamProject: false,
    status: 'published',
    year: '2023'
  },
  {
    id: '4',
    title: 'Space Defender',
    description: 'A retro-style space shooter with modern graphics and intense gameplay.',
    type: 'pc',
    role: 'developer-designer',
    coverImage: '/images/projects/img_g4.png',
    videoUrl: 'https://www.youtube.com/embed/space-defender',
    demoUrl: 'https://example.com/space-defender',
    techStack: ['Unity', 'C#', 'Post Processing', 'Audio System'],
    features: [
      'Classic arcade gameplay',
      'Modern visual effects',
      'Progressive difficulty',
      'Leaderboard system'
    ],
    developmentTime: '1 month',
    teamSize: 1,
    isTeamProject: false,
    status: 'completed',
    year: '2023'
  }
];
