import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
  Mail,
  ExternalLink,
  Award,
  Code,
  Brain,
  Zap,
  Calendar,
  MapPin,
  Phone
} from 'lucide-react';

const PortfolioWebsite = () => {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setIsDark(!isDark);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const skills = [
    { name: 'Python', level: 80, category: 'Programming' },
    { name: 'Java', level: 80, category: 'Programming' },
    { name: 'C Programming', level: 80, category: 'Programming' },
    { name: 'SQL & DBMS', level: 90, category: 'Databases' },
    { name: 'HTML & CSS', level: 40, category: 'Web' },
    { name: 'Machine Learning', level: 40, category: 'AI/ML' },
    { name: 'Problem Solving', level: 94, category: 'Soft Skills' },
    { name: 'Git & GitHub', level: 89, category: 'Developer Tools' },
    { name: 'Cloud Computing', level: 75, category: 'Cloud' },
    { name: 'Devops', level: 60, category: 'Backend' },
    { name: 'API Development', level: 70, category: 'Backend' },

    
  ];

  const projects = [
    {
      title: 'Real-Time Animal Detection System',
      description: 'Advanced computer vision system using YOLOv8 and OpenCV for real-time animal detection, tracking, and counting from webcam/video streams. Generates live analytics for wildlife observation and surveillance applications.',
      technologies: ['YOLOv8', 'OpenCV', 'Python', 'Real-time Processing'],
      image: '🐾',
      color: 'from-blue-500 to-cyan-400',
      duration: '2 month',
      github: 'https://github.com/711snehagupta/AI-Powered-Human-and-Animal-Detection-'
    },
    {
      title: 'AI-Powered Java Chatbot',
      description: 'Intelligent chatbot system built with Java using NLP-based intent detection and personalized memory system. Delivers context-aware responses with robust error-handling for smooth and intelligent interactions.',
      technologies: ['Java', 'NLP', 'Machine Learning', 'Intent Detection'],
      image: '🤖',
      color: 'from-green-500 to-emerald-400',
      duration: '15 Days',
      github: 'https://github.com/711snehagupta/Java-AI-FAQ-ChatBot'
    },
    {
      title: 'Railway Reservation System',
      description: 'Full-stack railway booking system integrating Python frontend with SQL backend. Handles booking conflicts, invalid inputs, and provides seamless user experience with comprehensive error-handling.',
      technologies: ['Python', 'SQL', 'Database Design', 'CRUD Operations'],
      image: '🚂',
      color: 'from-purple-500 to-pink-400',
      duration: '1.5 Months'
    },
    {
      title: 'Shopping Mall System',
      description: 'Complete e-commerce shopping system with Python frontend and SQL database backend. Focuses on smooth user interaction, transaction handling, and robust error management for invalid inputs.',
      technologies: ['Python', 'SQL', 'E-commerce', 'Data Management'],
      image: '🛍️',
      color: 'from-orange-500 to-red-400',
      duration: '1 Month'
    },
    {
      title: 'Student Record Management',
      description: 'Comprehensive system for managing student records with CRUD operations, data handling features, grade tracking, and attendance management for educational institutions.',
      technologies: ['Python', 'SQLite', 'DBMS', 'Object-Oriented Programming'],
      image: '📚',
      color: 'from-indigo-500 to-blue-400',
      duration: '4 Weeks'
    },
    {
  title: 'Hotel Reservation System',
  description: 'A comprehensive hotel booking and management system developed in Java. Features room reservation, customer registration, booking management, check-in/check-out operations, billing generation, and availability tracking. Designed to streamline hotel operations with an intuitive and efficient user interface.',
  technologies: ['Java', 'OOP', 'JDBC', 'MySQL', 'Database Management', 'GUI'],
  image: '🏨',
  color: 'from-orange-500 to-red-400',
  duration: '1 Month',
  github: 'https://github.com/711snehagupta/Hotel-Reservation-System-Java'
},
    {
      title: 'Mini Inventory Management',
      description: 'Stock monitoring and product management solution for tracking inventory levels. Features real-time updates, product categorization, and analytics dashboard for efficient inventory control.',
      technologies: ['Python', 'SQL', 'Database Integration', 'Analytics'],
      image: '📦',
      color: 'from-rose-500 to-pink-400',
      duration: '4 Weeks'
    },
    {
      title: 'NGO Awareness Webpage',
      description: 'Responsive and modern website for InAmigos Foundation promoting NGO initiatives and social causes. Includes volunteer registration, donation management, and impact showcase sections.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: '🌍',
      color: 'from-green-600 to-emerald-500',
      duration: '2 Weeks',
      github: 'https://711snehagupta.github.io/ngo-awareness-webpage/'
    },
  ];

  const certifications = [
    { title: 'Microsoft "Introduction to Azure AI"', issuer: 'Microsoft', date: '2024', icon: '🏆', type: 'Certification' },
    { title: '1st Prize - AI Advanced Calculator', issuer: 'ARQUE Technology Competition', date: '2024', icon: '🥇', type: 'Award' },
    { title: '100+ LeetCode Problems Solved', issuer: 'LeetCode', date: '2024', icon: '💯', type: 'Achievement' },
    { title: 'AI Training Programs', issuer: 'Technical Training', date: '2024', icon: '🧠', type: 'Certification' },
    { title: 'Coding Contest Participation', issuer: 'Multiple Contests', date: '2024', icon: '🏅', type: 'Achievement' },
    { title: 'College Freshers Event Organizer', issuer: 'College Leadership', date: '2024', icon: '👥', type: 'Achievement' },
    { title: 'Active Technical Club Member', issuer: 'College Technical Clubs', date: '2024', icon: '⚙️', type: 'Membership' },
    { title: 'Web Development Internship', issuer: 'InAmigos Foundation', date: '2024', icon: '🌐', type: 'Experience' },
    { title: 'Backend Development Internship', issuer: 'SkillinfyTech IT Solutions', date: '2024', icon: '⚡', type: 'Experience' },
    { title: 'Java Development Certification', issuer: 'Technical Training', date: '2024', icon: '☕', type: 'Certification' },
    { title: 'Python Programming Mastery', issuer: 'Self-Taught & Training', date: '2024', icon: '🐍', type: 'Certification' },
    { title: 'Computer Vision Workshop', issuer: 'AI Workshop Series', date: '2024', icon: '👁️', type: 'Workshop' },
    { title: 'Deep Learning Specialization', issuer: 'Advanced Training', date: '2024', icon: '🧠', type: 'Certification' },
    { title: 'Data Science & Analysis Course', issuer: 'Professional Development', date: '2024', icon: '📊', type: 'Course' },
    { title: 'YOLOv8 Object Detection', issuer: 'Advanced AI Training', date: '2024', icon: '🎯', type: 'Certification' },
    { title: 'IBM Cloud Basics', issuer: 'IBM Professional Development', date: '2024', icon: '☁️', type: 'Certification' },
    { title: 'DevOps Fundamentals', issuer: 'Technical Training', date: '2024', icon: '🔧', type: 'Certification' },
  ];

  const stats = [
    { number: '8+', label: 'Projects Completed', icon: Code },
    { number: '15+', label: 'Technical Skills', icon: Brain },
    { number: '20+', label: 'Certifications & Awards', icon: Award },
    { number: '3+', label: 'Years coding', icon: Zap },
  ];

  const experiences = [
    {
      company: 'InAmigos Foundation',
      role: 'Web Developer Intern',
      duration: '2 Weeks',
      type: 'Remote',
      description: [
        'Developed NGO Awareness Webpage using HTML, CSS, and JavaScript',
        'Analyzed website and suggested UI/UX improvements',
        'Designed website prototypes and feature highlight pages',
        'Created responsive web pages for volunteer registration and donation management'
      ]
    },
    {
      company: 'SkillinfyTech IT Solutions Private Limited',
      role: 'Backend Developer Intern',
      duration: '4 Weeks',
      type: 'Remote',
      description: [
        'Developed backend applications using Python and database integration',
        'Built Student Record Management System with CRUD operations',
        'Developed Quiz Application with score tracking and result generation',
        'Created Mini Inventory Management System for stock monitoring'
      ]
    }
  ];

  // Skill Card Component
  const SkillCard = ({ skill }) => {
    return (
      <div className={`group rounded-2xl p-6 backdrop-blur-xl transition-all duration-500 hover:scale-105 ${
        isDark 
          ? 'bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30' 
          : 'bg-black/5 hover:bg-black/10 border border-black/10 hover:border-black/30'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.name}</h3>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            isDark 
              ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300' 
              : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600'
          }`}>
            {skill.category}
          </span>
        </div>
        <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
            style={{ width: `${skill.level}%` }}
          />
        </div>
        <p className={`text-sm mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{skill.level}% Proficiency</p>
      </div>
    );
  };

  // Project Card Component
  const ProjectCard = ({ project, index }) => {
    return (
      <div className={`group rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:scale-105 ${
        isDark 
          ? 'bg-white/10 hover:bg-white/20 border border-white/10' 
          : 'bg-white/40 hover:bg-white/60 border border-white/20'
      }`} style={{ animationDelay: `${index * 100}ms` }}>
        <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1), transparent 50%)'
          }} />
          <span className="relative z-10">{project.image}</span>
        </div>
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
          <p className={`text-xs mb-3 px-3 py-1 inline-block rounded-full ${
            isDark 
              ? 'bg-white/10 text-blue-300' 
              : 'bg-blue-500/20 text-blue-700'
          }`}>
            ⏱️ {project.duration}
          </p>
          <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-full ${
                isDark 
                  ? 'bg-white/10 text-blue-300' 
                  : 'bg-blue-500/20 text-blue-700'
              }`}>
                {tech}
              </span>
            ))}
          </div>
          <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/50"
