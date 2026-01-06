import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Akash Penliwar. All rights reserved.
            </p>
          </motion.div>

          {/* Center - Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>and</span>
            <span className="text-primary">React</span>
          </motion.div>

          {/* Right - Back to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center group-hover:glow-primary transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border/50 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
        >
          <a
            href="https://www.linkedin.com/in/akashpenliwardev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AkashPenliwar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.hackerrank.com/profile/akashpenliwar201"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            HackerRank
          </a>
          <a
            href="https://akashpenliwar.github.io/portfolio-akash/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Portfolio
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
