'use client'

import { useEffect, useRef, useState } from 'react'

export function SparkleEffect() {
  const [particles, setParticles] = useState([])
  const requestRef = useRef()
  const previousTimeRef = useRef()

  const createParticle = () => {
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 0.5 + 0.2
    return {
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      velocity: {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed
      },
      acceleration: {
        x: 0,
        y: 0
      },
      hue: Math.random() * 30 - 15,
      lifetime: 0,
      maxLifetime: Math.random() * 3000 + 2000
    }
  }

  const animate = (time) => {
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = time
    }
    const deltaTime = time - previousTimeRef.current
    previousTimeRef.current = time

    setParticles(prevParticles => {
      // Update existing particles
      const updatedParticles = prevParticles.map(particle => {
        // Add some perlin noise-like movement
        const noise = {
          x: Math.sin(time * 0.001 + particle.id) * 0.02,
          y: Math.cos(time * 0.001 + particle.id) * 0.02
        }

        const newParticle = {
          ...particle,
          lifetime: particle.lifetime + deltaTime,
          velocity: {
            x: particle.velocity.x + (particle.acceleration.x + noise.x) * deltaTime * 0.01,
            y: particle.velocity.y + (particle.acceleration.y + noise.y) * deltaTime * 0.01
          },
          x: particle.x + particle.velocity.x,
          y: particle.y + particle.velocity.y,
          opacity: Math.max(
            0,
            particle.opacity * (1 - particle.lifetime / particle.maxLifetime)
          )
        }

        // Add subtle attraction to center
        const centerForce = 0.00001 * deltaTime
        newParticle.acceleration = {
          x: (50 - newParticle.x) * centerForce,
          y: (50 - newParticle.y) * centerForce
        }

        return newParticle
      })

      // Remove dead particles and add new ones
      const aliveParticles = updatedParticles.filter(
        p => p.lifetime < p.maxLifetime && p.opacity > 0.01
      )
      
      while (aliveParticles.length < 30) {
        aliveParticles.push(createParticle())
      }

      return aliveParticles
    })

    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    // Initial particles
    setParticles(Array.from({ length: 30 }, createParticle))

    // Start animation loop
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full will-change-transform"
          style={{
            transform: `translate(${particle.x}vw, ${particle.y}vh)`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            background: `radial-gradient(circle at center, 
              hsl(280, 100%, 90%), 
              hsl(${280 + particle.hue}, 100%, 70%)
            )`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(280, 100%, 70%)`,
            transition: 'transform 0.05s linear, opacity 0.2s ease-out',
          }}
        />
      ))}
    </div>
  )
}

