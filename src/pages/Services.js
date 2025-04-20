import React from "react";
import { services } from "../data";
import { motion } from "framer-motion";

/**
 * LatentHQ-inspired Services: huge heading, glass glowing grid, pill CTA.
 */
export default function Services() {
  return (
    <main className="min-h-screen pb-20">
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="font-heading text-6xl md:text-7xl font-extrabold mb-16 text-white drop-shadow-lg text-center">Our Services</motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {services.map(service => (
            <motion.div key={service.id} whileHover={{scale:1.04}} className="glass glow-border p-10 rounded-2xl text-center shadow-md transition-all">
              <div className="font-bold text-2xl text-light mb-3">{service.name}</div>
              <div className="text-light/80 mb-6">{service.desc}</div>
              <a href={`/services/${service.id}`} className="pill-btn text-base px-10 py-3">Learn More</a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
