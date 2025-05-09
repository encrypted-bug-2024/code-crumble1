import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TechAnimation = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const numParticles = 800;
    const centerX = 150;
    const centerY = 150;
    const radius = 145;

    const newParticles = Array.from({ length: numParticles }, () => {
      let x, y, distanceFromCenter;
      do {
        const angle = Math.random() * Math.PI * 2;
        const r = Math.sqrt(Math.random()) * radius;
        x = centerX + Math.cos(angle) * r;
        y = centerY + Math.sin(angle) * r;
        distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      } while (distanceFromCenter > radius);

      return {
        x,
        y,
        size: Math.random() * 0.8 + 0.4,
        radius: Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)),
        angle: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.3,
      };
    });
    
    setParticles(newParticles);

    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          const newAngle = particle.angle + (particle.speed * 0.02);
          const newX = 150 + particle.radius * Math.cos(newAngle);
          const newY = 150 + particle.radius * Math.sin(newAngle);

          return {
            ...particle,
            x: newX,
            y: newY,
            angle: newAngle
          };
        })
      );
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20 rounded-full"></div>
      <svg className="relative z-10 w-full h-full" viewBox="0 0 300 300">
        {particles.map((particle, i) => (
          <circle
            key={`particle-${i}`}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="white"
            opacity={0.8}
          />
        ))}
      </svg>
    </div>
  );
};

export default TechAnimation; 