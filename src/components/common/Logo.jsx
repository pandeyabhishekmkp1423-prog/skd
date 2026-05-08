import React from 'react';

const LOGO_SRC = "/logo.png"; 

export const Logo = ({ variant = "gold", showText = true }) => {
  const colorMap = {
    dark: "text-primary",
    light: "text-white",
    gold: "text-accent",
  };

  const textColor = colorMap[variant] || "text-accent";

  return (
    <div className={`flex items-center gap-4 md:gap-6 ${textColor}`}>
      {/* LOGO SIZING LOGIC:
         Mobile: 60px height min
         Desktop: up to 100px height
      */}
      <div className="relative shrink-0 py-1">
        <img 
          src={LOGO_SRC} 
          alt="MV Logo" 
          className="h-[60px] w-auto sm:h-[75px] md:h-[90px] lg:h-[105px] object-contain transition-all duration-500 filter drop-shadow-2xl"
        />
      </div>
      
      {showText && (
        <div className="flex flex-col justify-center border-l-2 border-current/20 pl-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-[0.85]">
            MAA <br className="sm:hidden" />
            <span className="opacity-90">VINDHYAVASHINI</span>
          </h1>
          <div className="flex flex-col mt-1">
             <span className="text-[8px] sm:text-[10px] md:text-[12px] font-extrabold opacity-70 uppercase tracking-[0.25em]">
               S.K.D Pvt. Ltd.
             </span>
             <span className="text-[7px] sm:text-[9px] md:text-[10px] font-bold opacity-50 uppercase tracking-[0.5em]">
               & Developers
             </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;