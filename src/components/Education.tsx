import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="section-padding relative overflow-hidden bg-muted/10">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// EDUCATION</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

            {/* Education Card */}
            <div className="glass-card p-8 rounded-2xl ml-0 md:ml-20 relative group hover-lift">
              {/* Timeline Dot */}
              <div className="absolute -left-[52px] top-8 w-4 h-4 rounded-full bg-primary glow-primary hidden md:block" />

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      B.Tech CSE
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>2025</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Dr. Babasaheb Ambedkar Technological University
                  </h3>

                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Chandrapur, India</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="glass-card px-4 py-2 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">CGPA</p>
                      <p className="text-2xl font-bold text-gradient">7.71</p>
                    </div>
                    <div className="glass-card px-4 py-2 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Status</p>
                      <p className="text-lg font-semibold text-green-400">Graduating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
