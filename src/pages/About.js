import React from "react";
import { company } from "../data";
import { motion } from "framer-motion";
import { heroImages, teamImages, patterns } from "../assets/images";
import AboutAnimation from "../components/AboutAnimation";

export default function About() {
  return (
    <main className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${patterns.grid})`, opacity: 0.1 }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#111111]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <motion.div 
              initial={{opacity:0, x:-30}} 
              animate={{opacity:1, x:0}} 
              transition={{duration:0.7}} 
              className="flex-1 space-y-8"
            >
              <h1 className="font-heading text-6xl md:text-7xl font-black tracking-tight text-white">
                Building<br/>
                <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Digital Excellence</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl">
                Code Crumble empowers brands with world-class digital solutions, transforming ideas into impactful products across continents.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-300"
              >
                Let's Talk
              </a>
            </motion.div>
            
            <motion.div 
              initial={{opacity:0, scale:0.9}} 
              animate={{opacity:1, scale:1}} 
              transition={{delay:0.2, duration:0.7}} 
              className="flex-1 relative"
            >
              <AboutAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}} 
              transition={{delay:0.1, duration:0.5}} 
              className="text-center"
            >
              <span className="block text-5xl font-black text-white mb-2">3</span>
              <span className="text-gray-400">Continents</span>
            </motion.div>
            <motion.div 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}} 
              transition={{delay:0.2, duration:0.5}} 
              className="text-center"
            >
              <span className="block text-5xl font-black text-white mb-2">2018</span>
              <span className="text-gray-400">Founded</span>
            </motion.div>
            <motion.div 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}} 
              transition={{delay:0.3, duration:0.5}} 
              className="text-center"
            >
              <span className="block text-5xl font-black text-white mb-2">50+</span>
              <span className="text-gray-400">Team Members</span>
            </motion.div>
            <motion.div 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}} 
              transition={{delay:0.4, duration:0.5}} 
              className="text-center"
            >
              <span className="block text-5xl font-black text-white mb-2">100+</span>
              <span className="text-gray-400">Projects</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership & Timeline Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <motion.h2 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                className="font-heading text-4xl font-black text-white"
              >
                Leadership
              </motion.h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {(company.leadership || []).slice(0, 6).map((leader, index) => (
                  <motion.div 
                    key={leader.name}
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay: index * 0.1, duration:0.5}}
                    className="group"
                  >
                    <div className="relative mb-4 aspect-square">
                      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-300 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      <img 
                        src={[teamImages.leader1, teamImages.leader2, teamImages.leader3][index % 3]} 
                        alt={leader.name} 
                        className="relative z-10 w-full h-full rounded-full object-cover border-2 border-white/20 group-hover:border-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="font-medium text-white text-center">{leader.name}</h3>
                    <p className="text-sm text-gray-400 text-center">{leader.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <motion.h2 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                className="font-heading text-4xl font-black text-white"
              >
                Journey
              </motion.h2>
              <div className="space-y-8">
                {(company.timeline || []).map((item, idx) => (
                  <motion.div 
                    key={item.year}
                    initial={{opacity:0, x:-20}}
                    animate={{opacity:1, x:0}}
                    transition={{delay: idx * 0.1, duration:0.5}}
                    className="flex items-start gap-6"
                  >
                    <span className="flex-shrink-0 w-16 h-16 rounded-full bg-white text-black font-bold text-xl flex items-center justify-center">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="text-white font-medium text-lg">{item.event}</h3>
                      <p className="text-gray-400 mt-1">
                        {company.offices.find(o => o.since === parseInt(item.year))?.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Culture Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <motion.h2 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                className="font-heading text-4xl font-black text-white"
              >
                Our Values
              </motion.h2>
              <div className="grid grid-cols-2 gap-4">
                {(company.values || []).map((val, idx) => (
                  <motion.div
                    key={val}
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay: idx * 0.1, duration:0.5}}
                    className="group p-6 bg-[#1A1A1A] rounded-2xl hover:bg-[#222222] transition-colors duration-300"
                  >
                    <h3 className="text-white font-medium text-lg mb-2">{val}</h3>
                    <p className="text-gray-400 text-sm">Driving excellence through our core principles</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <motion.h2 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                className="font-heading text-4xl font-black text-white"
              >
                Our Culture
              </motion.h2>
              <div className="space-y-6">
                <motion.div 
                  initial={{opacity:0, y:20}}
                  animate={{opacity:1, y:0}}
                  transition={{delay:0.1, duration:0.5}}
                  className="p-6 bg-[#1A1A1A] rounded-2xl"
                >
                  <h3 className="text-white font-medium mb-2">Global Mindset</h3>
                  <p className="text-gray-400">Embracing diversity and fostering innovation across borders</p>
                </motion.div>
                <motion.div 
                  initial={{opacity:0, y:20}}
                  animate={{opacity:1, y:0}}
                  transition={{delay:0.2, duration:0.5}}
                  className="p-6 bg-[#1A1A1A] rounded-2xl"
                >
                  <h3 className="text-white font-medium mb-2">Continuous Learning</h3>
                  <p className="text-gray-400">Staying ahead through constant growth and adaptation</p>
                </motion.div>
                <motion.div 
                  initial={{opacity:0, y:20}}
                  animate={{opacity:1, y:0}}
                  transition={{delay:0.3, duration:0.5}}
                  className="p-6 bg-[#1A1A1A] rounded-2xl"
                >
                  <h3 className="text-white font-medium mb-2">Client Success</h3>
                  <p className="text-gray-400">Dedicated to delivering exceptional results and value</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${patterns.grid})`, opacity: 0.05 }}></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.7}}
              className="space-y-6"
            >
              <h2 className="font-heading text-4xl font-black text-white">Mission</h2>
              <p className="text-xl text-gray-400">{company.mission}</p>
            </motion.div>
            <motion.div 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.2, duration:0.7}}
              className="space-y-6"
            >
              <h2 className="font-heading text-4xl font-black text-white">Vision</h2>
              <p className="text-xl text-gray-400">{company.vision}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
