import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/utils';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  
  // Use a ref to store the previous scroll position without re-rendering
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Determine if header should be minimized (Scrolled state)
      setIsScrolled(currentScrollY > 40);

      // 2. Determine Visibility (Hide on Scroll Down / Show on Scroll Up)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling Down - Hide Header
        setIsVisible(false);
      } else {
        // Scrolling Up - Show Header
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  }, [pathname]);

  const toggleMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : 'unset';
  };

  return (
    <>
      <nav
        className={cn(
          'fixed left-1/2 -translate-x-1/2 w-[95%] lg:w-[92%] max-w-7xl z-[100] transition-all duration-500 ease-in-out',
          // VERTICAL POSITIONING LOGIC:
          // If not visible, we translate it off-screen (-150%)
          !isVisible ? '-translate-y-[150%]' : (isScrolled ? 'top-2 md:top-3' : 'top-4 md:top-6')
        )}
      >
        <div className={cn(
          "relative transition-all duration-500 border backdrop-blur-2xl overflow-hidden shadow-2xl",
          isScrolled 
            ? "bg-white/95 border-black/5 py-1.5 md:py-2 px-6 rounded-[1.5rem] md:rounded-[2.5rem]" 
            : "bg-primary/20 border-white/10 py-3 md:py-4 px-6 md:px-10 rounded-[2rem] md:rounded-[3.5rem]"
        )}>
          
          <div className="flex justify-between items-center relative z-10 gap-4">
            {/* Logo scaling: Remains slim on laptop scroll */}
            <Link to="/" className={cn(
                "flex items-center shrink-0 transition-all duration-500",
                isScrolled ? "scale-90 md:scale-[0.8] origin-left" : "scale-100"
            )}>
              <Logo variant={isScrolled ? "dark" : "gold"} />
            </Link>
    
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <div className="flex items-center gap-0.5 mr-4">
                {navLinks.filter(l => l.name !== 'Contact').map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'relative px-4 py-1 font-black tracking-[0.22em] uppercase transition-all duration-300',
                      pathname === link.path 
                        ? 'text-accent' 
                        : (isScrolled ? 'text-primary/70 hover:text-primary' : 'text-white/70 hover:text-white'),
                      isScrolled ? "text-[8px]" : "text-[9px]"
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {pathname === link.path && (
                      <motion.span 
                        layoutId="nav-active"
                        className="absolute inset-x-4 bottom-0 h-[2px] bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/contact"
                className={cn(
                  "rounded-full font-black uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-3 group overflow-hidden shadow-lg",
                  isScrolled 
                    ? "bg-primary text-white px-5 py-2 text-[7px]" 
                    : "bg-accent text-white px-7 py-3 text-[9px]"
                )}
              >
                Schedule Visit
                <ArrowRight size={isScrolled ? 12 : 14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
    
            {/* Mobile Toggle */}
            <div className="flex lg:hidden items-center gap-3">
               <button
                onClick={toggleMenu}
                className={cn(
                  "p-3 rounded-2xl transition-all border shadow-sm",
                  isScrolled 
                    ? "bg-primary/5 border-primary/10 text-primary" 
                    : "bg-white/10 border-white/20 text-white"
                )}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[200] lg:hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={toggleMenu} className="absolute inset-0 bg-primary/40 backdrop-blur-xl" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col p-10">
              <div className="flex justify-between items-center mb-16">
                 <Logo variant="dark" />
                 <button onClick={toggleMenu} className="p-4 bg-primary/5 rounded-full text-primary"><X size={28} /></button>
              </div>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div key={link.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                    <Link to={link.path} className={cn('text-4xl font-black tracking-tighter uppercase flex items-center justify-between', pathname === link.path ? 'text-accent' : 'text-primary')}>
                      {link.name}
                      <ArrowRight size={24} className={pathname === link.path ? "opacity-100" : "opacity-0"} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}