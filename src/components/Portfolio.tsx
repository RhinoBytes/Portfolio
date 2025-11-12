"use client";

import React from 'react';
import Image from 'next/image';
import { Linkedin, Mail, ExternalLink, Code, Database, Globe, Cpu } from 'lucide-react';
import { EnhancedThemeToggle } from './EnhancedThemeToggle';

const Portfolio = () => {
  const skills = {
    languages: ['JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'jQuery', 'Bootstrap', 'EJS'],
    databases: ['PostgreSQL', 'Prisma ORM'],
    tools: ['Git', 'Jest', 'Cypress', 'Storybook']
  };

  const projects = [
    {
      title: "Cookbook",
      description: "A production-ready recipe management platform that streamlines how home cooks organize and discover recipes.",
      longDescription: "Built with both frontend polish and backend power in mind, this application delivers a smooth, responsive user experience on any device. It uses React, Next.js, and Tailwind CSS for clean, intuitive interfaces, while leveraging OpenAI's API plus a robust backend with a normalized PostgreSQL schema, secure authentication, and scalable server-side logic to power intelligent recipe extraction and search.",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'OpenAI API'],
      features: [
        "AI-powered recipe extraction and parsing from natural language input",
        "Responsive UI optimized for both mobile and desktop cooking workflows",
        "Advanced search and filtering with a visually rich tagging system",
        "Interactive recipe management tools with real-time updates",
        "Secure authentication and a scalable, well-indexed database schema",
      ],
      live: "https://recipe-website-six-tawny.vercel.app/",
      image: "/demo.png",
      video: "/cookbook.gif"
    }
  ];

  return (
    <div 
      id="main-content" 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}
    >
      {/* Navigation */}
      <nav 
        className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 border-b"
        style={{ 
          backgroundColor: 'color-mix(in srgb, var(--color-background) 80%, transparent)',
          borderColor: 'var(--color-border)'
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="font-bold text-xl bg-clip-text text-transparent leading-tight pb-1"
              style={{ backgroundImage: 'var(--gradient)' }}
            >
              Douglas Ross
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="#about" 
                className="hover:text-[var(--color-primary)] transition-colors hidden sm:block font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded px-2 py-1"
                style={{ color: 'var(--color-text)' }}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="hover:text-[var(--color-primary)] transition-colors hidden sm:block font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded px-2 py-1"
                style={{ color: 'var(--color-text)' }}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="hover:text-[var(--color-primary)] transition-colors hidden sm:block font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded px-2 py-1"
                style={{ color: 'var(--color-text)' }}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="hover:text-[var(--color-primary)] transition-colors hidden sm:block font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded px-2 py-1"
                style={{ color: 'var(--color-text)' }}
              >
                Contact
              </a>
              <EnhancedThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h1 
              id="hero-heading"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent animate-fade-in-up leading-tight pb-2"
              style={{ backgroundImage: 'var(--gradient)' }}
            >
              Douglas Ross
            </h1>
            <p 
              className="text-2xl sm:text-3xl mb-6 font-medium animate-fade-in-up animate-delay-100 leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Full-Stack developer who builds intuitive front-end experiences and scalable backend systems
            </p>
            <p 
              className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200"
              style={{ color: 'var(--color-text-subtle)' }}
            >
              Frontend-focused full-stack developer with a strong eye for clean design and seamless user interactions. Experienced in React, Next.js, and modern CSS frameworks, I craft performant interfaces that feel natural and responsive. As a backend team leader, I&apos;ve also architected APIs, optimized databases, and mentored developers, bridging the gap between user experience and technical infrastructure. Based in Toronto, ON.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in-up animate-delay-300">
            <a
              href="#projects"
              className="px-8 py-4 text-white rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ 
                background: 'var(--gradient)',
                boxShadow: '0 10px 15px -3px var(--shadow), 0 4px 6px -4px var(--shadow)'
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 rounded-xl transition-all duration-200 font-semibold hover:scale-105 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ 
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-surface)' }}
        aria-labelledby="about-heading"
      >
        <div className="max-w-4xl mx-auto">
          <h2 
            id="about-heading"
            className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent leading-tight pb-2"
            style={{ backgroundImage: 'var(--gradient)' }}
          >
            About Me
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p style={{ color: 'var(--color-text-muted)' }}>
              I&apos;m a passionate developer who thrives on solving complex challenges from both the front and back end. On the frontend, I specialize in building user-friendly, responsive interfaces that balance design and functionality. I pay attention to the details that make apps intuitive, from fluid navigation to accessible components.
            </p>

            <p style={{ color: 'var(--color-text-muted)' }}>
              On the backend, I&apos;ve led teams at YourBeat Inc., architected APIs, and delivered infrastructure improvements that directly impacted scalability and performance.
            </p>

            <p style={{ color: 'var(--color-text-muted)' }}>
              My approach combines UI/UX empathy with technical precision. I don&apos;t just write code, I design systems and experiences that are reliable, performant, and enjoyable to use.
            </p>

            <p style={{ color: 'var(--color-text-muted)' }}>
              When I&apos;m not building interfaces or optimizing systems, you&apos;ll find me experimenting with new recipes, cycling through Toronto, or tending to my virtual farm in Stardew Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            id="skills-heading"
            className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent leading-tight pb-2"
            style={{ backgroundImage: 'var(--gradient)' }}
          >
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              className="p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border group"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
              }}
            >
              <Code 
                className="w-10 h-10 mb-4 transition-colors duration-300"
                style={{ color: 'var(--color-primary)' }}
              />
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--color-text)' }}
              >
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium shadow-sm transition-all duration-200 hover:scale-105"
                    style={{ 
                      backgroundColor: 'var(--color-background)',
                      color: 'var(--color-text)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div 
              className="p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border group"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
              }}
            >
              <Globe 
                className="w-10 h-10 mb-4 transition-colors duration-300"
                style={{ color: 'var(--color-secondary)' }}
              />
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--color-text)' }}
              >
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium shadow-sm transition-all duration-200 hover:scale-105"
                    style={{ 
                      backgroundColor: 'var(--color-background)',
                      color: 'var(--color-text)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div 
              className="p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border group"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
              }}
            >
              <Database 
                className="w-10 h-10 mb-4 transition-colors duration-300"
                style={{ color: 'var(--color-primary)' }}
              />
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--color-text)' }}
              >
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium shadow-sm transition-all duration-200 hover:scale-105"
                    style={{ 
                      backgroundColor: 'var(--color-background)',
                      color: 'var(--color-text)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div 
              className="p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border group"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
              }}
            >
              <Cpu 
                className="w-10 h-10 mb-4 transition-colors duration-300"
                style={{ color: 'var(--color-secondary)' }}
              />
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--color-text)' }}
              >
                Tools & Testing
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium shadow-sm transition-all duration-200 hover:scale-105"
                    style={{ 
                      backgroundColor: 'var(--color-background)',
                      color: 'var(--color-text)'
                    }}
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
      <section 
        id="projects" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-surface)' }}
        aria-labelledby="projects-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            id="projects-heading"
            className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent leading-tight pb-2"
            style={{ backgroundImage: 'var(--gradient)' }}
          >
            Featured Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border"
                style={{ 
                  backgroundColor: 'var(--color-background)',
                  borderColor: 'var(--color-border)'
                }}
              >
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                      {/* Project Photo */}
                      <div 
                        className="rounded-xl overflow-hidden aspect-video shadow-lg relative border"
                        style={{ 
                          backgroundColor: 'var(--color-surface)',
                          borderColor: 'var(--color-border-subtle)'
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={`${project.title} - Project Screenshot`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                        />
                      </div>

                      {/* Video Thumbnail */}
                      <div 
                        className="rounded-xl overflow-hidden aspect-video shadow-lg relative border"
                        style={{ 
                          backgroundColor: 'var(--color-surface)',
                          borderColor: 'var(--color-border-subtle)'
                        }}
                      >
                        <Image
                          src={project.video}
                          alt={`${project.title} - Demo Video Placeholder`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 
                          className="text-3xl font-bold mb-4"
                          style={{ color: 'var(--color-text)' }}
                        >
                          {project.title}
                        </h3>
                        <p 
                          className="text-lg mb-4 font-medium"
                          style={{ color: 'var(--color-text-muted)' }}
                        >
                          {project.description}
                        </p>
                        <p 
                          className="leading-relaxed"
                          style={{ color: 'var(--color-text-subtle)' }}
                        >
                          {project.longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 
                          className="font-bold text-lg mb-3"
                          style={{ color: 'var(--color-text)' }}
                        >
                          Key Features:
                        </h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span 
                                className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                                style={{ backgroundColor: 'var(--color-primary)' }}
                              ></span>
                              <span style={{ color: 'var(--color-text-subtle)' }}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 
                          className="font-bold text-lg mb-3"
                          style={{ color: 'var(--color-text)' }}
                        >
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                              style={{ 
                                backgroundColor: 'var(--color-surface)',
                                color: 'var(--color-primary)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-6 py-3 text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                          style={{ background: 'var(--gradient)' }}
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p 
              className="text-lg"
              style={{ color: 'var(--color-text-subtle)' }}
            >
              More projects coming soon! I&apos;m always working on something new.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            id="contact-heading"
            className="text-4xl sm:text-5xl font-bold mb-8 bg-clip-text text-transparent leading-tight pb-2"
            style={{ backgroundImage: 'var(--gradient)' }}
          >
            Let&apos;s Build Something Together
          </h2>
          <p 
            className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-subtle)' }}
          >
            I&apos;m always interested in discussing new opportunities, interesting projects, or just talking
            about technology. Whether you&apos;re looking for a full-stack developer or want to chat about
            the latest in web development, I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:dross.canada@gmail.com"
              className="flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-200 font-medium hover:scale-105 shadow-lg border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
              }}
            >
              <Mail className="w-5 h-5 mr-3" />
              dross.canada@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/douglas-c-ross/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 text-white rounded-xl transition-all duration-200 font-medium hover:scale-105 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ background: 'var(--gradient)' }}
            >
              <Linkedin className="w-5 h-5 mr-3" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-8 px-4 sm:px-6 lg:px-8 border-t"
        style={{ 
          backgroundColor: 'var(--color-background)',
          borderColor: 'var(--color-border)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ color: 'var(--color-text-subtle)' }}>
            © 2025 Douglas Ross. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
