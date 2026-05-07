import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Environment } from '@react-three/drei';
import { ArrowRight, Play, MousePointer2 } from 'lucide-react';
import { COMPANY_NAME } from '../../constants';
import { BlueprintOverlay, ConstructionParticles } from '../common/ArchitecturalEffects';

function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%" 
          }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: ["-10%", "110%"],
            x: ["-5%", "5%"]
          }}
          transition={{ 
            duration: Math.random() * 20 + 20, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute w-1 h-1 bg-accent rounded-full blur-[2px] shadow-[0_0_10px_#C8A45D]"
          style={{ width: Math.random() * 4 + 2 + "px", height: Math.random() * 4 + 2 + "px" }}
        />
      ))}
    </div>
  );
}

function LuxuryArchitectureObject() {
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.5}>
      <group>
        {/* Main Pillar/Building Shape */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 3, 1.2]} />
          <meshPhysicalMaterial
            color="#C8A45D"
            metalness={0.9}
            roughness={0.1}
            transmission={0.4}
            thickness={0.5}
            envMapIntensity={2}
          />
        </mesh>
        {/* Floating Accents */}
        <mesh position={[1.5, 1, 0.5]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#D6B97A" metalness={1} roughness={0} />
        </mesh>
        <mesh position={[-1.5, -0.5, -0.5]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#C8A45D" metalness={1} roughness={0} />
        </mesh>
        {/* Wireframe Overlay */}
        <mesh scale={1.05}>
          <boxGeometry args={[1.2, 3, 1.2]} />
          <meshBasicMaterial color="#C8A45D" wireframe transparent opacity={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[100vh] w-full flex items-center overflow-hidden bg-primary pt-12 md:pt-16">
      {/* Background System */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="w-full h-full"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source 
                src="https://cdn.pixabay.com/video/2019/12/12/30129-379685933_large.mp4" 
                type="video/mp4" 
              />
            </video>
          </motion.div>
        </div>
        
        {/* Multi-layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,164,93,0.1),transparent_50%)] z-10" />
        
        {/* Architectural Texture Layer */}
        <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 backdrop-blur-3xl -z-10 skew-x-[15deg] translate-x-1/2" />
        <BlueprintOverlay />
        <ConstructionParticles color="white" />
      </div>

      <FloatingParticles />

      {/* 3D Immersive Centerpiece */}
      <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full z-20 pointer-events-none group">
        <Canvas dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <Suspense fallback={null}>
            <Environment preset="night" />
            <ambientLight intensity={0.2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#C8A45D" castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#C8A45D" />
            
            <group position={[1, 0, 0]} rotation={[0, -0.2, 0]}>
               <LuxuryArchitectureObject />
            </group>
            
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Enhanced Content Layer */}
      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Immersive Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center space-x-8 mb-12"
            >
              <div className="flex items-center gap-3">
                 <div className="w-12 h-px bg-accent shadow-[0_0_15px_#C8A45D]" />
                 <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] drop-shadow-md">
                THE VANGUARD OF LUCKNOW'S ARCHITECTURE
              </span>
            </motion.div>

            {/* Redesigned Heading */}
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.8] text-white mb-8 md:mb-12 uppercase perspective-1000">
               <motion.span 
                 initial={{ opacity: 0, rotateX: 90 }} 
                 animate={{ opacity: 1, rotateX: 0 }} 
                 transition={{ delay: 0.7, duration: 0.8 }}
                 className="block origin-top"
               >
                 Pioneering
               </motion.span>
               <motion.span 
                 initial={{ opacity: 0, rotateX: 90 }} 
                 animate={{ opacity: 1, rotateX: 0 }} 
                 transition={{ delay: 0.9, duration: 0.8 }}
                 className="text-gradient-gold block origin-top"
               >
                 Premier
               </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="relative mb-12 md:mb-20"
            >
               <p className="text-white/40 text-lg md:text-2xl max-w-2xl font-light leading-relaxed border-l-2 border-accent/20 pl-6 md:pl-8">
                Orchestrating <span className="text-white font-medium">Extraordinary Lifestyles</span> across the skyline of North India. Redefining luxury through architectural precision...
               </p>
            </motion.div>

            {/* CTA Group Enhancements */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row items-center gap-12"
            >
              <button 
                className="group relative px-16 py-8 bg-accent text-white rounded-[2rem] font-black uppercase tracking-[0.5em] text-[10px] luxury-shadow transition-all duration-700 overflow-hidden w-full sm:w-auto shine-effect"
              >
                <div className="flex items-center space-x-4 relative z-10">
                  <span>Explore Portfolio</span>
                  <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <button className="flex items-center space-x-8 text-white group relative">
                 <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center lux-glass-light hover:lux-glass transition-all duration-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 opacity-20" />
                    <Play size={24} className="fill-white translate-x-1 group-hover:scale-110 transition-transform" />
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-2">Cinematic Preview</span>
                    <span className="text-sm font-bold text-white/50 tracking-widest group-hover:text-white transition-colors">The Legacy Unfolds</span>
                 </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Side HUD / Stats Decor */}
      <div className="absolute right-12 bottom-32 hidden xl:flex flex-col items-end z-30 space-y-4">
        <div className="p-8 lux-glass rounded-[2.5rem] border border-white/5 text-right min-w-[280px]">
           <span className="text-accent text-[9px] font-black uppercase tracking-[0.5em] mb-4 block">Trust Quotient</span>
           <div className="flex items-end justify-end gap-2 mb-2">
              <span className="text-white text-6xl font-black tracking-tighter leading-none">450+</span>
              <span className="text-accent text-xs font-black uppercase mb-1">Acres</span>
           </div>
           <p className="text-white/20 text-[8px] font-bold uppercase tracking-[0.3em]">Total developed landbank in Uttar Pradesh</p>
           
           <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-2">
              <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-widest">
                 <span className="text-white/40">Portfolio Completion</span>
                 <span className="text-accent">Active Delivery</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                 <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "94%" }}
                  transition={{ duration: 3, delay: 1 }}
                  className="h-full bg-gradient-to-r from-accent to-champagne shadow-[0_0_10px_#C8A45D]"
                 />
              </div>
           </div>
        </div>
      </div>

      {/* Scroll indicator with refined design */}
      <div className="absolute left-12 bottom-16 z-30">
         <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-6"
         >
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center lux-glass">
               <MousePointer2 size={16} className="text-accent animate-pulse" />
            </div>
         </motion.div>
      </div>
    </section>
  );
}
