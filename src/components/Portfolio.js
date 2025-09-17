"use client";

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Cpu } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = {
    languages: ['JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'jQuery', 'Bootstrap', 'EJS'],
    databases: ['PostgreSQL', 'Prisma ORM'],
    tools: ['Git', 'Jest', 'Cypress', 'Storybook', 'RSpec']
  };

  const projects = [
    {
      title: "Cooking with Doug",
      description: "A modern recipe management platform that revolutionizes how home cooks organize and discover recipes.",
      longDescription: "Built with performance and user experience in mind, this application leverages OpenAI's API for automatic recipe extraction, implements a sophisticated tagging system for recipe discovery, and supports complex user interactions. The platform demonstrates my ability to integrate multiple technologies seamlessly while maintaining clean, scalable code architecture.",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'OpenAI API'],
      features: [
        'AI-powered recipe extraction and parsing',
        'Advanced search and filtering with complex tag system',
        'Real-time user interactions and recipe management',
        'Responsive design optimized for mobile and desktop'
      ],
      github: "https://github.com/placeholder",
      live: "https://cooking-with-doug.placeholder.com",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode
      ? 'bg-gray-900 text-white'
      : 'bg-white text-gray-900'
      }`}>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${darkMode
        ? 'bg-gray-900/80 border-gray-800'
        : 'bg-white/80 border-gray-200'
        } border-b`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Douglas Ross</div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="hover:text-blue-500 transition-colors hidden sm:block">About</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors hidden sm:block">Skills</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors hidden sm:block">Projects</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors hidden sm:block">Contact</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
                  }`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Douglas Ross
            </h1>
            <p className="text-xl sm:text-2xl mb-6 text-gray-600 dark:text-gray-300">
              Full-stack developer who solves complex problems and builds systems that scale
            </p>
            <p className="text-lg mb-8 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Backend team leader and full-stack developer with a proven track record of building scalable applications,
              mentoring teams, and optimizing performance. Based in Toronto, ON.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 border-2 rounded-lg transition-colors font-medium ${darkMode
                ? 'border-gray-700 hover:bg-gray-800'
                : 'border-gray-300 hover:bg-gray-50'
                }`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                I'm a passionate full-stack developer who thrives on solving complex technical challenges and building
                systems that scale. With experience leading backend teams at YourBeat Inc., I've architected APIs,
                mentored developers, and delivered infrastructure improvements that directly impact performance.
              </p>

              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                My approach combines technical precision with strategic thinking. I don't just write code – I build
                robust architectures that handle growth, optimize for performance, and create maintainable systems
                that teams can build upon. Every solution is designed with scalability and reliability in mind.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                When I'm not architecting backend systems or optimizing database queries, you'll find me experimenting with
                new recipes, cycling through Toronto, dancing, or tending to my virtual farm in Stardew Valley.
              </p>
            </div>

            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-lg`}>
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Led backend team of 10+ developers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Improved API response times by 60%
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Built 60% of YourBeat's backend infrastructure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Passionate about documentation & knowledge sharing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } hover:shadow-lg transition-shadow`}>
              <Code className="w-8 h-8 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${darkMode
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-200 text-gray-700'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } hover:shadow-lg transition-shadow`}>
              <Globe className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${darkMode
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-200 text-gray-700'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } hover:shadow-lg transition-shadow`}>
              <Database className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${darkMode
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-200 text-gray-700'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } hover:shadow-lg transition-shadow`}>
              <Cpu className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tools & Testing</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${darkMode
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-200 text-gray-700'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Featured Projects</h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'
                  } hover:shadow-xl transition-shadow`}
              >
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                          {project.description}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {project.longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={project.github}
                          className="flex items-center justify-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                        <a
                          href={project.live}
                          className="flex items-center justify-center px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>

                    <div className="lg:sticky lg:top-8">
                      <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'
                        } aspect-video flex items-center justify-center shadow-inner`}>
                        <div className="text-center p-8">
                          <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Globe className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-gray-500 dark:text-gray-400">
                            Project Screenshot
                          </p>
                          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                            Coming Soon
                          </p>
                        </div>
                      </div>

                      {/* Optional: Video placeholder */}
                      <div className={`mt-4 rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'
                        } aspect-video flex items-center justify-center shadow-inner`}>
                        <div className="text-center p-6">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white text-lg">▶</span>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Demo Video
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                            Coming Soon
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              More projects coming soon! I'm always working on something new.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Let's Build Something Together</h2>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, interesting projects, or just talking
            about technology. Whether you're looking for a full-stack developer or want to chat about
            the latest in web development, I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:dross.canada@gmail.com"
              className={`flex items-center justify-center px-8 py-4 rounded-lg transition-colors ${darkMode
                ? 'bg-gray-800 hover:bg-gray-700'
                : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              <Mail className="w-5 h-5 mr-3" />
              dross.canada@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/douglas-c-ross/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-3" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
        }`}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © 2025 Douglas Ross. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;