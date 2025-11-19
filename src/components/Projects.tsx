import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';

import shopsy from './images/Shopee-1.jpg';
import ZENTORIX from './images/civil.jpg';
import Imgemi from './images/emi.jpg';
import dozecoffee from './images/doze-coffe.jpg';
import ims from './images/ims.webp';
import jobimg from './images/job.jpg';
import construction from './images/construction.jpeg';
import technovia from './images/technovia.webp';
import roshan from './images/roshan.png';
import ecom from './images/ecom.png';
import jewl from './images/jewl.png';
import webservice from './images/project-8.jpg';
import ainexcore from './images/ainexcore.jpg';

const projects = [
  {
    title: 'Ainexcore Academy – MERN Stack',
    description:
      'A full-stack educational platform with authentication, CRUD operations, protected APIs, and responsive UI.',
    image: ainexcore,
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB-Atlas'],
    liveUrl: 'https://ainexcore-academy.netlify.app/',
    githubUrl: 'https://github.com/Nabisabsanadi/ainexcore_frontend',
    featured: true,
  },
  {
    title: 'E-Commerce Frontend UI',
    description:
      'A responsive front-end for an e-commerce platform built with React and Tailwind.',
    image: shopsy,
    tech: ['React', 'Tailwind CSS', 'React Router', 'Context API'],
    liveUrl: 'https://shopsy-ecommerce-web.netlify.app/',
    githubUrl: 'https://github.com/Nabisabsanadi/shopsy-ecommerce-web',
    featured: true,
  },
  {
    title: 'Institute Management System',
    description:
      'Admin dashboard for institute operations like student/course management and attendance tracking.',
    image: ims,
    tech: ['React', 'Tailwind CSS', 'React Router', 'Context API'],
    liveUrl: 'https://institute-management-system-web.netlify.app/',
    githubUrl: 'https://github.com/Nabisabsanadi/Institute-Management-System-',
    featured: true,
  },
  {
    title: 'ZENTORIX ENTERPRISES',
    description:
      'A modern industrial service website built with HTML, CSS, JS, and Bootstrap.',
    image: ZENTORIX,
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://comforting-basbousa-db9eed.netlify.app/',
    githubUrl: 'https://github.com/Nabisabsanadi/ZENTORIX-ENTERPRISES',
    featured: true,
  },
  {
    title: 'Rozgarhub-Job Website',
    description:
      'A job portal with job listings, search filters, and user login system.',
    image: jobimg,
    tech: ['React', 'Tailwind CSS', 'React Router', 'Context API'],
    liveUrl: 'https://rozgarhub-web.netlify.app/',
    githubUrl: 'https://github.com/Nabisabsanadi/RozgarHub',
    featured: true,
  },
  {
    title: 'EMI Calculation App',
    description:
      'A clean and interactive EMI calculation tool built with React.',
    image: Imgemi,
    tech: ['React', 'Tailwind CSS', 'React Router'],
    liveUrl: 'https://loan-emi-calculation-app.netlify.app/',
    githubUrl: 'https://github.com/Nabisabsanadi/loanCalculator',
  },
  {
    title: 'Doze-Coffee-Cafe',
    description:
      'A café website built using HTML, CSS, Bootstrap, and JavaScript.',
    image: dozecoffee,
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://nabisabsanadi.github.io/Dozecafe/',
    githubUrl: 'https://github.com/Nabisabsanadi/Dozecafe',
  },
  {
    title: 'BuildMinds Engineering',
    description: 'A corporate engineering services website built with React.',
    image: construction,
    tech: ['React', 'Tailwind CSS'],
    liveUrl: 'https://buildminds-engineering.netlify.app/',
    githubUrl: 'https://github.com/Nabisabsanadi/BuildMinds-Engineering',
  },
  {
    title: 'Technovia Web Technology',
    description: 'A corporate site featuring services, portfolio, team, and contact.',
    image: technovia,
    tech: ['React', 'Tailwind CSS'],
    liveUrl: 'https://technovia-web-technology.netlify.app/',
    githubUrl: 'https://github.com/Nabisabsanadi/Technovia-Web-Technology-',
  },
  {
    title: 'Roshanautomobile',
    description: 'Vehicle showcase website with listings and contact form.',
    image: roshan,
    tech: ['React', 'Tailwind CSS'],
    liveUrl: 'https://roshanautomobile.netlify.app/',
    githubUrl: 'https://github.com/Nabisabsanadi/RoshanAutoMobile',
  },
  {
    title: 'E-Commerce',
    description: 'A simple React + Bootstrap e-commerce UI.',
    image: ecom,
    tech: ['React', 'Bootstrap'],
    liveUrl: 'https://e-commerce-platform-clone.netlify.app/',
    githubUrl: 'https://github.com/Nabisabsanadi/E-commerce',
  },
  {
    title: 'Website Services Online',
    description: 'A personal portfolio website showcasing services and projects.',
    image: webservice,
    tech: ['HTML', 'CSS', 'Bootstrap'],
    liveUrl: 'https://webservces.netlify.app/',
    githubUrl: 'https://github.com/Nabisabsanadi/WebApp',
  },
  {
    title: 'E-Radiant Rings & Things',
    description: 'A stylish jewelry shop website built with Bootstrap.',
    image: jewl,
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://nabisabsanadi.github.io/Radiant-Rings-Things/',
    githubUrl: 'https://github.com/Nabisabsanadi/Radiant-Rings-Things',
  },
];

const getProjectIcon = (tech) => {
  if (tech.includes('React Native')) return <Smartphone className="w-5 h-5 text-purple-400" />;
  if (tech.includes('MongoDB')) return <Database className="w-5 h-5 text-green-400" />;
  return <Globe className="w-5 h-5 text-blue-400" />;
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
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
                  <div className="absolute top-4 right-4">{getProjectIcon(project.tech)}</div>
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
                    </a>                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* All Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src={project.image} className="w-full h-56 object-cover group-hover:scale-110 transition" />
                <div className="absolute top-4 right-4">{getProjectIcon(project.tech)}</div>
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

