import React from "react";
import { company } from "../data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen pb-20">
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="font-heading text-6xl md:text-7xl font-extrabold mb-16 text-white drop-shadow-lg text-center">About Code Crumble</motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-16">
          <div className="glass glow-border p-10 rounded-2xl">
            <h2 className="font-heading text-3xl mb-6 text-accent">Leadership</h2>
            <ul>
              {(company.leadership || []).map(leader => (
                <li key={leader.name} className="mb-8">
                  <div className="font-bold text-light text-2xl mb-1">{leader.name}</div>
                  <div className="text-sm text-accent mb-2">{leader.role}</div>
                  {/* Optional: <div className="text-light/80 text-base">{leader.bio}</div> */}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass glow-border p-10 rounded-2xl">
            <h2 className="font-heading text-3xl mb-6 text-accent">Timeline</h2>
            <ol className="relative border-l border-accent/40 ml-4">
              {(company.timeline || []).map((item, idx) => (
                <li key={item.year} className="mb-10 ml-4">
                  <span className="absolute -left-7 flex items-center justify-center w-10 h-10 bg-accent rounded-full text-white font-bold text-xl">{item.year}</span>
                  <div className="font-bold text-light mb-2 text-lg">{item.event}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="glass glow-border p-10 rounded-2xl">
          <h2 className="font-heading text-3xl mb-6 text-accent">Our Values</h2>
          <ul className="flex flex-wrap gap-10 justify-center">
            {(company.values || []).map(val => (
              <li key={val} className="bg-glass px-8 py-4 rounded-xl text-light font-semibold text-xl shadow-sm">{val}</li>
            ))}
          </ul>
        </div>
        <div className="glass glow-border p-8 rounded-2xl">
          <h2 className="font-heading text-2xl mb-4 text-accent">Mission & Vision</h2>
          <div className="text-light/80 mb-2"><b>Mission:</b> {company.mission}</div>
          <div className="text-light/80 mb-2"><b>Vision:</b> {company.vision}</div>
        </div>
      </section>
    </main>
  );
}
