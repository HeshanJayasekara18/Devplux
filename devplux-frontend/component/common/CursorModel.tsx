'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { X } from 'lucide-react';

function RoboticModel() {
  const { scene } = useGLTF('/res/model/robotic3dmodel.glb');
  const modelRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Set target rotation based on mouse position
      targetRotation.current = {
        x: y * 0.3, // Rotate up/down
        y: x * 0.3, // Rotate left/right
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth animation loop
  useEffect(() => {
    const animate = () => {
      if (modelRef.current) {
        // Smooth interpolation (lerp) for rotation
        currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.05;
        currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.05;

        modelRef.current.rotation.x = currentRotation.current.x;
        modelRef.current.rotation.y = currentRotation.current.y;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <group ref={modelRef}>
      <primitive object={scene} scale={2} position={[0, 0, 0]} />
    </group>
  );
}

export default function CursorModel() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      {/* 3D Canvas */}
      <div className="relative w-32 h-32 pointer-events-auto">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
          <RoboticModel />
        </Canvas>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-1 p-1 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors pointer-events-auto"
          aria-label="Hide 3D model"
        >
          <X size={14} className="text-white" />
        </button>
      </div>
    </div>
  );
}
