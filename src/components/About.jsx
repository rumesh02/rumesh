import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  // Add floating animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* No animations needed - removed floating keyframes */
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const skills = [
    { 
      name: "React", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1" fill="none"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
        </svg>
      ),
      color: "#61DAFB"
    },
    { 
      name: "JavaScript", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/>
          <text x="7" y="17" fill="#000" fontSize="12" fontFamily="serif" fontWeight="bold">JS</text>
        </svg>
      ),
      color: "#F7DF1E"
    },
    { 
      name: "Node.js", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#339933"/>
          <path d="M2 17l10 5 10-5" stroke="#339933" strokeWidth="2" fill="none"/>
          <path d="M2 12l10 5 10-5" stroke="#339933" strokeWidth="2" fill="none"/>
        </svg>
      ),
      color: "#339933"
    },
    { 
      name: "Python", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M14.25 2c2.765 0 5 2.235 5 5v4c0 .552-.448 1-1 1s-1-.448-1-1V7c0-1.654-1.346-3-3-3H9.75c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h4.5c1.654 0 3-1.346 3-3v-4c0-.552.448-1 1-1s1 .448 1 1v4c0 2.765-2.235 5-5 5H9.75c-2.765 0-5-2.235-5-5V7c0-2.765 2.235-5 5-5h4.5z" fill="#3776AB"/>
          <circle cx="8" cy="8" r="1" fill="#FFD43B"/>
        </svg>
      ),
      color: "#3776AB"
    },
    { 
      name: "Java", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149z" fill="#ED8B00"/>
          <path d="M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218z" fill="#ED8B00"/>
          <path d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573z" fill="#ED8B00"/>
        </svg>
      ),
      color: "#ED8B00"
    },
    { 
      name: "MongoDB", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z" fill="#47A248"/>
        </svg>
      ),
      color: "#47A248"
    },
    { 
      name: "MySQL", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.151z" fill="#00758F"/>
          <path d="M9.77 1.174c-.286 0-.372.194-.372.372 0 .178.086.372.372.372.194 0 .372-.086.372-.372 0-.178-.178-.372-.372-.372z" fill="#00758F"/>
          <path d="M1.024 11.119c.007 2.209 1.016 4.169 2.574 5.441.016.014.037.024.055.035 1.724 1.336 3.982 2.14 6.467 2.14 3.165 0 5.948-1.424 7.817-3.661.016-.02.034-.038.05-.058 1.548-1.9 2.484-4.322 2.484-6.917 0-6.076-4.925-11-11-11s-11 4.924-11 11z" fill="#00758F"/>
        </svg>
      ),
      color: "#00758F"
    },
    { 
      name: "HTML", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" fill="#E34F26"/>
          <path d="M12 22.766l6.934-1.925L20.34 2.508H12v20.258z" fill="#EF652A"/>
          <path d="M12 9.414l4.906-.002.18-2.004L12 7.406V5.434h7.5l-.084.942-.87 9.766L12 17.058v-2.027l2.846-.766.16-1.79H12V9.414z" fill="#EBEBEB"/>
          <path d="M12 5.434v1.972H4.5l.084-.942.346-3.866H12v2.836zm0 7.566v2.027l-2.846-.766-.16-1.79H12V9.414H4.5l.084.942.87 9.766L12 17.058z" fill="#FFF"/>
        </svg>
      ),
      color: "#E34F26"
    },
    { 
      name: "CSS", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#264DE4"/>
          <path d="M12 22.766l6.934-1.925L20.34 2.508H12v20.258z" fill="#2965F1"/>
          <path d="M12 9.414l4.906-.002.18-2.004L12 7.406V5.434h7.5l-.084.942-.87 9.766L12 17.058v-2.027l2.846-.766.16-1.79H12V9.414z" fill="#EBEBEB"/>
          <path d="M12 5.434v1.972H4.5l.084-.942.346-3.866H12v2.836zm0 7.566v2.027l-2.846-.766-.16-1.79H12V9.414H4.5l.084.942.87 9.766L12 17.058z" fill="#FFF"/>
        </svg>
      ),
      color: "#264DE4"
    },
    { 
      name: "C", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.542 4.618c3.191-.968 6.791.546 8.044 3.482 1.253 2.936.107 6.326-2.56 7.575l-.003-.009c-.902.433-1.89.637-2.859.637-3.066 0-5.842-2.016-6.723-5.081-.881-3.065.514-6.281 3.341-7.534.484-.215.993-.37 1.51-.459.15-.026.3-.045.45-.061.1-.011.2-.018.3-.021.1-.003.2-.003.3 0 .1.003.2.01.3.021z" fill="#00599C"/>
          <text x="12" y="16" fill="white" fontSize="8" textAnchor="middle" fontFamily="serif" fontWeight="bold">C</text>
        </svg>
      ),
      color: "#00599C"
    },
    { 
      name: "Firebase", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M5.016 18.573l8.99 5.02 1.54-13.353-2.31-4.241L5.016 18.573z" fill="#FFA000"/>
          <path d="M14.017 3.988l-1.54 13.353 7.92-4.416L14.017 3.988z" fill="#F57F17"/>
          <path d="M14.017 3.988L5.016 18.573l8.99 5.02L14.017 3.988z" fill="#FF8F00"/>
          <path d="M11.455 8.9L5.016 18.573l8.99 5.02L11.455 8.9z" fill="#FFA000"/>
          <circle cx="4.5" cy="16" r="0.5" fill="#607D8B"/>
        </svg>
      ),
      color: "#FFA000"
    },
    { 
      name: "GitHub", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#181717"/>
        </svg>
      ),
      color: "#181717"
    },
    { 
      name: "Tailwind CSS", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.13 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.46 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.13 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.46 12 7 12z" fill="#06B6D4"/>
        </svg>
      ),
      color: "#06B6D4"
    },
    { 
      name: "PHP", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <ellipse cx="12" cy="12" rx="11" ry="6" fill="#8993BE"/>
          <ellipse cx="12" cy="12" rx="11" ry="6" fill="none" stroke="#232531" strokeWidth="1"/>
          <text x="12" y="16" fill="white" fontSize="7" textAnchor="middle" fontFamily="serif" fontWeight="bold">PHP</text>
        </svg>
      ),
      color: "#8993BE"
    },
  ];

  return (
    <section id="about" className="min-h-screen py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-indigo-900/50"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-lg tracking-wide uppercase">
              Get to know me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  I'm a passionate{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 bg-clip-text text-transparent">
                    Full-Stack Developer
                  </span>
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating clean, efficient, and user-friendly applications that solve real-world problems.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey in software development started with curiosity and has evolved into a 
                  commitment to continuous learning and improvement. I enjoy working with teams to 
                  build innovative solutions that make a difference.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects</div>
                </div>
                
                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a 
                  href="#projects"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  View My Work
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Skills */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/20 dark:border-gray-700/20 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Skills & Expertise
                </h3>
                
                {/* Skills Grid Container */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50/50 to-blue-50/50 dark:from-slate-800/50 dark:to-blue-900/50">
                  <div className="grid grid-cols-4 gap-4 lg:grid-cols-5 lg:gap-3">
                    {skills.map((skill, index) => (
                      <div 
                        key={skill.name}
                        className={`group cursor-pointer transform transition-all duration-1000 hover:scale-110 ${
                          isVisible 
                            ? 'opacity-100' 
                            : 'opacity-0 translate-y-10'
                        }`}
                        style={{
                          transitionDelay: `${index * 0.1}s`,
                        }}
                      >
                        <div 
                          className="relative p-3 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300"
                          style={{ 
                            backgroundColor: `${skill.color}20`,
                            borderColor: `${skill.color}40`
                          }}
                        >
                          <div className="flex flex-col items-center space-y-2">
                            <div 
                              className="transform transition-transform duration-300 group-hover:rotate-12"
                              style={{ filter: `drop-shadow(0 4px 8px ${skill.color}40)` }}
                            >
                              {skill.icon}
                            </div>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 text-center">
                              {skill.name}
                            </span>
                          </div>
                          
                          {/* Static particles effect */}
                          <div className="absolute inset-0 pointer-events-none">
                            <div 
                              className="absolute w-1 h-1 rounded-full animate-ping"
                              style={{ 
                                backgroundColor: skill.color,
                                top: '10%',
                                left: '10%',
                                animationDelay: `${index * 0.5}s`
                              }}
                            ></div>
                            <div 
                              className="absolute w-1 h-1 rounded-full animate-ping"
                              style={{ 
                                backgroundColor: skill.color,
                                top: '80%',
                                right: '15%',
                                animationDelay: `${index * 0.7}s`
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
