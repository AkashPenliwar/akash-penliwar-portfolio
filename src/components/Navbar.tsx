import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          {/* Techy Hexagonal Logo */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 group-hover:scale-110 transition-all duration-500">
            {/* Outer hexagon frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent clip-hexagon animate-gradient bg-[length:200%_200%]" />
            {/* Inner dark hexagon */}
            <div className="absolute inset-[2px] bg-background clip-hexagon" />
            {/* Glowing core */}
            <div className="absolute inset-[4px] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 clip-hexagon" />
            {/* Circuit lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[1px] h-3 bg-primary/60 top-1 left-1/2 -translate-x-1/2" />
              <div className="absolute w-[1px] h-3 bg-accent/60 bottom-1 left-1/2 -translate-x-1/2" />
              <div className="absolute w-2 h-[1px] bg-secondary/60 left-1 top-1/2 -translate-y-1/2" />
              <div className="absolute w-2 h-[1px] bg-secondary/60 right-1 top-1/2 -translate-y-1/2" />
            </div>
            {/* Initials with techy style */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg md:text-xl font-black tracking-tighter drop-shadow-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                <span className="text-primary">A</span>
                <span className="text-secondary">P</span>
              </span>
            </div>
            {/* Scanning line effect */}
            <div className="absolute inset-0 overflow-hidden clip-hexagon">
              <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent top-0 animate-scan" />
            </div>
            {/* Hover glow */}
            <div className="absolute -inset-1 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 clip-hexagon" />
          </div>
          
          {/* Animated gradient text */}
          <span 
            className="hidden sm:block text-xl font-bold tracking-wide group-hover:tracking-wider transition-all duration-300 animate-text-gradient bg-[length:200%_auto]"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              backgroundImage: 'linear-gradient(90deg, hsl(187 100% 50%), hsl(270 60% 60%), hsl(187 80% 40%), hsl(187 100% 50%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Akash.dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
          >
            <a
              href="https://drive.google.com/file/d/1kprJTtF4xf-Br44swR8PoZtu-8zZIFAp/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass-card mx-4 mt-2 rounded-xl"
      >
        <div className="py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left py-2"
            >
              {link.label}
            </button>
          ))}
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground w-full mt-2"
          >
            <a
              href="https://drive.google.com/file/d/1kprJTtF4xf-Br44swR8PoZtu-8zZIFAp/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
