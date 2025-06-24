import React, { useState, useEffect } from 'react';
import './App.css';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase, MessageSquare } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping platform with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Advanced task management application",
      tech: ["React", "TypeScript", "Firebase"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with animations",
      tech: ["React", "API Integration", "CSS3"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "CSS/SCSS", level: 88 },
    { name: "MongoDB", level: 70 }
  ];

  return (
    <div className="App">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </div>
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                      activeSection === item ? 'text-purple-400' : 'text-gray-300'
                    }`}
                  >
                    {item === 'home' ? 'Home' : 
                     item === 'about' ? 'About' :
                     item === 'projects' ? 'Projects' : 'Contact'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className={`text-center z-10 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-1 mb-6">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <User size={48} className="text-purple-400" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Ali Mohammadi
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Full-Stack Developer specializing in React & Node.js
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              <a href="#" className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
            
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                I'm a passionate developer who loves creating exceptional digital experiences. 
                With over 5 years of experience in web development, I have strong skills in modern technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Code className="mr-3 text-purple-400" size={24} />
                    Technical Skills
                  </h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-purple-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Briefcase className="mr-3 text-purple-400" size={24} />
                    Work Experience
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-purple-500 pl-4">
                      <h4 className="font-semibold text-white">Senior Frontend Developer</h4>
                      <p className="text-purple-400">Tech Company Pars</p>
                      <p className="text-gray-400 text-sm">2022 - Present</p>
                    </div>
                    <div className="border-l-2 border-purple-300 pl-4">
                      <h4 className="font-semibold text-white">Full-Stack Developer</h4>
                      <p className="text-purple-400">Digital Startup</p>
                      <p className="text-gray-400 text-sm">2020 - 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Projects
              </h2>
              <p className="text-gray-300 text-lg">
                A showcase of my recent work
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              I'm ready to start your next project. Let's talk about your ideas!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <Mail className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">ali.mohammadi@email.com</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <Linkedin className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-300">linkedin.com/in/alimohammadi</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <Github className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-300">github.com/alimohammadi</p>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
              <MessageSquare className="inline mr-2" size={20} />
              Start Conversation
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2025 Ali Mohammadi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
