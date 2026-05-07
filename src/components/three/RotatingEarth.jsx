import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function RotatingEarth() {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial
          color="#0a1a2b"
          emissive="#fb923c"
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* City lights simulation */}
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[2.55, 64, 64]} />
        <meshBasicMaterial
          color="#fb923c"
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>

      {/* Atmospheric glow */}
      <Sphere args={[2.8, 64, 64]}>
        <meshBasicMaterial
          color="#fb923c"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>

      <pointLight position={[10, 10, 10]} intensity={1.5} color="#fb923c" />
      <ambientLight intensity={0.2} />
    </group>
  );
}
