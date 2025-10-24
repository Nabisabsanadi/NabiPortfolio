import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Code,
  Database,
  Server,
  Smartphone,
} from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Front-End Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden text-center px-4 sm:px-6 lg:px-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
        {/* Tech Icons */}
        <div className="flex justify-center space-x-5 sm:space-x-8 mb-6 sm:mb-8 opacity-80">
          <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 animate-pulse" />
          <Database
            className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
          <Server
            className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 animate-pulse"
            style={{ animationDelay: "0.8s" }}
          />
          <Smartphone
            className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 animate-pulse"
            style={{ animationDelay: "1.2s" }}
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Nabisab Sanadi
          </span>
        </h1>

        {/* Typing Text */}
        <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 min-h-[2.5rem] flex items-center justify-center">
          <span className="border-r-2 border-purple-400 pr-2 animate-pulse">
            {text}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed px-2">
          Passionate about crafting scalable and high-performance web
          applications using the MERN Stack. I love transforming ideas into
          visually appealing, responsive, and functional digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-pink-500/25 w-full sm:w-auto"
          >
            View My Work
          </button>
          <a
            href="mailto:sanadinabi4@gmail.com"
            className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 w-full sm:w-auto"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-purple-300 transition-colors duration-200"
      >
        <ChevronDown size={30} />
      </button>
    </section>
  );
};

export default Hero;

