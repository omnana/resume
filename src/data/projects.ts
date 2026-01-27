export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  projectLink: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "项目示例 1",
    description: "这是一个示例项目的描述，展示了项目的主要功能和特点。",
    image: "/project1.jpg",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    projectLink: "https://example.com/project1",
    githubLink: "https://github.com/username/project1",
  },
  {
    id: 2,
    name: "项目示例 2",
    description: "另一个示例项目，使用了不同的技术栈和架构。",
    image: "/project2.jpg",
    techStack: ["Vue.js", "Node.js", "MongoDB"],
    projectLink: "https://example.com/project2",
    githubLink: "https://github.com/username/project2",
  },
];
