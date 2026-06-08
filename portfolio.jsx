import React, { useState, useEffect } from "react";
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
  BarChart3,
  Eye
} from "lucide-react";
const PortfolioWebsite = () => {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'Machine Learning', level: 85, category: 'AI/ML' },
    { name: 'Deep Learning', level: 80, category: 'AI/ML' },
    { name: 'Computer Vision', level: 82, category: 'AI/ML' },
    { name: 'Data Analysis', level: 88, category: 'Data' },
    { name: 'TensorFlow/PyTorch', level: 85, category: 'Frameworks' },
    { name: 'HTML/CSS', level: 90, category: 'Web' },
    { name: 'JavaScript', level: 85, category: 'Web' },
    { name: 'React', level: 80, category: 'Web' },
    { name: 'Git & GitHub', level: 88, category: 'Tools' },
    { name: 'SQL', level: 82, category: 'Databases' },
    { name: 'Problem Solving', level: 92, category: 'Soft Skills' },
  ];

  const projects = [
    {
      title: 'Smart Mirror AI',
      description: 'AI-powered outfit recommendation system using computer vision and machine learning to suggest clothing based on weather, occasion, and personal style preferences.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      image: '🪞',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      title: 'NGO Awareness Webpage',
      description: 'Responsive and modern website designed to promote NGO initiatives and increase awareness about social causes with engaging content and donation integration.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: '🌍',
      color: 'from-green-500 to-emerald-400',
    },
    {
      title: 'Student Record Management',
      description: 'Python-based comprehensive system for managing student records, grades, and attendance with database integration for educational institutions.',
      technologies: ['Python', 'SQLite', 'Tkinter', 'OOP'],
      image: '📚',
      color: 'from-purple-500 to-pink-400',
    },
    {
      title: 'Inventory Management System',
      description: 'Full-stack solution for product tracking, stock management, and inventory optimization with real-time updates and analytics dashboard.',
      technologies: ['Python', 'Flask', 'SQL', 'HTML/CSS'],
      image: '📦',
      color: 'from-orange-500 to-red-400',
    },
    {
      title: 'Gender Detection System',
      description: 'Advanced computer vision system using YOLOv8 and DeepFace for real-time gender detection and counting in video streams with high accuracy.',
      technologies: ['YOLOv8', 'DeepFace', 'OpenCV', 'Python'],
      image: '🎯',
      color: 'from-indigo-500 to-blue-400',
    },
  ];

  const certifications = [
    { title: 'AI & Machine Learning Internship', issuer: 'Tech Institute', date: '2024', icon: '🏆' },
    { title: 'Deep Learning Specialization', issuer: 'Online Platform', date: '2024', icon: '🧠' },
    { title: 'Web Development Bootcamp', issuer: 'Dev Academy', date: '2023', icon: '🌐' },
    { title: 'Computer Vision Workshop', issuer: 'AI Workshop Series', date: '2024', icon: '👁️' },
    { title: 'Data Science Certification', issuer: 'Analytics Institute', date: '2023', icon: '📊' },
    { title: 'Python Programming Course', issuer: 'Online Academy', date: '2023', icon: '🐍' },
  ];

  const stats = [
    { number: '5+', label: 'Projects Completed', icon: Code },
    { number: '12+', label: 'Technical Skills', icon: Brain },
    { number: '6', label: 'Certifications', icon: Award },
    { number: '3+', label: 'Years Coding', icon: Zap },
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
          <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
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
          <button className="w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/50">
            View Project <ExternalLink size={16} />
          </button>
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
              Sneha
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map(item => (
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
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map(item => (
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
          
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Aspiring AI & Machine Learning Engineer
          </h2>
          
          <p className={`text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Passionate about building intelligent systems using <span className="font-bold text-blue-400">Artificial Intelligence</span> and <span className="font-bold text-purple-400">Machine Learning</span>. Specializing in Computer Vision, Deep Learning, and creating innovative solutions that bridge AI and Web Development.
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

  <a
    href="#"
    className={`p-3 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 ${
      isDark ? 'bg-white/10' : 'bg-black/10'
    }`}
  >
    <Code size={24} className="text-blue-400" />
  </a>

  <a
    href="#"
    className={`p-3 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 ${
      isDark ? 'bg-white/10' : 'bg-black/10'
    }`}
  >
    <ExternalLink size={24} className="text-purple-400" />
  </a>

  <a
    href="#"
    className={`p-3 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 ${
      isDark ? 'bg-white/10' : 'bg-black/10'
    }`}
  >
    <Mail size={24} className="text-pink-400" />
  </a>

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
                <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm a passionate Computer Science Engineering student with a deep interest in Artificial Intelligence, Machine Learning, and Deep Learning. My journey in tech has been driven by curiosity and a desire to build intelligent systems that solve real-world problems.
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
                    <li>🌐 Full Stack Web Development</li>
                  </ul>
                </div>
                
                <div className={`rounded-2xl p-6 backdrop-blur-xl ${isDark ? 'bg-white/10 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Zap size={24} className="text-purple-400" />
                    Learning Journey
                  </h4>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    Continuously learning and exploring cutting-edge technologies in AI/ML while building practical projects that demonstrate my expertise and passion for creating intelligent systems.
                  </p>
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
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
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
            Certifications & Awards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`group rounded-2xl p-6 backdrop-blur-xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                isDark 
                  ? 'bg-white/10 hover:bg-white/20 border border-white/10' 
                  : 'bg-black/5 hover:bg-black/10 border border-black/10'
              }`}>
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h3>
                <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{cert.issuer}</p>
                <p className={`text-xs font-semibold px-3 py-1 inline-block rounded-full ${
                  isDark 
                    ? 'bg-blue-500/20 text-blue-300' 
                    : 'bg-blue-500/20 text-blue-700'
                }`}>
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className={`rounded-3xl backdrop-blur-xl p-8 sm:p-12 ${isDark ? 'bg-white/10 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
            <div className="flex items-start gap-6">
              <div className={`text-4xl p-4 rounded-xl ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                🎯
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-2">B.Tech in Computer Science & Engineering</h3>
                <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Currently pursuing my Bachelor's degree in Computer Science & Engineering with a focus on Artificial Intelligence and Machine Learning.
                </p>
                
                <div className="mt-6">
                  <h4 className="font-bold mb-3 text-lg">Relevant Coursework:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Data Structures', 'Algorithms', 'Machine Learning', 'Deep Learning', 'Database Management', 'Web Development', 'Computer Networks', 'Operating Systems'].map((course, i) => (
                      <div key={i} className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                        isDark 
                          ? 'bg-white/10 text-blue-300' 
                          : 'bg-blue-500/20 text-blue-700'
                      }`}>
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className={`rounded-3xl backdrop-blur-xl p-8 ${isDark ? 'bg-white/10 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-6 py-3 rounded-xl backdrop-blur-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-white/10 border border-white/10 text-white placeholder-gray-400'
                      : 'bg-white/30 border border-white/20 text-gray-900 placeholder-gray-600'
                  }`}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-6 py-3 rounded-xl backdrop-blur-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-white/10 border border-white/10 text-white placeholder-gray-400'
                      : 'bg-white/30 border border-white/20 text-gray-900 placeholder-gray-600'
                  }`}
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className={`w-full px-6 py-3 rounded-xl backdrop-blur-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    isDark
                      ? 'bg-white/10 border border-white/10 text-white placeholder-gray-400'
                      : 'bg-white/30 border border-white/20 text-gray-900 placeholder-gray-600'
                  }`}
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className={`rounded-3xl backdrop-blur-xl p-8 ${isDark ? 'bg-white/10 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 rounded-xl ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                    <Mail size={28} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <a href="mailto:711snehagupta@gmail.com" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                      711snehagupta@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className={`rounded-3xl backdrop-blur-xl p-8 ${isDark ? 'bg-white/10 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 rounded-xl ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                    <ExternalLink size={28} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">LinkedIn</h4>
                    <a href="#" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                      www.linkedin.com/in/sneha-gupta-045303318
                    </a>
                  </div>
                </div>
              </div>

              <div className={`rounded-3xl backdrop-blur-xl p-8 ${isDark ? 'bg-white/10 border border-white/10' : 'bg-white/40 border border-white/20'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 rounded-xl ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                    <Code size={28} className="text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">GitHub</h4>
                    <a href="#" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'}`}>
                      https://github.com/711snehagupta
                    </a>
                  </div>
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
                © 2024 Sneha Gupta. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}>
                <Code size={20} />
              </a>
              <a href="#" className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}>
                <Code size={20} />
              </a>
              <a href="#" className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}>
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