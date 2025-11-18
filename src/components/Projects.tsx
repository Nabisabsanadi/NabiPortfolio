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
const Projects = () => {
  const projects = [
    {
     title: 'Ainexcore Academy – MERN Stack',
     description: 'A full-stack educational platform with secure authentication, complete CRUD operations, protected APIs, and a fully responsive React + Tailwind interface.',
     image: ainexcore,
     tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB-Atlas'],
     liveUrl: 'https://ainexcore-academy.netlify.app/',
     githubUrl: 'https://github.com/Nabisabsanadi/ainexcore_frontend',
     featured: true
    }


      title: 'E-Commerce Frontend UI',
      description: 'A responsive and user-friendly front-end interface for an e-commerce platform. Built with React and Tailwind CSS, featuring product listings, filtering, cart functionality, and seamless user navigation.',
      image: shopsy,
      tech: ['React', 'Tailwind CSS', 'React Router', 'Context API'],
      // liveUrl: 'https://ecommerce-demo.vercel.app',
      liveUrl: 'https://shopsy-ecommerce-web.netlify.app/',
      // githubUrl: 'https://github.com/username/ecommerce-platform',
      githubUrl: 'https://github.com/Nabisabsanadi/shopsy-ecommerce-web',
      featured: true
    },
    {
      title: 'Institute Management System',
      description: 'A responsive and admin-friendly interface built with React and Tailwind CSS. Features include dashboard metrics, student/course management, attendance tracking, and reports—designed for smooth and efficient institute operations.',
      image: ims,
      tech: ['React', 'Tailwind CSS', 'React Router', 'Context API'],
      liveUrl: 'https://institute-management-system-web.netlify.app/',
      githubUrl: 'https://github.com/Nabisabsanadi/Institute-Management-System-',
      featured: true
    },
    {
      title: 'ZENTORIX ENTERPRISES',
      description: 'A modern and responsive front-end interface for an industrial services platform. Built with HTML,CSS,JavaScript, it features service listings, project showcases, team introductions, and smooth user navigation for a professional user experience.',
      image: ZENTORIX,
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      liveUrl: 'https://comforting-basbousa-db9eed.netlify.app/',
      githubUrl: 'https://github.com/Nabisabsanadi/ZENTORIX-ENTERPRISES',
      featured: true
    },
    {
      title: 'Rozgarhub-Job Website',
      description: 'A responsive job portal built with React and Tailwind CSS. Features include job listings, search and filters, user registration/login, and profile pages—designed to connect workers with employers in a simple and effective way.',
      image: jobimg,
      tech: ['React', 'Tailwind CSS', 'React Router', 'Context API'],
      liveUrl: 'https://rozgarhub-web.netlify.app/',
      githubUrl: 'https://github.com/Nabisabsanadi/RozgarHub',
      featured: true
    },
    {
      title: 'EMI Calculation App',
      description: 'A responsive, user-friendly, and financial-grade interface built to calculate Equated Monthly Installments (EMI). Powered by React and Tailwind CSS, it includes interactive input forms, detailed results, charts, comparison tools, and seamless navigation.',
      image: Imgemi,
      tech: ['React', 'Tailwind CSS', 'React Router', 'Context API'],
      liveUrl: 'https://loan-emi-calculation-app.netlify.app/',
      githubUrl: 'https://github.com/Nabisabsanadi/loanCalculator',
      featured: false
    },
    {
      title: 'Doze-Coffee-Cafe',
      description: 'A sleek and responsive café website built with HTML,CSS,Bootsrtap and JS. Features include a hero banner, product menu, about section, testimonials, blog highlights, and contact info. Designed for smooth navigation, strong visuals, and easy customization — perfect for showcasing a modern café online.',
      image: dozecoffee,
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      liveUrl: 'https://nabisabsanadi.github.io/Dozecafe/',
      githubUrl: 'https://github.com/Nabisabsanadi/Dozecafe',
      featured: false
    },
    {
      title: 'BuildMinds Engineering',
      description: 'A responsive and professional industrial website built with React and Tailwind CSS. It features a hero banner, services showcase, project portfolio, about section, testimonials, and contact form—designed for smooth navigation and a strong corporate presence.',
      image: construction,
      tech: ['React', 'Tailwind CSS', 'React Router', 'Context API'],
      liveUrl: 'https://buildminds-engineering.netlify.app/',
      githubUrl: 'https://github.com/Nabisabsanadi/BuildMinds-Engineering',
      featured: false
    },
    {
      title: 'Technovia Web Technology ',
      description: 'A responsive and modern corporate website built with React and Tailwind CSS. It features a hero banner, services section (web design, development, SEO), project portfolio, team showcase, client testimonials, and a clear contact form—designed for seamless navigation, professional presentation, and strong online presence',
      image: technovia,
     tech: ['React', 'Tailwind CSS', 'React Router', 'Context API'],
      liveUrl: 'https://technovia-web-technology.netlify.app/',
      githubUrl: 'https://github.com/Nabisabsanadi/Technovia-Web-Technology-',
      featured: false
    },
    {
      title: 'Roshanautomobile',
      description: 'A responsive and modern vehicle showcase website built with React and Tailwind CSS. Features include a hero banner, car listings, services, testimonials, and contact form—designed for a smooth and professional user experience.',
      image: roshan,
     tech: ['React', 'Tailwind CSS', 'React Router', 'Context API'],
      liveUrl: 'https://roshanautomobile.netlify.app/',
      githubUrl: 'https://github.com/Nabisabsanadi/RoshanAutoMobile',
      featured: false
    },
    {
      title: 'E-Commerce',
      description: 'A responsive and user-friendly front-end interface for an e-commerce platform. Built with React and Bootstrap',
      image: ecom,
     tech: ['React', 'Bootsrtap', 'React Router', 'Context API'],
      liveUrl: 'https://e-commerce-platform-clone.netlify.app/',
      githubUrl: 'https://github.com/Nabisabsanadi/E-commerce',
      featured: false
    },
    {
      title: 'Website Services Online',
      description: 'A responsive personal portfolio website built with HTML, CSS, and Bootstrap. It includes a hero section, project showcase, about info, and contact form—designed for a clean and professional online presence.',
      image: webservice,
     tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      liveUrl: 'https://webservces.netlify.app/',
      githubUrl: 'https://github.com/Nabisabsanadi/WebApp',
      featured: false
    },
    {
      title: 'E-Radiant Rings & Things ',
      description: 'A stylish and responsive jewelry website built with HTML CSS JS and Bootstrap. Features include a hero banner, ring collection gallery, product details, and smooth navigation—designed for an elegant and user-friendly shopping experience.',
      image: jewl,
     tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      liveUrl: 'https://nabisabsanadi.github.io/Radiant-Rings-Things/',
      githubUrl: 'https://github.com/Nabisabsanadi/Radiant-Rings-Things',
      featured: false
    }
  ];

  const getProjectIcon = (tech: string[]) => {
    if (tech.includes('React Native') || tech.includes('Expo')) {
      return <Smartphone className="w-5 h-5 text-purple-400" />;
    } else if (tech.includes('MongoDB') || tech.includes('PostgreSQL')) {
      return <Database className="w-5 h-5 text-green-400" />;
    } else {
      return <Globe className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            from concept to deployment.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  {getProjectIcon(project.tech)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  {getProjectIcon(project.tech)}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-gray-400 text-xs px-2 py-1">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded text-sm hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  >
                    <ExternalLink size={12} />
                    <span>Live</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-1 border border-gray-600 text-gray-300 px-3 py-2 rounded text-sm hover:border-purple-500 hover:text-purple-400 transition-all duration-200"
                  >
                    <Github size={12} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Github size={20} />
            <span>View More Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
