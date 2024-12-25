'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshDistortMaterial, Sphere, useTexture } from '@react-three/drei'

function GlowingSphere({ scale, color, speed, distort, opacity }) {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.y = time * speed
    meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.2
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale}>
      <MeshDistortMaterial
        color={color}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.1}
        roughness={0.2}
        distort={distort}
        speed={2}
        transparent
        opacity={opacity}
      />
    </Sphere>
  )
}

export function RotatingObject() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <Environment preset="studio" />
        
        {/* Outer layer - smaller, more transparent */}
        <GlowingSphere 
          scale={1.2} 
          color="#1A0B2E"
          speed={0.15}
          distort={0.5}
          opacity={0.4}
        />
        
        {/* Middle layer */}
        <GlowingSphere 
          scale={1.1} 
          color="#2A1B3E"
          speed={0.2}
          distort={0.4}
          opacity={0.6}
        />
        
        {/* Inner core - smaller, more solid */}
        <GlowingSphere 
          scale={1} 
          color="#3A2B4E"
          speed={0.25}
          distort={0.3}
          opacity={0.8}
        />

        {/* Ambient light for overall illumination */}
        <ambientLight intensity={0.2} />
        
        {/* Directional light for subtle highlights */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
          color="#E0B0FF"
        />
      </Canvas>
    </div>
  )
}
