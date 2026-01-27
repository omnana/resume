import { projects } from '../data/projects';
import { siteTexts } from '../data/texts';

const Projects = () => {
  const { title, projectCard } = siteTexts.projects;

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 transition-colors"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg">{projectCard.screenshot}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.projectLink}
                    className="text-blue-600 hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectCard.viewProject}
                  </a>
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      className="text-gray-600 hover:text-gray-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projectCard.github}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
