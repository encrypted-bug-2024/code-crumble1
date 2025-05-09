import React from "react";
import { Link } from "react-router-dom";
import { services, projects } from "../data";
import { motion } from "framer-motion";
import { heroImages, clientImages, patterns } from "../assets/images";
import TechAnimation from "../components/TechAnimation";

/**
 * LatentHQ-inspired Home page: huge hero, animated gradient, pill CTA, glass cards.
 */
export default function Home() {
  return (
    <div className="bg-[#111111]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${patterns.grid})`, opacity: 0.1 }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#111111]"></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 space-y-8"
          >
            <h1 className="font-heading text-6xl md:text-8xl font-black tracking-tight text-white">
              We Build<br />
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Digital Future</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl">
              Code Crumble crafts exceptional digital experiences through innovative software solutions. 
              <span className="block mt-2 text-white font-medium">Web • Mobile • AI • Cloud • Security</span>
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="/contact" 
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
              <a 
                href="https://work.codecrumble.in" 
                className="group px-8 py-4 border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              >
                View Portfolio
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex-1 relative"
          >
            <TechAnimation />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-black text-white mb-4">Our Services</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Transforming ideas into powerful digital solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-[#1A1A1A] p-8 rounded-2xl overflow-hidden h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 text-white">
                    {service.id === 'web-app' && (
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                        <path d="M3 9h18" strokeWidth="2"/>
                        <circle cx="7" cy="6" r="1" fill="currentColor"/>
                        <circle cx="11" cy="6" r="1" fill="currentColor"/>
                      </svg>
                    )}
                    {service.id === 'mobile-app' && (
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="2"/>
                        <line x1="7" y1="6" x2="17" y2="6" strokeWidth="2"/>
                        <line x1="7" y1="18" x2="17" y2="18" strokeWidth="2"/>
                        <circle cx="12" cy="20" r="1" fill="currentColor"/>
                      </svg>
                    )}
                    {service.id === 'open-source' && (
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-1.02-.01-1.86-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{service.desc}</p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-white font-medium group-hover:text-gray-200 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/services" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-4 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-black text-white mb-4">Technologies We Work With</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Our tech stack powers innovative solutions</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'AWS', icon: 'M8 9l5 3v7l-5-3V9zm8 0l5 3v7l-5-3V9zm-8-6l5 3v7l-5-3V3zm8 0l5 3v7l-5-3V3z' },
              { name: 'Docker', icon: 'M13 3h-2v2h2V3zm4 0h-2v2h2V3zm-8 0H7v2h2V3zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 0h-2v2h2V7zm-8 0H7v2h2V7zm8 4h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 0H7v2h2v-2zM5 11H3v2h2v-2z' },
              { name: 'Node.js', icon: 'M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.487-.169.582-.207 1.101-.503.056-.027.129-.016.185.015l1.873 1.114c.074.036.166.036.228 0l7.316-4.237c.074-.036.119-.11.119-.184V7.777c0-.083-.045-.147-.119-.184l-7.316-4.219c-.074-.036-.166-.036-.228 0L4.552 7.593c-.083.036-.119.11-.119.184v8.457c0 .073.045.147.119.184l2 1.157c1.083.542 1.744-.095 1.744-.737V8.514c0-.119.092-.21.21-.21h.927c.11 0 .21.091.21.21v8.323c0 1.448-.788 2.276-2.164 2.276-.422 0-.752 0-1.688-.458l-1.918-1.103c-.478-.276-.772-.789-.772-1.34V7.777c0-.55.294-1.064.772-1.339l7.316-4.237c.467-.264 1.084-.264 1.541 0l7.316 4.237c.478.275.772.789.772 1.339v8.457c0 .55-.294 1.064-.772 1.34l-7.316 4.236c-.24.128-.497.202-.772.202zm2.218-5.867c-3.205 0-3.876-.147-3.876-1.339 0-.119.092-.21.21-.21h.946c.101 0 .191.074.201.174.147.971.568 1.449 2.519 1.449 1.546 0 2.203-.349 2.203-1.175 0-.477-.183-.825-2.595-1.064-2.012-.183-3.255-.643-3.255-2.276 0-1.503 1.267-2.397 3.392-2.397 2.386 0 3.564.825 3.712 2.611.009.056-.009.11-.045.156-.037.037-.092.064-.147.064h-.946c-.092 0-.174-.064-.192-.156-.211-1.003-.789-1.321-2.382-1.321-1.753 0-1.955.61-1.955 1.066 0 .55.239.725 2.514.998 2.257.275 3.336.643 3.336 2.333 0 1.62-1.349 2.515-3.712 2.515z' },
              { name: 'Python', icon: 'M12 3c-4.418 0-8 1.343-8 3v3c0 .852.384 1.634 1.031 2.281C5.375 11.875 6 12 7 12h2v3H7c-1.657 0-3 1.343-3 3v3h3c1.657 0 3-1.343 3-3v-3h4v3c0 1.657 1.343 3 3 3h3v-3c0-1.657-1.343-3-3-3h-2v-3h2c1 0 1.625-.125 1.969-.719C19.616 10.634 20 9.852 20 9V6c0-1.657-3.582-3-8-3zm0 2c1.657 0 3 1.343 3 3S13.657 11 12 11 9 9.657 9 8s1.343-3 3-3z' },
              { name: 'Angular', icon: 'M12 2L3 7l1.63 11.27L12 22l7.36-3.73L21 7l-9-5zm0 4.21L15.9 17H13l-1-2H8l2.5-6.29L12 6.21zm0 .42L9.5 15h5L12 6.63z' },
              { name: 'React', icon: 'M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85s-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z' },
              { name: 'Go', icon: 'M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z' },
              { name: 'Rust', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' },
              { name: 'Blockchain', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z' },
              { name: 'AI/ML', icon: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z' },
              { name: 'iOS', icon: 'M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 14.6 3.51 6.12 9.05 5.81c1.74-.04 2.9 1.14 3.89 1.14 1.01 0 2.37-1.16 4.24-.96 1.4.15 2.6.64 3.44 1.44-3.1 1.98-2.29 6.13.8 7.55-.8 2.4-2.19 4.73-4.37 5.3M12.03 5.32c-.13-2.46 1.88-4.82 4.53-4.82.31 2.47-2.25 4.86-4.53 4.82z' },
              { name: 'Android', icon: 'M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-3 p-4 bg-[#1A1A1A] rounded-xl hover:bg-[#222222] transition-colors"
              >
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d={tech.icon} />
                </svg>
                <span className="text-white font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Solutions Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-black text-white mb-4">Open Source Solutions</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Transforming powerful open source platforms into tailored business solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-[#1A1A1A] p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Open Source?</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cost-effective solutions with enterprise-grade capabilities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible customization to match your exact needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Active community support and continuous improvements</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-[#1A1A1A] p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Expertise</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Custom development and integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Deployment and configuration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Performance optimization and scaling</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div>
              <Link
                to="/services/open-source"
                className="inline-block bg-white text-[#0A0A0A] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Open Source Solutions
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-black text-white mb-4">Client Stories</h2>
            <p className="text-gray-400 text-xl">What our clients say about working with us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="bg-[#1A1A1A] p-8 rounded-2xl"
            >
              <p className="text-xl text-gray-300 mb-8">"Code Crumble delivered our SaaS platform on time and exceeded expectations. Their design and engineering skills are top-notch!"</p>
              <div className="flex items-center gap-4">
                <img src={clientImages.client1} alt="Alex M." className="w-14 h-14 rounded-full border-2 border-white"/>
                <div>
                  <div className="font-bold text-white">Sahil Singh</div>
                  <div className="text-gray-400">CEO, Transpoto </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-[#1A1A1A] p-8 rounded-2xl"
            >
              <p className="text-xl text-gray-300 mb-8">"Professional, responsive, and creative. Highly recommend Code Crumble for any digital project!"</p>
              <div className="flex items-center gap-4">
                <img src={clientImages.client2} alt="Priya S." className="w-14 h-14 rounded-full border-2 border-white"/>
                <div>
                  <div className="font-bold text-white">Shivangi Jain</div>
                  <div className="text-gray-400">Director, TrackAlways</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${patterns.grid})`, opacity: 0.05 }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-black text-white">Ready to Transform<br />Your Business?</h2>
            <p className="text-xl text-gray-400">Let's build something extraordinary together</p>
            <a 
              href="/contact" 
              className="inline-block px-12 py-5 bg-white text-black font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
