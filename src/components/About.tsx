import React from 'react';
import { Code2, Database, Globe, Server, Smartphone, Users } from 'lucide-react';
import admin from './images/admin.png';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Globe, techs: ['HTML-5', 'CSS-3', 'React', 'Tailwind CSS','Material UI', 'Bootstrap', 'JavaScript[ES6]', 'TypeScript'], color: 'text-blue-400' },
    { name: 'Backend', icon: Server, techs: ['Node.js', 'Express', 'Next.js', 'RESTful APIs'], color: 'text-green-400' },
    { name: 'Database', icon: Database, techs: ['MongoDB', 'MongoDB Atlas', 'MySQL'], color: 'text-purple-400' },
    {
      name: 'Graphic Design Tools & Utilities', icon: Smartphone, techs: ['Canva', 'Figma', 'Adobe Photoshop (Basic)', 'Banner Design', 'Social Media Posts', 'Logo Design'],
      color: 'text-orange-400'
    },
    {
      name: 'Tools & Utilities', icon: Code2, techs: ['VS Code', 'npm', 'Postman', 'Git', 'GitHub', 'ChatGPT'],
      color: 'text-pink-400'
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
            I’m a passionate MERN Stack Developer with 1.5 years of front-end experience, skilled in React.js, JavaScript, HTML, CSS, and Tailwind CSS.
            I love crafting responsive, scalable, and user-friendly web applications, and continuously expanding my back-end expertise with Node.js, Express, and MongoDB.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-400 leading-relaxed">
              I began my journey as a self-taught developer, driven by a deep curiosity for web technologies and how they shape digital experiences.
              Over time, I strengthened my skills in HTML, CSS, JavaScript, React.js, and the MERN stack, building a strong foundation in full-stack development through consistent practice and real-world projects.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I started my professional career as a <span className="text-purple-400 font-semibold">Front-End Developer at AIMSIT</span>, where I built responsive single-page applications (SPAs),
              integrated RESTful APIs, and optimized MongoDB-based systems for dynamic content delivery.
              Later, I joined <span className="text-pink-400 font-semibold">RNG Play (Game Development Division)</span> as a Front-End Developer,
              working on slot-based casino games — creating interactive, high-performance interfaces with smooth animations and responsive layouts.
            </p>

            <p className="text-gray-400 leading-relaxed">
              These experiences have honed my ability to craft clean, scalable, and user-centric applications while collaborating in agile teams.
              I’m passionate about exploring new technologies, contributing to open-source projects, and sharing knowledge through mentorship and community engagement.
            </p>

            <p className="text-gray-400 leading-relaxed">
              When I’m not coding, I love experimenting with new tools, improving my problem-solving skills, and staying curious about emerging trends in web development.
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
                className="w-40 h-48 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl shadow-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${admin})` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
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
