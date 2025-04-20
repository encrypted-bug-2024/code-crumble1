import React, { useState } from "react";
import { company } from "../data";
import { motion } from "framer-motion";

/**
 * LatentHQ-inspired Contact: huge heading, glass glowing cards, whitespace.
 */
export default function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <section className="max-w-6xl mx-auto py-24 px-4">
      <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="font-heading text-5xl md:text-6xl font-extrabold mb-12 text-white drop-shadow-lg text-center">Contact Us</motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="glass glow-border p-10 rounded-2xl">
          <h2 className="font-heading text-2xl mb-6 text-accent">Our Offices</h2>
          <div className="flex flex-wrap gap-8 mb-8 justify-center">
            {company.offices.map(office => (
              <div key={office.location} className="glass p-6 rounded-xl min-w-[160px] text-center shadow-md">
                <div className="font-bold text-light text-lg mb-1">{office.location}</div>
                <div className="text-xs text-accent mb-2">Since {office.since}</div>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 400 180" width="100%" height="120" aria-label="World map with office locations" className="mb-2">
            <rect width="400" height="180" rx="24" fill="#18192a"/>
            <ellipse cx="200" cy="90" rx="170" ry="65" fill="#5f5fff" opacity="0.08"/>
            {/* India */}
            <circle cx="260" cy="110" r="10" fill="#a259ff"/>
            <text x="275" y="115" fontSize="14" fill="#fff">India</text>
            {/* Kenya */}
            <circle cx="170" cy="125" r="10" fill="#ff5fcb"/>
            <text x="185" y="130" fontSize="14" fill="#fff">Kenya</text>
            {/* UK */}
            <circle cx="80" cy="65" r="10" fill="#5f5fff"/>
            <text x="95" y="70" fontSize="14" fill="#fff">UK</text>
          </svg>
        </div>
        <div className="glass glow-border p-10 rounded-2xl flex flex-col items-center">
          <h2 className="font-heading text-2xl mb-6 text-accent">Contact Form</h2>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit} aria-label="Contact form">
            <input type="text" placeholder="Name" className="glass p-3 rounded text-light w-full border border-accent/40" required aria-label="Name" />
            <input type="email" placeholder="Email" className="glass p-3 rounded text-light w-full border border-accent/40" required aria-label="Email" />
            <input type="text" placeholder="Subject" className="glass p-3 rounded text-light w-full border border-accent/40" required aria-label="Subject" />
            <textarea placeholder="Message" className="glass p-3 rounded text-light w-full border border-accent/40" required aria-label="Message" rows={4} />
            <button className="pill-btn text-base px-8 py-2 mt-2" type="submit">Send Message</button>
            {sent && <div className="text-accent text-sm mt-2">Thank you! We'll be in touch soon.</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
