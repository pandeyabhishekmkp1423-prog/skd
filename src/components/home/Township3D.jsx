import React, { Suspense, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Html } from '@react-three/drei';
import { Building2, Trees, Route, Zap, Sparkles } from 'lucide-react';

function Building({ position, scale = [1, 1, 1], type = 'residential' }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  return (
    <group 
      position={position} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
    >
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={scale} />
        <meshPhysicalMaterial 
          color={hovered ? "#C8A45D" : "#ffffff"} 
          metalness={0.8} 
          roughness={0.2}
          transmission={0.5}
          thickness={1}
          envMapIntensity={2}
        />
      </mesh>
      {/* Decorative wireframe */}
      <mesh scale={[scale[0] * 1.02, scale[1] * 1.02, scale[2] * 1.02]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#C8A45D" wireframe transparent opacity={0.15} />
      </mesh>
      
      {hovered && (
        <Html position={[0, scale[1] / 2 + 0.5, 0]} center>
          <div className="bg-primary/90 backdrop-blur-xl border border-accent/30 p-4 rounded-2xl shadow-2xl min-w-[150px] pointer-events-none">
             <div className="flex items-center gap-2 mb-1">
                <Building2 size={12} className="text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">
                  {type === 'residential' ? 'Elite Villa' : 'Corporate Hub'}
                </span>
             </div>
             <div className="text-[8px] text-white/50 uppercase tracking-widest font-black">LXR SECTOR-4A</div>
          </div>
        </Html>
      )}
    </group>
  );
}

function TownshipScene() {
  return (
    <group rotation={[0, -Math.PI / 4, 0]}>
      {/* Grid Floor */}
      <gridHelper args={[20, 20, 0xC8A45D, 0x333333]} position={[0, -0.01, 0]} />
      
      {/* Central Hub */}
      <Building position={[0, 1.5, 0]} scale={[2, 3, 2]} type="commercial" />
      
      {/* Residential Blocks */}
      <Building position={[4, 1, 4]} scale={[1.5, 2, 1.5]} />
      <Building position={[-4, 1, 4]} scale={[1.5, 2, 1.5]} />
      <Building position={[4, 1, -4]} scale={[1.5, 2, 1.5]} />
      <Building position={[-4, 1, -4]} scale={[1.5, 2, 1.5]} />
      
      {/* Road Network */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1a1a" transparent opacity={0.5} />
      </mesh>

      {/* Decorative Lights */}
      <group>
        {[...Array(8)].map((_, i) => (
          <pointLight 
            key={i} 
            position={[Math.cos(i) * 6, 0.5, Math.sin(i) * 6]} 
            intensity={2} 
            color="#C8A45D" 
          />
        ))}
      </group>
    </group>
  );
}

export default function Township3D() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Multi-layered Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,164,93,0.05),transparent_70%)]" />
        <div className="absolute inset-0 architectural-grid opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <div className="order-2 lg:order-1">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="max-w-xl"
             >
                <div className="flex items-center gap-6 mb-10">
                  <div className="flex items-center gap-2">
                     <div className="w-12 h-px bg-accent shadow-[0_0_15px_#C8A45D]" />
                     <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em]">Smart City Architecture</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter text-white uppercase leading-[0.8] mb-12">
                   3D TOWNSHIP <br /> 
                   <span className="text-gradient-gold">VISUALIZER</span>
                </h2>
                
                <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12 italic border-l-2 border-accent/20 pl-8">
                  Experience the blueprint of perfection. Our interactive 3D township model offers a panoramic preview of Lucknow's most anticipated luxury enclave.
                </p>

                <div className="grid grid-cols-2 gap-8 mb-12">
                   {[
                     { icon: <Building2 size={20} />, label: '800+ Acres', desc: 'Planned Development' },
                     { icon: <Trees size={20} />, label: '40% Green', desc: 'Sustainable Landscape' },
                     { icon: <Route size={20} />, label: '6-Lane Access', desc: 'Shaheed Path Direct' },
                     { icon: <Zap size={20} />, label: 'Smart Grid', desc: 'Electric Infrastructure' }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                           {item.icon}
                        </div>
                        <div className="flex flex-col">
                           <span className="text-xs font-black uppercase tracking-widest text-white mb-1">{item.label}</span>
                           <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">{item.desc}</span>
                        </div>
                     </div>
                   ))}
                </div>

                <button className="px-12 py-6 bg-accent text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-accent/20 hover:bg-white hover:text-primary transition-all duration-700 shine-effect">
                   Book Virtual Tour
                </button>
             </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative h-[500px] md:h-[700px] lg:h-[800px] lux-glass rounded-[4rem] border border-white/5 overflow-hidden group">
             <div className="absolute top-10 left-10 z-20 flex flex-col gap-2">
                <div className="flex items-center gap-3 bg-primary/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[9px] font-black uppercase tracking-widest text-white">LIVE 3D RENDER</span>
                </div>
                <p className="text-[8px] font-bold uppercase tracking-widest text-white/30 ml-4">Drag to Orbit • Scroll to Zoom</p>
             </div>

             <div className="absolute bottom-10 right-10 z-20">
                <div className="w-16 h-16 rounded-full lux-glass border border-white/10 flex items-center justify-center animate-spin-slow">
                   <Sparkles size={20} className="text-accent" />
                </div>
             </div>

             <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[12, 10, 12]} fov={45} />
                <Suspense fallback={null}>
                  <Environment preset="night" />
                  <ambientLight intensity={0.2} />
                  <spotLight 
                    position={[10, 20, 10]} 
                    angle={0.15} 
                    penumbra={1} 
                    intensity={1.5} 
                    castShadow 
                    color="#C8A45D"
                  />
                  <TownshipScene />
                  <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#000000" />
                  <OrbitControls 
                    enableZoom={true} 
                    enablePan={true} 
                    maxPolarAngle={Math.PI / 2.1}
                    minDistance={5}
                    maxDistance={20}
                  />
                </Suspense>
             </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
