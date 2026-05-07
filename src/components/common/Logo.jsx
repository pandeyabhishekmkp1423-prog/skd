import React from 'react';

// Replace the path with the actual filename in your /public folder
const LOGO_SRC = "/logo.png"; 

export const Logo = ({ variant = "gold", showText = true, scale = 1 }) => {
  const colorMap = {
    dark: "text-primary",
    light: "text-white",
    gold: "text-accent",
  };

  const textColor = colorMap[variant] || "text-accent";

  return (
    <div 
      className={`flex items-center gap-3 md:gap-4 ${textColor} origin-left`} 
      style={{ transform: `scale(${scale})` }}
    >
      {/* 3D Cinematic Logo Container */}
      <div className="relative group perspective-1000">
        <div className="relative z-10 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-[5deg] active:scale-95">
           <img 
            src={LOGO_SRC} 
            alt="Maa Vindhyavashini Logo" 
            className="w-12 h-12 md:w-16 md:h-16 object-contain filter drop-shadow-lg"
           />
        </div>
        
        {/* Glow Effects */}
        <div className="absolute inset-0 blur-2xl bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="absolute -inset-2 bg-gradient-to-tr from-accent/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-[1.1]">
          <span className="text-[14px] sm:text-[16px] md:text-xl font-black uppercase tracking-tight sm:tracking-[0.1em] md:tracking-[0.15em] whitespace-nowrap drop-shadow-sm">
            MAA VINDHYAVASHINI
          </span>
          <div className="flex flex-col mt-0.5">
            <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold opacity-80 uppercase tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap">
              S.K.D Private Limited
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="h-[1px] w-3 md:w-6 bg-current opacity-30" />
              <span className="text-[8px] md:text-[9px] font-medium opacity-60 uppercase tracking-[0.3em] whitespace-nowrap">
                & Developers
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const SquareLogo = () => (
  <div className="w-16 h-16 bg-white/10 backdrop-blur-md flex items-center justify-center rounded-2xl shadow-2xl border border-white/20">
    <img 
  src={logo.png} 
  alt="Maa Vindhyavashini Logo" 
  className="w-12 h-12 md:w-16 md:h-16 object-contain"
/>
  </div>
);

export default Logo;