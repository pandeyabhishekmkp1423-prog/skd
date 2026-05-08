import React from 'react';

const LOGO_SRC = "/logo.png"; 

export const Logo = ({ variant = "gold", showText = true, scale = 1 }) => {
  const colorMap = {
    dark: "text-primary",
    light: "text-white",
    gold: "text-accent",
  };

  const textColor = colorMap[variant] || "text-accent";

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${textColor}`}>
      <div className="relative shrink-0" style={{ transform: `scale(${scale})` }}>
        <img 
          src={LOGO_SRC} 
          alt="MV Logo" 
          // Using responsive height instead of scale to keep navbar slim
          className="h-12 w-auto md:h-16 lg:h-20 object-contain transition-all duration-500"
        />
      </div>
      
      {/* Brand Typography - Hidden on very small screens, visible on mobile+ */}
      {showText && (
        <div className="flex flex-col justify-center border-l border-current/20 pl-2 md:pl-3">
          <h1 className="text-[10px] sm:text-sm md:text-xl font-black uppercase tracking-wider leading-none">
            MAA <span className="opacity-80">VINDHYAVASHINI</span>
          </h1>
          <span className="text-[7px] md:text-[10px] font-bold opacity-60 uppercase tracking-[0.2em] mt-1">
            S.K.D Pvt. Ltd. & Developers
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;