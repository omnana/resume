// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'unity' | 'unreal' | 'mobile' | 'pc' | 'web';
  role: 'developer' | 'designer' | 'artist' | 'producer' | 'lead-developer' | 'gameplay-programmer' | 'solo-developer' | 'developer-designer';
  coverImage: string;
  previewGif?: string;
  videoUrl?: string;
  demoUrl?: string;
  detailsUrl?: string;
  techStack: string[];
  features: string[];
  developmentTime: string;
  teamSize?: number;
  isTeamProject: boolean;
  status?: 'completed' | 'in-development' | 'published' | 'prototype';
  year?: string;
  tags?: string[];
}

// Skill types
export interface Skill {
  name: string;
  category: 'language' | 'engine' | 'tool' | 'framework';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

// Navigation types
export interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

// Contact types
export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  bluesky?: string;
  itch?: string;
}
