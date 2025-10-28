"use client";

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Cpu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Portfolio = () => {
  const skills = {
    languages: ['JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'jQuery', 'Bootstrap', 'EJS'],
    databases: ['PostgreSQL', 'Prisma ORM'],
    tools: ['Git', 'Jest', 'Cypress', 'Storybook']
  };

  const projects = [
    {
      title: "Cooking with Doug",
      description: "A modern recipe management platform that revolutionizes how home cooks organize and discover recipes.",
      longDescription: "Built with both frontend polish and backend power in mind, this application delivers a smooth, responsive user experience on any device. It uses React, Next.js, and Tailwind CSS to create clean, intuitive interfaces, while leveraging OpenAI's API and a robust backend to power intelligent recipe extraction and search.",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'OpenAI API'],
      features: [
        "AI-powered recipe extraction and parsing with natural language input",
        "Responsive UI designed for both mobile and desktop cooking workflows",
        "Advanced search and filtering with a visually rich tagging system",
        "Interactive recipe management tools with real-time updates",
        "Accessible design patterns to ensure inclusivity and ease of use",
      ],
      github: "https://github.com/RhinoBytes/RecipesWebsite",
      live: "https://rhinobytes.github.io/RecipesWebsite/",
      image: "/photo.png",
      video: "/video.png"
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300 bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Douglas Ross
            </div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hidden sm:block font-medium">About</a>
              <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hidden sm:block font-medium">Skills</a>
              <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hidden sm:block font-medium">Projects</a>
              <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hidden sm:block font-medium">Contact</a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up">
              Douglas Ross
            </h1>
            <p className="text-2xl sm:text-3xl mb-6 text-gray-700 dark:text-gray-200 font-medium animate-fade-in-up animate-delay-100">
              Full-Stack developer who builds intuitive front-end experiences and scalable backend systems
            </p>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Frontend-focused full-stack developer with a strong eye for clean design and seamless user interactions. Experienced in React, Next.js, and modern CSS frameworks, I craft performant interfaces that feel natural and responsive. As a backend team leader, I&apos;ve also architected APIs, optimized databases, and mentored developers, bridging the gap between user experience and technical infrastructure. Based in Toronto, ON.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in-up animate-delay-300">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 font-semibold hover:scale-105 transform"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-gray-700 dark:text-gray-300">
              I&apos;m a passionate developer who thrives on solving complex challenges from both the front and back end. On the frontend, I specialize in building user-friendly, responsive interfaces that balance design and functionality. I pay attention to the details that make apps intuitive, from fluid navigation to accessible components.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              On the backend, I&apos;ve led teams at YourBeat Inc., architected APIs, and delivered infrastructure improvements that directly impacted scalability and performance.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              My approach combines UI/UX empathy with technical precision. I don&apos;t just write code, I design systems and experiences that are reliable, performant, and enjoyable to use.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              When I&apos;m not building interfaces or optimizing systems, you&apos;ll find me experimenting with new recipes, cycling through Toronto, or tending to my virtual farm in Stardew Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/50 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
              <Code className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800/50 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
              <Globe className="w-10 h-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800/50 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
              <Database className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-800/50 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
              <Cpu className="w-10 h-10 text-red-600 dark:text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Tools & Testing</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm"
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
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                      {/* Project Photo */}
                      <div className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video shadow-lg">
                        <img
                          src={project.image}
                          alt="Project Screenshot"
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Video Thumbnail */}
                      <div className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video shadow-lg">
                        <img
                          src={project.video}
                          alt="Demo Video Placeholder"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
                        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300 font-medium">
                          {project.description}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Key Features:</h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          View Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              More projects coming soon! I&apos;m always working on something new.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in discussing new opportunities, interesting projects, or just talking
            about technology. Whether you&apos;re looking for a full-stack developer or want to chat about
            the latest in web development, I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:dross.canada@gmail.com"
              className="flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 font-medium hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5 mr-3" />
              dross.canada@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/douglas-c-ross/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 font-medium hover:scale-105 shadow-lg"
            >
              <Linkedin className="w-5 h-5 mr-3" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Douglas Ross. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
