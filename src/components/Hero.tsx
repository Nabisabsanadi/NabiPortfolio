
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

  const words = [
    "Technical Trainer & Web Developer",
    "Python Developer",
    "AI & Machine Learning Enthusiast",
    "Generative AI & RAG Developer",
    "React.js Developer",
    "Full Stack Web Developer",
  ];

  useEffect(() => {
    const current = loopNum % words.length;
    const fullText = words[current];

    const timer = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      } else {
        setText(
          isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)
        );
      }
    }, isDeleting ? 40 : text === fullText ? 1500 : 90);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 px-5 sm:px-8 py-24 sm:py-28"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-pink-600/20 rounded-full blur-3xl" />

        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22%3E%3Cg fill=%22%23ffffff%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Tech Icons */}
        <div className="flex items-center justify-center gap-6 sm:gap-9 mb-8 sm:mb-10">
          <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 animate-pulse" />
          <Database className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 animate-pulse" />
          <Server className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 animate-pulse" />
          <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 animate-pulse" />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Hi, I'm{" "}
          <span className="block sm:inline bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Nabisab Sanadi
          </span>
        </h1>

        {/* Animated Title */}
        <div className="w-full min-h-[72px] sm:min-h-[60px] flex items-center justify-center mb-6">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 leading-snug">
            <span className="border-r-2 border-purple-400 pr-2">
              {text}
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg text-gray-400 leading-7 sm:leading-8 mb-8 px-1">
          Technical Trainer & Web Developer with 5+ years of experience
          in delivering technical training and developing practical
          applications. Skilled in Python, Data Science, AI/ML,
          Generative AI, RAG, React.js and Full Stack Web Development.
          Passionate about building real-world solutions and helping
          students develop industry-relevant technical skills.
        </p>

        {/* Experience Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            "5+ Years Experience",
            "Technical Training",
            "AI & Web Development",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs sm:text-sm backdrop-blur-sm hover:bg-purple-500/10 hover:border-purple-400/40 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto min-w-[180px] px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-pink-500/30 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>

          <a
            href="mailto:sanadinabi4@gmail.com"
            className="w-full sm:w-auto min-w-[180px] px-8 py-3 rounded-full border border-purple-400 text-purple-300 font-semibold hover:bg-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-purple-400 animate-bounce transition-colors duration-300"
      >
        <ChevronDown size={30} />
      </button>
    </section>
  );
};

export default Hero;
