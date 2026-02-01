import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useTheme();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Online Flower Marketplace',
      description: 'Started as "just a simple flower store" and evolved into a full platform. Real-time inventory, payment processing, analytics—the works. Learned a lot about scale on this one.',
      image: '/images/dinujayaFlora.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      date: 'June 2025',
      github: '#',
      demo: '#',
      gradient: 'from-blue-500 to-indigo-600',
      highlights: [
        'Real-time inventory tracking',
        'Advanced analytics dashboard',
        'Payment gateway integration'
      ]
    },
    {
      id: 2,
      title: 'Wellness Tracking App',
      description: 'Built this while trying to get in shape ourselves (ironic, right?). Tracks well-being, nutrition and sleep habits. Actually use it daily.',
      image: '/images/mindEase.png',
      technologies: ['React Native', 'Firebase', 'HealthKit'],
      date: 'October 2024',
      github: '#',
      demo: '#',
      gradient: 'from-green-500 to-teal-600',
      highlights: [
        'Well-being tracking & planning',
        'Nutrition calculator',
        'Records sleep patterns'
      ]
    },
    {
      id: 3,
      title: 'Handbag Marketplace',
      description: 'Online custom handbag marketplace implemented for a local designer. Users can customize designs and order directly. Built with scalability in mind from day one.',
      image: '/images/ella.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      date: 'September 2025',
      github: '#',
      demo: '#',
      gradient: 'from-purple-500 to-pink-600',
      highlights: [
        'Custom design tool',
        'Real-time order tracking',
        'User-friendly admin panel'
      ]
    },
    {
      id: 4,
      title: 'Inventory Management System',
      description: 'Client hated their manual inventory management. We built them something more than Inventory Management System. Inventory + Sales CRM + Analytics Dashboard all in one.',
      image: '/images/pasanEnterprises.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'PDF-Generator'],
      date: 'August 2025',
      github: '#',
      demo: '#',
      gradient: 'from-orange-500 to-red-600',
      highlights: [
        'Inventory tracking & alerts',
        'Sales CRM integration + Order management',
        'Invoice & Quotation generation'
      ]
    },
    {
      id: 5,
      title: 'Farm to Market Platform',
      description: 'Built for a local agri-business to connect farmers and merchants directly. Real-time bidding, secure payments, logistics tracking. Ended up being way more complex than we thought, but that\'s how you learn.',
      image: '/images/farmToMarket.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'PayHere', 'AWS S3', 'Socket.io', 'Google Maps API'],
      date: 'February 2024',
      github: '#',
      demo: '#',
      gradient: 'from-green-500 to-emerald-600',
      highlights: [
        'Real-time bidding system',
        'Secure payment processing',
        'Logistics & delivery tracking'
      ]
    },
    {
      id: 7,
      title: 'Supermarket Automation System',
      description: 'Sensors → Data → Predictions → Efficient Supermarket Operations. This project got us more into hardware. Enter what you need and in next minutes it\'s in your hand, sealed packed. Pretty cool right?',
      image: '/images/hardwareProject.png',
      technologies: ['Arduino', 'Nema', 'Load Cell', 'Temperature Sensor', 'LCD Display'],
      date: 'May 2023',
      github: '#',
      demo: '#',
      gradient: 'from-cyan-500 to-blue-600',
      highlights: [
        'Real-time sensor monitoring',
        'Automated restocking alerts',
        'Automated dispensing, packaging & sealing'
      ]
    },
    {
      id: 8,
      title: 'PharmaSys',
      description: 'Built this for a local medicine disributor to manage inventory, suppliers and pharmacy orders. Integrated with invoices and reports generation. Turned out to be a great learning experience about the pharma supply chain.',
      image: '/images/pharmaSys.png',
      technologies: ['React', 'Node', 'MongoDB', 'AWS', 'PDF Generator'],
      date: 'December 2024',
      github: '#',
      demo: '#',
      gradient: 'from-indigo-500 to-purple-600',
      highlights: [
        'Inventory & supplier management',
        'Pharmacy management',
        'Invoice & report generation'
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-24 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900/90 via-blue-900/50 to-indigo-900/90' 
          : 'bg-gradient-to-br from-blue-50/90 via-white/50 to-indigo-50/90'
      }`}></div>
      
      {/* Floating background elements for 3D effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-300 ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl animate-pulse delay-700 ${
          isDarkMode ? 'bg-indigo-500/15' : 'bg-indigo-500/25'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-500/20'
        }`}></div>
      </div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className={`font-semibold text-lg tracking-wide uppercase ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              My Work
            </span>
            <h2 className={`text-4xl lg:text-5xl font-bold mt-4 mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Here are some of my recent projects that showcase my skills and creativity
            </p>
            <div className={`w-24 h-1 mx-auto rounded-full mt-8 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
            }`}></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 hover-3d card-3d ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  perspective: '1000px'
                }}
              >
                {/* Enhanced 3D Card with multiple depth layers */}
                <div className={`relative backdrop-blur-md rounded-3xl p-8 border shadow-2xl transition-all duration-500 h-full transform-gpu depth-layers ${
                  isDarkMode 
                    ? 'bg-gray-800/80 border-gray-700/50 group-hover:shadow-blue-500/25' 
                    : 'bg-white/90 border-gray-200/50 group-hover:shadow-blue-500/20'
                }`}>
                  
                  {/* Floating glow effect - behind content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* 3D border effect - behind content */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>

                  {/* Project Image with enhanced 3D effect */}
                  <div className={`relative z-20 w-full h-48 bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-all duration-300 shadow-lg ring-2 ${isDarkMode ? 'ring-white/10' : 'ring-gray-200/50'}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23ddd"/%3E%3Ctext x="50" y="50" font-size="16" text-anchor="middle" dy=".3em" fill="%23999"%3ENo Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 relative z-20">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-white group-hover:text-blue-300' 
                        : 'text-gray-900 group-hover:text-blue-600'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 backdrop-blur-sm border rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-700/60 border-gray-600/50 text-gray-200 hover:bg-blue-600/30 hover:border-blue-500/50' 
                              : 'bg-gray-100/80 border-gray-300/50 text-gray-700 hover:bg-blue-100/80 hover:border-blue-400/50'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons with 3D effects */}
                  <div className="flex gap-4 mt-8 relative z-20">
                    <a 
                      href={project.github}
                      className={`flex items-center gap-2 px-4 py-2 backdrop-blur-sm border rounded-xl font-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex-1 justify-center shadow-lg hover:shadow-xl ${
                        isDarkMode 
                          ? 'bg-gray-700/60 border-gray-600/50 text-gray-200 hover:bg-gray-600/80 hover:border-gray-500/70' 
                          : 'bg-white/80 border-gray-300/50 text-gray-700 hover:bg-gray-50/90 hover:border-gray-400/70'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex-1 justify-center shadow-lg hover:shadow-2xl`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  </div>

                  {/* Enhanced Hover Effect with 3D depth - behind content */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 -z-10`}></div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <a 
              href="https://github.com/rumesh02?tab=repositories"
              target='_blank'
              rel="noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
