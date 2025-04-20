import React from "react";
import { services, projects } from "../data";
import { motion } from "framer-motion";

/**
 * LatentHQ-inspired Home page: huge hero, animated gradient, pill CTA, glass cards.
 */
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-24 text-center animated-gradient-bg overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg"
        >
          Premium Software. <br /> Global Impact.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xl md:text-2xl text-light/90 max-w-2xl mx-auto mb-10"
        >
          Code Crumble builds world-class digital products for ambitious brands. <span className="text-accent font-bold">Web, Mobile, AI, Cloud, Security.</span>
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pill-btn text-lg shadow-xl mb-6"
          aria-label="Start your project"
        >
          Start Your Project
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex gap-4 justify-center flex-wrap mt-10"
        >
          {services.slice(0, 4).map(s => (
            <a
              key={s.id}
              href={`/services/${s.id}`}
              className="glass px-6 py-4 rounded-2xl font-semibold text-accent hover:bg-accent/30 transition shadow-lg text-lg min-w-[180px]"
              aria-label={`Learn more about ${s.name}`}
            >
              {s.name}
            </a>
          ))}
        </motion.div>
        {/* Glow effect background blob */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 w-[480px] h-[320px] rounded-full bg-accent blur-3xl opacity-30 animate-pulse"></div>
      </section>
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-14 text-accent text-center">Our Services</h2>
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
    </div>
  );
}
