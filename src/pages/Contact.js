import React, { useState } from "react";
import { company } from "../data";
import { motion } from "framer-motion";

/**
 * Modern black/white themed Contact page with elegant forms and cards.
 */
export default function Contact() {
  const [sent, setSent] = useState(false);
  
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#111111]"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            initial={{opacity:0, y:30}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.7}} 
            className="text-center mb-16"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-6 text-white">Get in Touch</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{opacity:0, x:-30}} 
              animate={{opacity:1, x:0}} 
              transition={{delay:0.2, duration:0.7}} 
              className="bg-[#1A1A1A] p-8 md:p-12 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-[#222222] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-[#222222] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full bg-[#222222] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full bg-[#222222] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold rounded-lg px-8 py-4 hover:bg-gray-100 transition-all duration-300"
                >
                  Send Message
                </button>
                {sent && (
                  <motion.p 
                    initial={{opacity:0, y:10}} 
                    animate={{opacity:1, y:0}} 
                    className="text-green-400 text-center mt-4"
                  >
                    Thank you! We'll be in touch soon.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Offices Section */}
            <motion.div 
              initial={{opacity:0, x:30}} 
              animate={{opacity:1, x:0}} 
              transition={{delay:0.3, duration:0.7}} 
              className="space-y-8"
            >
              <div className="bg-[#1A1A1A] p-8 md:p-12 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-8">Our Global Offices</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {company.offices.map((office) => (
                    <div 
                      key={office.location}
                      className="group bg-[#222222] p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{office.location}</h3>
                          <p className="text-gray-400">Established {office.since}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1A1A1A] p-8 md:p-12 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-8">Connect With Us</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <a href="mailto:contact@codecrumble.com" className="text-gray-400 hover:text-white transition-colors">
                        contact@codecrumble.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
