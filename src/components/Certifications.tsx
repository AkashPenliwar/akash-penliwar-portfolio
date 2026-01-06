import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// CERTIFICATIONS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Credentials & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-12 rounded-2xl text-center">
            <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-muted-foreground">
              Certifications Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              Currently pursuing certifications in cloud technologies and advanced Java development.
              Stay tuned for updates!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AWS', 'Spring Professional', 'Docker', 'Kubernetes'].map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 glass-card rounded-lg text-sm text-muted-foreground"
                >
                  {cert} 🎯
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <h3 className="text-center text-lg font-semibold mb-6 text-muted-foreground">
            Coding Profiles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://www.hackerrank.com/profile/akashpenliwar201"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl flex items-center gap-4 hover-glow hover-lift group"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <span className="text-2xl">💚</span>
              </div>
              <div className="flex-1">
                <p className="font-medium group-hover:text-primary transition-colors">HackerRank</p>
                <p className="text-sm text-muted-foreground">Problem Solving</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://github.com/AkashPenliwar"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl flex items-center gap-4 hover-glow hover-lift group"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <span className="text-2xl">🐙</span>
              </div>
              <div className="flex-1">
                <p className="font-medium group-hover:text-primary transition-colors">GitHub</p>
                <p className="text-sm text-muted-foreground">Open Source Projects</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
