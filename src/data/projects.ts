import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cyber Runner 2077',
    description: 'A fast-paced endless runner set in a cyberpunk dystopia with procedurally generated levels.',
    type: 'unity',
    role: 'developer',
    coverImage: '/images/projects/cyber-runner-cover.jpg',
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
    isTeamProject: true
  },
  {
    id: '2',
    title: 'Mystic Realms',
    description: 'A fantasy RPG with turn-based combat and deep character customization.',
    type: 'unreal',
    role: 'developer',
    coverImage: '/images/projects/mystic-realms-cover.jpg',
    videoUrl: 'https://www.youtube.com/embed/example2',
    techStack: ['Unreal Engine', 'C++', 'Blueprints', 'Niagara'],
    features: [
      'Turn-based combat system',
      'Character progression',
      'Dynamic weather system',
      'Open world exploration'
    ],
    developmentTime: '6 months',
    teamSize: 4,
    isTeamProject: true
  },
  {
    id: '3',
    title: 'Puzzle Master',
    description: 'A mobile puzzle game with unique mechanics and minimalist design.',
    type: 'mobile',
    role: 'developer',
    coverImage: '/images/projects/puzzle-master-cover.jpg',
    demoUrl: 'https://example.com/puzzle-demo',
    techStack: ['Unity', 'C#', 'Mobile Optimization'],
    features: [
      '150+ unique levels',
      'Intuitive touch controls',
      'Progressive difficulty',
      'Achievement system'
    ],
    developmentTime: '2 months',
    isTeamProject: false
  }
];
