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
          <div className="relative w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center overflow-hidden group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-primary/50 group-hover:shadow-xl">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 animate-pulse" />
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300" />
            {/* Initials */}
            <span className="relative text-xl md:text-2xl font-black text-primary-foreground tracking-tighter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
              AP
            </span>
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </div>
          <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent group-hover:opacity-80 transition-opacity duration-300">
            Abhisekh
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
