import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-cyan-400 to-blue-500',
    skills: ['React', 'Vue', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    color: 'from-purple-400 to-pink-500',
    skills: ['Java', 'Node.js', 'Python', 'Express', 'FastAPI', 'Spring Boot'],
  },
  {
    title: 'Database',
    color: 'from-green-400 to-emerald-500',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'DevOps & Tools',
    color: 'from-orange-400 to-red-500',
    skills: ['Docker', 'AWS', 'Git', 'Vercel', 'CI/CD'],
  },
  {
    title: 'AI Tools',
    color: 'from-pink-400 to-violet-500',
    skills: ['ChatGPT', 'GitHub Copilot', 'Claude', 'Midjourney', 'Lovable', 'Windsurf', 'Replit'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-muted/10">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// MY SKILLS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I use to build scalable, 
            high-performance applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6 rounded-2xl hover-lift group"
            >
              <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20 mb-6`}>
                <span className="text-sm font-medium text-foreground">{category.title}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-2 text-sm bg-muted/50 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technologies', value: '20+' },
            { label: 'Frameworks', value: '8+' },
            { label: 'Projects Built', value: '6+' },
            { label: 'AI Tools Mastered', value: '7+' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-xl text-center hover-glow"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
