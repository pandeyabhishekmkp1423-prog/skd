import React, { useState, useEffect } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
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
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : 'unset';
  };

  return (
    <>
      <nav
        className={cn(
          'fixed left-1/2 -translate-x-1/2 w-[95%] lg:w-[92%] max-w-7xl z-[100] transition-all duration-700 ease-in-out',
          isScrolled ? 'top-2 md:top-4' : 'top-4 md:top-6'
        )}
      >
        <div className={cn(
          "relative rounded-[1.8rem] md:rounded-[3rem] px-4 md:px-7 transition-all duration-700 border backdrop-blur-2xl overflow-hidden shadow-2xl",
         isScrolled 
  ? "bg-white/95 border-black/5 py-1.5 md:py-2" 
  : "bg-primary/20 border-white/10 py-2.5 md:py-3.5"
        )}>
          
          <div className="flex justify-between items-center relative z-10 gap-4">
            {/* Brand/Logo - Syncing with updated Logo.jsx sizing */}
            <Link to="/" className="flex items-center shrink-0 transition-transform hover:opacity-90 active:scale-95">
              <Logo variant={isScrolled ? "dark" : "gold"} />
            </Link>
    
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1 mr-4">
                {navLinks.filter(l => l.name !== 'Contact').map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'relative px-4 py-1 text-[9px] font-black tracking-[0.22em] uppercase transition-all duration-300',
                      pathname === link.path 
                        ? 'text-accent' 
                        : (isScrolled ? 'text-primary/70 hover:text-primary' : 'text-white/70 hover:text-white')
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {pathname === link.path && (
                      <motion.span 
                        layoutId="nav-active"
                        className="absolute inset-x-5 bottom-0 h-[2px] bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/contact"
                className={cn(
                  "px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-3 group overflow-hidden shadow-lg",
                  isScrolled ? "bg-primary text-white" : "bg-accent text-white"
                )}
              >
                Schedule Visit
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
    
            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-3">
               <Link
                  to="/contact"
                  className={cn(
                    "hidden sm:block px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all shadow-md",
                    isScrolled ? "bg-primary text-white" : "bg-accent text-white"
                  )}
               >
                  Contact
               </Link>
               <button
                onClick={toggleMenu}
                className={cn(
                  "p-3.5 rounded-2xl transition-all border shadow-sm",
                  isScrolled 
                    ? "bg-primary/5 border-primary/10 text-primary" 
                    : "bg-white/10 border-white/20 text-white"
                )}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[200] lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="absolute inset-0 bg-primary/40 backdrop-blur-xl"
            />
            
            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-[0_0_50px_rgba(0,0,0,0.2)] flex flex-col p-10"
            >
              <div className="flex justify-between items-center mb-16">
                 <Logo variant="dark" />
                 <button 
                   onClick={toggleMenu} 
                   className="p-4 bg-primary/5 rounded-full text-primary active:scale-90 transition-transform"
                 >
                   <X size={28} />
                 </button>
              </div>
              
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        'text-4xl font-black tracking-tighter uppercase flex items-center justify-between group',
                        pathname === link.path ? 'text-accent' : 'text-primary'
                      )}
                    >
                      {link.name}
                      <ArrowRight size={24} className={cn(
                        "transition-all",
                        pathname === link.path ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      )} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-12">
                <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.3em] mb-6">
                  Transforming the Indian Horizon
                </p>
                <Link
                  to="/contact"
                  className="bg-primary text-white w-full py-6 rounded-[2rem] text-center text-[11px] font-black uppercase tracking-[0.3em] block shadow-2xl shadow-primary/30 active:scale-[0.98] transition-transform"
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