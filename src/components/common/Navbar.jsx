import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  }, [pathname]);

  // Prevent background scroll when menu is open
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <>
      <nav
        className={cn(
          'fixed left-1/2 -translate-x-1/2 w-[95%] lg:w-[90%] max-w-7xl z-[100] transition-all duration-500 ease-out',
          isScrolled ? 'top-4' : 'top-4 md:top-8'
        )}
      >
        <div className={cn(
          "relative rounded-[1.25rem] md:rounded-[2.5rem] px-4 md:px-8 py-2.5 md:py-4 transition-all duration-500 border shadow-2xl backdrop-blur-xl overflow-hidden",
          isScrolled 
            ? "bg-white/95 border-white/40 shadow-black/10" 
            : "bg-primary/30 border-white/10 shadow-black/20"
        )}>
          
          <div className="flex justify-between items-center relative z-10 gap-2">
            {/* Brand/Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <Logo variant={isScrolled ? "dark" : "gold"} scale={isScrolled ? 0.7 : 0.8} />
            </Link>
    
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'relative px-4 py-2 text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300',
                      pathname === link.path 
                        ? 'text-accent' 
                        : (isScrolled ? 'text-primary' : 'text-white/80 hover:text-white')
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
                  "px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-3 group overflow-hidden",
                  isScrolled ? "bg-primary text-white" : "bg-accent text-white"
                )}
              >
                Schedule Visit
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
    
            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
               <Link
                  to="/contact"
                  className={cn(
                    "hidden sm:block px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all",
                    isScrolled ? "bg-primary text-white" : "bg-accent text-white"
                  )}
               >
                 Contact
               </Link>
               <button
                onClick={toggleMenu}
                className={cn(
                  "p-2.5 rounded-xl transition-all",
                  isScrolled ? "bg-primary/10 text-primary" : "bg-white/20 text-white"
                )}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar - Higher Z-Index */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[200] lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="absolute inset-0 bg-primary/60 backdrop-blur-lg"
            />
            
            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                 <Logo variant="dark" scale={0.7} />
                 <button 
                   onClick={toggleMenu} 
                   className="p-3 bg-primary/5 rounded-2xl text-primary"
                 >
                   <X size={24} />
                 </button>
              </div>
              
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        'text-3xl font-bold tracking-tight uppercase flex items-center justify-between py-2',
                        pathname === link.path ? 'text-accent' : 'text-primary'
                      )}
                    >
                      {link.name}
                      <ArrowRight size={20} className={cn(
                        "transition-all",
                        pathname === link.path ? "opacity-100" : "opacity-0 -translate-x-4"
                      )} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <Link
                  to="/contact"
                  className="bg-primary text-white w-full py-5 rounded-2xl text-center text-[10px] font-black uppercase tracking-[0.2em] block shadow-xl shadow-primary/20"
                >
                  Consult an Expert
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}