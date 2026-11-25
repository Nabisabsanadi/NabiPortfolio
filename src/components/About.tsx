
import React from 'react';
import {
  Code2, Database, Globe, Server, Smartphone,
  Users, Cpu, Cloud, Brain
} from 'lucide-react';

import admin from './images/admin.png';

const skills = [
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    techs: [
      'Artificial Intelligence',
      'Machine Learning Fundamentals',
      'Generative AI',
      'RAG',
      'Prompt Engineering',
      'AI Tools',
      'Python',
      'NumPy',
      'Pandas'
    ],
    color: 'text-indigo-400'
  },
  {
    name: 'Frontend Development',
    icon: Globe,
    techs: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'React.js',
      'Context API',
      'React Router',
      'Tailwind CSS',
      'Bootstrap',
      'Responsive UI'
    ],
    color: 'text-blue-400'
  },
  {
    name: 'Backend Development',
    icon: Server,
    techs: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'Django',
      'FastAPI'
    ],
    color: 'text-green-400'
  },
  {
    name: 'Database',
    icon: Database,
    techs: [
      'MongoDB',
      'MySQL'
    ],
    color: 'text-purple-400'
  },
  {
    name: 'UI/UX Design',
    icon: Smartphone,
    techs: [
      'Figma',
      'UI Design Fundamentals',
      'UX Fundamentals',
      'Wireframing',
      'Prototyping'
    ],
    color: 'text-orange-400'
  },
  {
    name: 'Programming Languages',
    icon: Code2,
    techs: [
      'Python',
      'JavaScript (ES6+)'
    ],
    color: 'text-yellow-400'
  },
  {
    name: 'Developer Tools',
    icon: Code2,
    techs: [
      'VS Code',
      'Git',
      'GitHub',
      'Postman',
      'Google Colab'
    ],
    color: 'text-pink-400'
  },
  {
    name: 'Deployment',
    icon: Cloud,
    techs: [
      'Netlify',
      'Vercel'
    ],
    color: 'text-green-300'
  },
  {
    name: 'Professional Skills',
    icon: Users,
    techs: [
      'Technical Training',
      'Student Mentoring',
      'Problem Solving',
      'Communication',
      'Teamwork',
      'Project Guidance'
    ],
    color: 'text-teal-400'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I’m a Technical Trainer & Web Developer with 5+ years
            of experience in technical training, programming, and
            web development. Skilled in Artificial Intelligence,
            Machine Learning, Python, React.js, JavaScript, MERN
            Stack, and UI/UX Design. I enjoy building practical
            applications and helping students learn through
            hands-on, project-based training.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          <div className="space-y-6">

            <h3 className="text-2xl font-bold text-white mb-4">
              My Journey
            </h3>

            <p className="text-gray-400 leading-relaxed">
              My journey in technology started with a strong
              interest in programming and web development.
              Since then, I have continuously explored new
              technologies, improved my technical skills, and
              worked on practical projects.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I started my professional career as a
              <span className="text-purple-400 font-semibold">
                {' '}Technical Trainer & Web Developer at AIMSIT
              </span>,
              Karnataka (September 2021 – October 2025), where
              I trained students in web development, programming,
              React.js, APIs, databases, and UI/UX fundamentals.
              I also developed responsive web applications and
              guided students through real-world projects.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Later, I joined
              <span className="text-pink-400 font-semibold">
                {' '}RNG Play, Noida
              </span>,
              as a Front-End Developer in the Game Development
              Division (December 2025 – March 2026), where I
              developed interactive game interfaces, animated
              screens, and responsive UI components.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently, I work as a
              <span className="text-purple-400 font-semibold">
                {' '}Freelance Technical Trainer
              </span>,
              delivering hands-on training in Artificial
              Intelligence, Machine Learning fundamentals,
              Python programming, Web Development, and UI/UX Design.
              I enjoy mentoring students, exploring emerging
              technologies, and building practical applications.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  10+
                </div>
                <div className="text-gray-400">
                  Projects Completed
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">
                  5+
                </div>
                <div className="text-gray-400">
                  Years of Experience
                </div>
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
                <h3 className="text-xl font-semibold text-white">
                  {skill.name}
                </h3>
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
