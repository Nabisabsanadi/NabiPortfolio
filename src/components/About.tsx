import React from 'react';
import { Code2, Database, Globe, Server, Smartphone, Users } from 'lucide-react';
import admin  from './images/admin.png';
const About = () => {
  const skills = [
    { name: 'Frontend', icon: Globe, techs: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'TypeScript',], color: 'text-blue-400' },
    { name: 'Backend', icon: Server, techs: ['Node.js', 'Express', 'Python', 'RESTful APIs'], color: 'text-green-400' },
    { name: 'Database', icon: Database, techs: ['MongoDB', 'MongoDB Atlas', 'MySQL'], color: 'text-purple-400' },

    {
      name: 'Graphic Design Tools & Utilities', icon:Smartphone , techs: ['Canva', 'Figma', 'Adobe Photoshop (Basic)', 'Banner Design', 'Social Media Posts', 'Logo Design']
      , color: 'text-orange-400'
    },
    {
      name: 'Tools & Utilities', icon: Code2, techs: ['VS Code', 'npm', 'Postman', 'Git', 'GitHub', 'ChatGPT']
      , color: 'text-pink-400'
    },
    { name: 'Soft Skills', icon: Users, techs: ['Problem Solving', 'Communication', 'Adaptability', 'Teamwork'], color: 'text-teal-400' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate MERN Stack Developer with 1.5 years of Front-End experience, skilled in React, JavaScript, HTML, CSS, and Tailwind CSS. I'm actively growing my back-end expertise with Node.js, Express, and MongoDB, and love building clean, user-friendly, and scalable web solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-400 leading-relaxed">
              I started my journey as a self-taught developer, driven by a deep interest in web technologies. Over time, I honed my skills in HTML, CSS, JavaScript, React, and the MERN stack, eventually stepping into the industry as a Front-End Developer at AIMSIT, where I built responsive SPAs and integrated RESTful APIs.

              Through hands-on experience with startups and personal projects, I’ve developed a strong foundation in full-stack development. I enjoy learning new tools, building impactful applications, and sharing knowledge through mentorship and community involvement.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I’m not coding, I enjoy exploring new technologies, contributing to personal and open-source projects, and sharing knowledge through mentorship and community engagement.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">1.5</div>
                <div className="text-gray-400">Years of Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <div
                className="w-40 h-48 mx-auto bg-gradient-to-br from-purple-400  to-pink-400 rounded-xl shadow-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${admin})` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <skill.icon className={`w-8 h-8 ${skill.color} mr-3`} />
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="space-y-2">
                {skill.techs.map((tech) => (
                  <div
                    key={tech}
                    className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
