import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Order Management System',
    category: 'API',
    description: 'A backend-driven order and inventory management system that supports customer orders, stock tracking, and admin control with secure role-based access.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    github: 'https://github.com/AkashPenliwar?tab=repositories',
    demo: null,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Blockchain Voting System',
    category: 'Web App',
    description: 'A decentralized voting platform built on Ethereum that ensures tamper-proof, transparent, and verifiable elections using smart contracts.',
    tech: ['Ethereum', 'Solidity', 'React', 'Web3.js'],
    github: 'https://github.com/AkashPenliwar?tab=repositories',
    demo: null,
    color: 'from-purple-400 to-pink-500',
  },
  {
    title: 'MERN Blood Bank Management System',
    category: 'Web App',
    description: 'A full-stack blood bank management platform that enables donor registration, blood inventory tracking, and real-time availability management.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/AkashPenliwar?tab=repositories',
    demo: null,
    color: 'from-red-400 to-orange-500',
  },
  {
    title: 'Smart Task Manager',
    category: 'Web App',
    description: 'A secure and scalable task management platform with user authentication, role-based access control, and real-time task tracking.',
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT'],
    github: 'https://github.com/AkashPenliwar?tab=repositories',
    demo: null,
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'SecureAuth Server',
    category: 'API',
    description: 'A centralized authentication service providing secure login, token-based access, and role-based permissions using OAuth2 and JWT.',
    tech: ['Java', 'Spring Security', 'OAuth2', 'JWT'],
    github: 'https://github.com/AkashPenliwar?tab=repositories',
    demo: null,
    color: 'from-yellow-400 to-amber-500',
  },
  {
    title: 'Microservices Banking System',
    category: 'Web App',
    description: 'A distributed banking system built using microservices architecture, handling user accounts, transactions, and loan processing.',
    tech: ['Java', 'Spring Boot', 'Docker', 'Spring Cloud'],
    github: 'https://github.com/AkashPenliwar?tab=repositories',
    demo: null,
    color: 'from-indigo-400 to-violet-500',
  },
];

const categories = ['All', 'Web App', 'API'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// MY PROJECTS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of enterprise-grade applications and innovative solutions
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                variant={activeFilter === cat ? 'default' : 'outline'}
                className={`${
                  activeFilter === cat 
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground' 
                    : 'border-border text-muted-foreground hover:text-primary hover:border-primary'
                } transition-all duration-300`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group hover-lift"
              >
                {/* Project Header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center">
                      <Folder className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <span className="text-xs font-mono text-primary mb-2 block">{project.category}</span>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted/50 rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
