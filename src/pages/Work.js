import React from "react";
import { projects } from "../data";
import { motion } from "framer-motion";

/**
 * LatentHQ-inspired Work: huge heading, glass glowing grid, whitespace.
 */
export default function Work() {
  return (
    <main className="min-h-screen pb-20">
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="font-heading text-6xl md:text-7xl font-extrabold mb-16 text-white drop-shadow-lg text-center">Our Work</motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {projects.map(project => (
            <motion.a key={project.name} href={project.link} target="_blank" rel="noopener noreferrer" whileHover={{scale:1.04}} className="glass glow-border p-10 rounded-2xl text-center shadow-md block transition-all">
              <img src={project.logo} alt={project.name + ' logo'} className="mx-auto mb-6 h-14" />
              <div className="font-bold text-2xl text-light mb-3">{project.name}</div>
              <div className="text-light/80 mb-3">{project.desc}</div>
              <span className="pill-btn text-sm px-8 py-2 mt-3 inline-block">View Project</span>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
