import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Lightbulb, Target } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Clean Code', value: 'SOLID Principles' },
  { icon: Database, label: 'Architecture', value: 'Microservices' },
  { icon: Lightbulb, label: 'Approach', value: 'Problem Solver' },
  { icon: Target, label: 'Focus', value: 'Scalable Solutions' },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Know Me <span className="text-gradient">Better</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-primary mb-4">Who am I?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a results-driven Java Full-Stack Developer with strong expertise in designing, 
                developing, and deploying scalable, distributed, and high-performance enterprise 
                applications using modern Java-centric and cloud-native architectures.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My core strength lies in Java-based backend engineering, where I architect RESTful 
                and event-driven microservices using Spring Boot, Spring MVC, Spring Security, and 
                Hibernate/JPA. I have extensive experience in designing loosely-coupled, highly 
                available systems following SOLID principles, Clean Architecture, and Domain-Driven Design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                On the front-end, I develop highly interactive, component-driven user interfaces using 
                React.js, JavaScript (ES6+), HTML5, and CSS3, delivering pixel-perfect, responsive, 
                and UX-optimized applications.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 rounded-xl hover-lift hover-glow group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-sm text-muted-foreground mb-1">{item.label}</h4>
                <p className="font-semibold text-foreground">{item.value}</p>
              </motion.div>
            ))}

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="col-span-2 glass-card p-6 rounded-xl gradient-border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Primary Focus</p>
                  <p className="text-xl font-bold text-gradient">Full Stack Development</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground text-sm mb-1">Current Status</p>
                  <p className="text-lg font-semibold text-primary">Fresh Graduate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
