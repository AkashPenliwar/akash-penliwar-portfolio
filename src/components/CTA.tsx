import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Briefcase, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-16 rounded-3xl text-center max-w-4xl mx-auto gradient-border"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8 glow-primary"
          >
            <Rocket className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-gradient">Impactful</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            I'm always open to discussing innovative ideas, enterprise-grade applications, 
            and real-world software projects. If you're looking for a reliable Java Full-Stack 
            Developer who delivers scalable and high-quality solutions, let's connect.
          </p>

          {/* Availability Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Briefcase, label: 'Full-Time' },
              { icon: Users, label: 'Internship' },
              { icon: Rocket, label: 'Freelance' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm">{item.label}</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 glow-primary px-8"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:border-primary hover:text-primary"
            >
              <a
                href="https://drive.google.com/file/d/1kprJTtF4xf-Br44swR8PoZtu-8zZIFAp/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
