import React from 'react';
import { motion } from 'framer-motion';

const AboutAnimation = () => {
  const orbitRadius = 120;
  const centerX = 160;
  const centerY = 160;
  
  // Calculate positions for orbiting elements
  const getOrbitPosition = (angle, radius = orbitRadius) => ({
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle)
  });

  // Create orbit paths
  const orbits = Array.from({ length: 3 }, (_, i) => ({
    radius: orbitRadius - i * 30,
    speed: 20 - i * 5
  }));

  return (
    <div className="relative w-full aspect-square max-w-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-500/10 rounded-full blur-3xl opacity-20"></div>
      <svg className="relative z-10 w-full h-full" viewBox="0 0 320 320">
        {/* Orbit paths */}
        {orbits.map((orbit, i) => (
          <motion.circle
            key={`orbit-${i}`}
            cx={centerX}
            cy={centerY}
            r={orbit.radius}
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}

        {/* Orbiting elements */}
        {orbits.map((orbit, i) => (
          <motion.g key={`orbital-group-${i}`}>
            {Array.from({ length: 3 }, (_, j) => (
              <motion.circle
                key={`orbital-${i}-${j}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  cx: Array.from({ length: 60 }, (_, k) => 
                    getOrbitPosition((k / 30) * Math.PI + (j * 2 * Math.PI / 3), orbit.radius).x
                  ),
                  cy: Array.from({ length: 60 }, (_, k) => 
                    getOrbitPosition((k / 30) * Math.PI + (j * 2 * Math.PI / 3), orbit.radius).y
                  ),
                }}
                transition={{
                  duration: orbit.speed,
                  repeat: Infinity,
                  ease: "linear"
                }}
                r="3"
                fill="white"
              />
            ))}
          </motion.g>
        ))}

        {/* Central element */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <circle
            cx={centerX}
            cy={centerY}
            r="20"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r="10"
            fill="white"
            opacity="0.5"
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default AboutAnimation; 