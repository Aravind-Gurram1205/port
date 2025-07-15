import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Code, 
  Database, 
  Wrench, 
  Users, 
  Award, 
  GraduationCap, 
  Briefcase,
  ExternalLink,
  Star,
  MapPin,
  Calendar,
  Globe,
  Zap,
  Target,
  Cpu,
  ChevronDown,
  Menu,
  X,
  Send,
  MessageCircle
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const skills = {
    languages: [
      { name: 'C', level: 85, color: 'from-emerald-400 to-emerald-600' },
      { name: 'C++', level: 80, color: 'from-teal-400 to-teal-600' },
      { name: 'Java', level: 70, color: 'from-orange-400 to-orange-600' },
    ],
    web: [
      { name: 'HTML', level: 90, color: 'from-yellow-400 to-yellow-600' },
      { name: 'CSS', level: 85, color: 'from-emerald-400 to-emerald-600' },
    ],
    databases: [
      { name: 'MySQL', level: 80, color: 'from-teal-400 to-teal-600' },
      { name: 'MongoDB', level: 75, color: 'from-emerald-400 to-emerald-600' },
    ],
    tools: [
      { name: 'Git', level: 85, color: 'from-orange-400 to-orange-600' },
      { name: 'VS Code', level: 90, color: 'from-yellow-400 to-yellow-600' },
      { name: 'Figma', level: 65, color: 'from-teal-400 to-teal-600' },
    ],
    soft: [
      { name: 'Communication', level: 90, color: 'from-emerald-400 to-emerald-600' },
      { name: 'Teamwork', level: 95, color: 'from-teal-400 to-teal-600' },
      { name: 'Problem-Solving', level: 88, color: 'from-orange-400 to-orange-600' },
      { name: 'Leadership', level: 82, color: 'from-yellow-400 to-yellow-600' },
    ]
  };

  const projects = [
    {
      title: 'Mine Tracking Helmet',
      description: 'IoT-based helmet to track workers and detect gas levels in mines for enhanced safety and monitoring.',
      tech: ['IoT', 'Sensors', 'Embedded Systems', 'Safety'],
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-orange-400 to-yellow-500'
    },
    {
      title: 'Plant Health Monitoring',
      description: 'Advanced ML system using GoogLeNet, ResNet, EfficientNetB7 for accurate plant disease detection.',
      tech: ['Python', 'Deep Learning', 'TensorFlow', 'Computer Vision'],
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Disease Detection Chatbot',
      description: 'AI-powered chatbot built with LLMs and React that analyzes symptoms and provides medical insights.',
      tech: ['React', 'LLMs', 'API Integration', 'Healthcare'],
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-teal-400 to-emerald-500'
    },
    {
      title: 'Banking Management System',
      description: 'Comprehensive web application using Java Servlets and MySQL for secure banking operations.',
      tech: ['Java', 'MySQL', 'Servlets', 'Security'],
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'Interactive multiplayer game with Java Swing UI featuring smooth animations and game logic.',
      tech: ['Java', 'Swing', 'GUI', 'Game Development'],
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-orange-400 to-yellow-500'
    }
  ];

  const experience = [
    {
      title: 'AI Intern',
      company: 'Mirai School of Technology',
      duration: 'Jul 2025 – Present',
      description: 'Built interfaces with AI tools and developed machine learning solutions for educational technology.',
      current: true
    },
    {
      title: 'Web Dev Intern',
      company: 'Advit Software Solution',
      duration: 'May 2025 – Jun 2025',
      description: 'Created responsive user interfaces using HTML, CSS, and JavaScript for various client projects.',
      current: false
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Velagapudi Ramakrishna Siddhartha Engineering College',
      duration: '2022 – 2026',
      score: 'CGPA: 8.82',
      current: true
    },
    {
      degree: 'Intermediate (IPE)',
      institution: 'Sri Chaithanya Junior College',
      location: 'Guntur, AP, India',
      duration: 'Aug 2020 – Mar 2022',
      score: 'Percentage: 96.7%',
      current: false
    },
    {
      degree: 'Secondary School Education (10th)',
      institution: 'Geethanjali English Medium School',
      location: 'Vinukonda, AP, India',
      duration: 'Jun 2019 – Mar 2020',
      score: 'Percentage: 99%',
      current: false
    }
  ];

  const certifications = [
    {
      title: 'Associate Cloud Engineer',
      issuer: 'Google Cloud',
      year: '2025',
      icon: <Award className="w-6 h-6" />,
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      title: 'Programming in C++',
      issuer: 'Cisco',
      year: '2024',
      icon: <Code className="w-6 h-6" />,
      color: 'from-teal-400 to-teal-600'
    },
    {
      title: 'Java Programming Fundamentals',
      issuer: 'edX',
      year: '2024',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const navItems = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Aravind Gurram
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-teal-400 relative ${
                    activeSection === section ? 'text-teal-400' : 'text-white/80'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                    activeSection === section 
                      ? 'text-teal-400 bg-white/10' 
                      : 'text-white/80 hover:text-teal-400 hover:bg-white/5'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Profile Image - Left Side */}
            <div className="lg:w-1/3 animate-fade-in">
              <div className="relative inline-block">
                <img
                  src="https://i.postimg.cc/L4j1C7dp/Whats-App-Image-2025-07-15-at-19-59-14-1a4cf7ee.jpg"
                  alt="Aravind Gurram"
                  className="w-80 h-80 rounded-full border-4 border-teal-400/50 shadow-2xl hover:scale-105 transition-transform duration-300 object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-orange-400/20 animate-pulse"></div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="lg:w-2/3 text-center lg:text-left space-y-8">
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Aravind Gurram
                </h1>
                <p className="text-xl md:text-2xl text-teal-300">
                  ML Engineer | Front-End Developer
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>India</span>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <a
                  href="https://github.com/Aravind-Gurram1205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-400/25"
                >
                  <Github className="w-6 h-6 group-hover:text-teal-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aravind-gurram-923081259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-400/25"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-teal-400 transition-colors" />
                </a>
                <a
                  href="mailto:aravindgurram89@gmail.com"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-400/25"
                >
                  <Mail className="w-6 h-6 group-hover:text-teal-400 transition-colors" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <button
                  onClick={() => scrollToSection('about')}
                  className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-teal-500/25"
                >
                  Explore My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border border-teal-400/50 text-teal-400 hover:bg-teal-400/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>

              <div className="animate-bounce mt-12 flex justify-center lg:justify-start">
                <ChevronDown className="w-6 h-6 text-teal-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am an aspiring ML Engineer and Front-End Developer seeking an entry-level position at a dynamic software company. 
                With a strong foundation in Computer Science and hands-on programming skills, I aim to contribute to innovative projects 
                and deliver cutting-edge solutions. I'm passionate about combining machine learning with clean, intuitive front-end design 
                to solve real-world problems and create impactful digital experiences.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 text-teal-400">
                  <Globe className="w-5 h-5" />
                  <span>Telugu, English</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-400">
                  <GraduationCap className="w-5 h-5" />
                  <span>B.Tech IT Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <div className={`transition-all duration-1000 ${
            isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <Code className="w-6 h-6 text-teal-400 mr-3" />
                  <h3 className="text-xl font-semibold">Programming Languages</h3>
                </div>
                <div className="space-y-4">
                  {skills.languages.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-teal-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Web Technologies */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <Globe className="w-6 h-6 text-teal-400 mr-3" />
                  <h3 className="text-xl font-semibold">Web Technologies</h3>
                </div>
                <div className="space-y-4">
                  {skills.web.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-teal-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <Database className="w-6 h-6 text-teal-400 mr-3" />
                  <h3 className="text-xl font-semibold">Databases</h3>
                </div>
                <div className="space-y-4">
                  {skills.databases.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-teal-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <Wrench className="w-6 h-6 text-teal-400 mr-3" />
                  <h3 className="text-xl font-semibold">Tools & Technologies</h3>
                </div>
                <div className="space-y-4">
                  {skills.tools.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-teal-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 md:col-span-2">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 text-teal-400 mr-3" />
                  <h3 className="text-xl font-semibold">Soft Skills</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.soft.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-teal-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <div className={`transition-all duration-1000 ${
            isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10"
                >
                  <div className={`text-white mb-4 p-3 rounded-xl bg-gradient-to-r ${project.gradient} w-fit group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-teal-400/20 text-teal-400 px-3 py-1 rounded-full text-sm hover:bg-teal-400/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <div className={`transition-all duration-1000 ${
            isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Work Experience */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 flex items-center">
                  <Briefcase className="w-6 h-6 text-teal-400 mr-3" />
                  Work Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      {exp.current && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Current
                        </div>
                      )}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-teal-400">{exp.title}</h4>
                          <p className="text-gray-300 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certifications */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 flex items-center">
                  <GraduationCap className="w-6 h-6 text-teal-400 mr-3" />
                  Education & Certifications
                </h3>
                
                {/* Education */}
                <div className="space-y-6 mb-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      {edu.current && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Current
                        </div>
                      )}
                      <h4 className="text-lg font-semibold text-teal-400 mb-2">{edu.degree}</h4>
                      <p className="text-gray-300 mb-1">{edu.institution}</p>
                      {edu.location && <p className="text-gray-400 text-sm mb-2">{edu.location}</p>}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-teal-400 font-semibold">{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-300 mb-4">Certifications</h4>
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center">
                      <div className={`text-white mr-4 p-2 rounded-lg bg-gradient-to-r ${cert.color}`}>
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-teal-400">{cert.title}</h5>
                        <p className="text-gray-300 text-sm">{cert.issuer}</p>
                      </div>
                      <span className="text-sm text-gray-400 font-medium">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Let's Connect & Collaborate
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16">
              Ready to bring innovative ideas to life? Let's discuss how we can work together.
            </p>
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Email Card */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center">
                <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">Email Me</h3>
                <p className="text-gray-300 mb-4">Drop me a line anytime</p>
                <a
                  href="mailto:aravindgurram89@gmail.com"
                  className="inline-flex items-center text-teal-400 hover:text-orange-400 transition-colors font-medium"
                >
                  <Send className="w-4 h-4 mr-2" />
                  aravindgurram89@gmail.com
                </a>
              </div>
              
              {/* LinkedIn Card */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center">
                <div className="bg-gradient-to-r from-teal-400 to-emerald-500 text-white p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">LinkedIn</h3>
                <p className="text-gray-300 mb-4">Let's connect professionally</p>
                <a
                  href="https://www.linkedin.com/in/aravind-gurram-923081259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-400 hover:text-orange-400 transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Connect with me
                </a>
              </div>
              
              {/* GitHub Card */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center">
                <div className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">GitHub</h3>
                <p className="text-gray-300 mb-4">Check out my projects</p>
                <a
                  href="https://github.com/Aravind-Gurram1205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-400 hover:text-orange-400 transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View repositories
                </a>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-slate-800/50 to-emerald-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-teal-400 to-orange-400 text-white p-4 rounded-full w-fit mx-auto mb-6">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                  Ready to Start Something Amazing?
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  I'm currently seeking entry-level opportunities where I can contribute to innovative projects 
                  and grow as a developer. Whether you have a project in mind, want to collaborate, or just want to chat about technology, 
                  I'd love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:aravindgurram89@gmail.com"
                    className="inline-flex items-center bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-teal-500/25"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Start a Conversation
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aravind-gurram-923081259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-teal-400/50 text-teal-400 hover:bg-teal-400/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Aravind Gurram. Designed with passion and built with modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;