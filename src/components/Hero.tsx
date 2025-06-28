import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Database, Server, Smartphone } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Front End Developer', 'MERN Developer', 'React.js Developer', 'Node.js Developer'];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Tech Icons */}
          <div className="flex justify-center space-x-6 mb-6 opacity-60">
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 animate-pulse" />
            <Database className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Server className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
            <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nabisab Sanadi
            </span>
          </h1>

          <div className="text-lg sm:text-2xl md:text-4xl text-gray-300 mb-8 min-h-[2rem] flex items-center justify-center text-center px-2">
            <span className="border-r-2 border-purple-400 pr-2 animate-pulse">{text}</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed px-2">
            Passionate about building robust and scalable web applications using the MERN stack.
            I bring ideas to life through clean code and modern design principles. Open to opportunities
            in Front-End and MERN stack development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 px-2">
            <button
              onClick={scrollToAbout}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <a
              href="mailto:sanadinabi4@gmail.com"
              className="w-full sm:w-auto text-center border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
