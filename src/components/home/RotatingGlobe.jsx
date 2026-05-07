import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { MapPin, Globe as GlobeIcon } from 'lucide-react';

function Earth() {
  const earthRef = useRef();
  const cloudsRef = useRef();
  
  const [colorMap, normalMap, roughnessMap, cloudsMap] = useLoader(THREE.TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
  ]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (earthRef.current) earthRef.current.rotation.y = t * 0.1;
    if (cloudsRef.current) cloudsRef.current.rotation.y = t * 0.12;
  });

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshPhysicalMaterial 
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          normalScale={[0.5, 0.5]}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[3.05, 64, 64]} />
        <meshStandardMaterial 
          map={cloudsMap} 
          transparent 
          opacity={0.4} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      <group rotation={[0, -Math.PI / 1.7, -0.45]}>
        <group position={[0, 0, 3.08]}>
           <mesh>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshBasicMaterial color="#D71920" />
           </mesh>
           <pointLight intensity={6} color="#D71920" distance={2} decay={2} />
        </group>
      </group>
    </group>
  );
}

export default function RotatingGlobe() {
  // Logic to handle camera FOV based on screen width
  const [fov, setFov] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFov(60); // Zoom out more for mobile
      } else {
        setFov(40); // Standard for desktop
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-12 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Changed to flex-col (mobile first) then lg:flex-row */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-24">
          
          {/* Content Side - Comes first on mobile for better UX */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-xl text-left"
             >
                <div className="flex items-center gap-4 mb-4 md:mb-8">
                  <div className="w-8 md:w-12 h-[2px] bg-red-600" />
                  <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Global Footprint</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-primary uppercase leading-[0.9] mb-8 md:mb-12">
                  STRATEGIC <br /> 
                  <span className="text-gray-300">LOCATION</span>
                </h2>
                
                <div className="space-y-6 md:space-y-10">
                   <div className="flex items-start gap-4 md:gap-6 group">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg">
                         <MapPin size={20} />
                      </div>
                      <div>
                         <h4 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tighter">Lucknow, UP</h4>
                         <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed">
                            Centered in India's most dynamic growth belt.
                         </p>
                      </div>
                   </div>

                   <div className="p-6 md:p-8 bg-gray-50 border border-gray-100 rounded-[1.5rem] md:rounded-[2rem]">
                      <h5 className="text-lg md:text-xl font-black text-primary uppercase tracking-tighter mb-2">Architectural Excellence</h5>
                      <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
                        Bridging local heritage with international engineering standards.
                      </p>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Visual Side - Canvas Height is now responsive */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px]">
             <div className="h-full w-full touch-none"> {/* touch-none prevents page scrolling while interacting with globe */}
                <Canvas>
                  <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={fov} />
                  <Suspense fallback={null}>
                    <Environment preset="city" /> 
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    
                    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
                        <Earth />
                    </Float>
                    
                    <OrbitControls 
                      enableZoom={false} 
                      enablePan={false} 
                      rotateSpeed={0.6}
                    />
                  </Suspense>
                </Canvas>
                
                {/* Responsive Label */}
                <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-red-600 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-red-100 shadow-xl whitespace-nowrap">
                        Lucknow Operations Central
                    </span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}