>
  View Project <ExternalLink size={16} />
</a>
        </div>
      </div>
    );
  };

  // Certification Card Component
  const CertificationCard = ({ cert, index }) => {
    const colors = {
      'Certification': 'from-blue-500 to-cyan-400',
      'Award': 'from-yellow-500 to-orange-400',
      'Achievement': 'from-purple-500 to-pink-400',
      'Experience': 'from-green-500 to-emerald-400',
      'Workshop': 'from-rose-500 to-pink-400',
      'Course': 'from-indigo-500 to-blue-400',
      'Membership': 'from-teal-500 to-cyan-400'
    };

    return (
      <div className={`group rounded-2xl p-6 backdrop-blur-xl transition-all duration-500 hover:scale-105 ${
        isDark 
          ? 'bg-white/10 hover:bg-white/20 border border-white/10' 
          : 'bg-black/5 hover:bg-black/10 border border-black/10'
      }`}>
        <div className={`text-4xl mb-4 inline-block`}>{cert.icon}</div>
        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h3>
        <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{cert.issuer}</p>
        <div className="flex items-center justify-between">
          <p className={`text-xs font-semibold px-3 py-1 rounded-full ${
            isDark 
              ? 'bg-blue-500/20 text-blue-300' 
              : 'bg-blue-500/20 text-blue-700'
          }`}>
            {cert.date}
          </p>
          <span className={`px-2 py-1 rounded text-xs font-bold text-white bg-gradient-to-r ${colors[cert.type] || 'from-blue-500 to-purple-500'}`}>
            {cert.type}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={`overflow-x-hidden transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-900/20 via-gray-950 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`} />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 filter blur-3xl bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 filter blur-3xl bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? isDark 
            ? 'bg-gray-950/80 backdrop-blur-xl border-b border-white/10' 
            : 'bg-white/80 backdrop-blur-xl border-b border-black/10'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sneha Gupta
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    isDark 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20' 
                    : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20' 
                    : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20' 
                    : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className={`md:hidden pb-4 space-y-2 ${isDark ? 'bg-gray-950/90' : 'bg-white/90'} backdrop-blur-xl rounded-2xl p-4 mb-4`}>
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                    isDark 
                      ? 'text-gray-300 hover:bg-white/10 hover:text-blue-400' 
                      : 'text-gray-700 hover:bg-black/10 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <div className={`text-6xl rounded-full p-4 ${isDark ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-xl border ${isDark ? 'border-white/20' : 'border-black/20'}`}>
              💡
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Sneha Gupta
          </h1>
          
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Aspiring AI & Machine Learning Engineer
          </h2>

          <p className={`text-lg mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className="font-semibold">B.Tech Computer Science</span> | IBM Cloud Computing
          </p>
          
          <p className={`text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Passionate about building intelligent systems using <span className="font-bold text-blue-400">Artificial Intelligence</span> and <span className="font-bold text-purple-400">Machine Learning</span>. Specializing in Computer Vision, Deep Learning, Backend Development, and creating innovative AI-powered solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 border border-white/20 text-white'
                  : 'bg-black/10 hover:bg-black/20 border border-black/20 text-gray-900'
              }`}
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a href="https://gitHub.com" className={`p-3 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" className={`p-3 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:711snehagupta@gmail.com" className={`p-3 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}>
              <Mail size={24} className="text-pink-400" />
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`group rounded-2xl p-6 backdrop-blur-xl text-center transition-all duration-500 hover:scale-105 ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 border border-white/10' 
                    : 'bg-black/5 hover:bg-black/10 border border-black/10'
                }`}>
                  <Icon size={32} className="mx-auto mb-4 text-blue-400 group-hover:text-purple-400 transition-colors" />
                  <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className={`text-sm sm:text-base font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className={`rounded-3xl backdrop-blur-xl p-8 sm:p-12 ${isDark ? 'bg-white/10 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`text-6xl rounded-2xl p-8 inline-block mb-6 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                  🎓
                </div>
                <h3 className="text-3xl font-bold mb-4">B.Tech Computer Science & Engineering</h3>
                <p className={`text-lg font-semibold mb-2 text-blue-400`}>United University, Prayagraj</p>
                <p className={`text-lg font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>CGPA: 8.53</p>
                <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Passionate Computer Science Engineering student with a deep interest in Artificial Intelligence, Machine Learning, Deep Learning, and Computer Vision. My journey has been driven by curiosity and a desire to build intelligent systems that solve real-world problems and make a meaningful impact.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className={`rounded-2xl p-6 backdrop-blur-xl ${isDark ? 'bg-white/10 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Brain size={24} className="text-blue-400" />
                    Focus Areas
                  </h4>
                  <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>✨ Artificial Intelligence & Machine Learning</li>
                    <li>🔍 Computer Vision & Image Processing</li>
                    <li>🧠 Deep Learning & Neural Networks</li>
                    <li>📊 Data Science & Analytics</li>
                    <li>⚙️ Backend Development & Databases</li>
                  </ul>
                </div>
                
                <div className={`rounded-2xl p-6 backdrop-blur-xl ${isDark ? 'bg-white/10 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Zap size={24} className="text-purple-400" />
                    Key Achievements
                  </h4>
                  <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>✅ 100+ LeetCode Problems Solved</li>
                    <li>✅ Active Member of Technical Clubs</li>
                    <li>✅ Coding Contest Participant</li>
                    <li>✅ Event Organization Leader</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills (15+)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`rounded-3xl backdrop-blur-xl p-8 sm:p-10 transition-all duration-500 hover:scale-105 ${
                isDark 
                  ? 'bg-white/10 hover:bg-white/20 border border-white/10' 
                  : 'bg-white/40 hover:bg-white/60 border border-white/20'
              }`}>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.company}</h3>
                    <p className={`text-lg font-semibold text-blue-400 mt-2`}>{exp.role}</p>
                  </div>
                  <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">
                    <div className={`px-4 py-2 rounded-lg inline-flex items-center gap-2 w-fit ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                      <Calendar size={18} className="text-purple-400" />
                      <span className="font-semibold">{exp.duration}</span>
                    </div>
                    <div className={`px-4 py-2 rounded-lg inline-flex items-center gap-2 w-fit ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                      <MapPin size={18} className="text-pink-400" />
                      <span className="font-semibold">{exp.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.description.map((point, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-blue-400 font-bold">▸</span>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects (8+)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications, Awards & Achievements (20+)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </section>

     {/* Contact Section */}
<section id="contact" className="relative py-20 px-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Get In Touch
    </h2>

    <div className="max-w-2xl mx-auto space-y-6">

      {/* Email */}
      <div className={`rounded-3xl backdrop-blur-xl p-8 ${
        isDark
          ? 'bg-white/10 border border-white/10'
          : 'bg-white/40 border border-white/20'
      }`}>
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-xl ${
            isDark ? 'bg-white/10' : 'bg-black/10'
          }`}>
            <Mail size={28} className="text-purple-400" />
          </div>
          <div>
            <h4 className="font-bold text-lg">Email</h4>
            <a
              href="mailto:711snehagupta@gmail.com"
              className={`text-sm transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-purple-400'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              711snehagupta@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* LinkedIn */}
      <div className={`rounded-3xl backdrop-blur-xl p-8 ${
        isDark
          ? 'bg-white/10 border border-white/10'
          : 'bg-white/40 border border-white/20'
      }`}>
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-xl ${
            isDark ? 'bg-white/10' : 'bg-black/10'
          }`}>
            <span className="font-bold text-pink-400">in</span>
          </div>
          <div>
            <h4 className="font-bold text-lg">LinkedIn</h4>
            <a
              href="https://linkedin.com/in/sneha-gupta"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-pink-400'
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              linkedin.com/in/sneha-gupta
            </a>
          </div>
        </div>
      </div>

      {/* GitHub */}
      <div className={`rounded-3xl backdrop-blur-xl p-8 ${
        isDark
          ? 'bg-white/10 border border-white/10'
          : 'bg-white/40 border border-white/20'
      }`}>
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-xl ${
            isDark ? 'bg-white/10' : 'bg-black/10'
          }`}>
            <span className="font-bold text-white">GH</span>
          </div>
          <div>
            <h4 className="font-bold text-lg">GitHub</h4>
            <a
              href="https://github.com/711snehagupta"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              github.com/711snehagupta
            </a>
          </div>
        </div>
      </div>

      {/* LeetCode */}
      <div className={`rounded-3xl backdrop-blur-xl p-8 ${
        isDark
          ? 'bg-white/10 border border-white/10'
          : 'bg-white/40 border border-white/20'
      }`}>
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-xl ${
            isDark ? 'bg-white/10' : 'bg-black/10'
          }`}>
            <Code size={28} className="text-blue-400" />
          </div>
          <div>
            <h4 className="font-bold text-lg">LeetCode</h4>
            <a
              href="https://leetcode.com/u/711Sneha/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-blue-400'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              100+ Problems Solved
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer className={`relative py-12 px-4 border-t ${isDark ? 'border-white/10 bg-gray-950/50' : 'border-black/10 bg-white/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2024 Sneha Gupta. All rights reserved. | AI & ML Engineer
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://gitHub.com/sneha-gupta" className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/sneha-gupta" className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:711snehagupta@gmail.com" className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}>
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className={`text-center text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              Designed & Built with ❤️ | Premium AI & ML Portfolio Website
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;