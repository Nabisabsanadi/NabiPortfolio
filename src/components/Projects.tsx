import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';

const getProjectIcon = (tech) => {
  const techString = tech.join(" ").toLowerCase();

  if (techString.includes("react native"))
    return <Smartphone className="w-5 h-5 text-purple-400" />;

  if (techString.includes("mongodb"))
    return <Database className="w-5 h-5 text-green-400" />;

  return <Globe className="w-5 h-5 text-blue-400" />;
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects.
          </p>
        </div>

        {/* Featured */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div key={project.title} className="group bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                
                <div className="relative overflow-hidden">
                  <img src={project.image} className="w-full h-64 object-cover group-hover:scale-110 transition" />
                  <div className="absolute top-4 right-4">
                    {getProjectIcon(project.tech)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a href={project.liveUrl} target="_blank" className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg">
                      <ExternalLink size={16} /> <span>Live Demo</span>
                    </a>

                    <a href={project.githubUrl} target="_blank" className="flex items-center border border-gray-600 text-gray-300 px-4 py-2 rounded-lg">
                      <Github size={16} /> <span>Code</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
        </div>

        {/* All Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div key={project.title} className="group bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">

                <div className="relative overflow-hidden">
                  <img src={project.image} className="w-full h-56 object-cover group-hover:scale-110 transition" />
                  <div className="absolute top-4 right-4">
                    {getProjectIcon(project.tech)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a href={project.liveUrl} target="_blank" className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg">
                      <ExternalLink size={16} /> <span>Live</span>
                    </a>

                    <a href={project.githubUrl} target="_blank" className="flex items-center border border-gray-600 text-gray-300 px-4 py-2 rounded-lg">
                      <Github size={16} /> <span>Code</span>
                    </a>
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
