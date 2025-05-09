import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data";
import { motion } from "framer-motion";

/**
 * Modern black/white themed Services page with elegant icons and cards.
 */
export default function Services() {
  const renderServiceIcon = (serviceId) => {
    switch (serviceId) {
      case 'web-app':
        return (
          <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" stroke="white">
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
            <path d="M3 9h18" strokeWidth="2"/>
            <circle cx="7" cy="6" r="1" fill="white"/>
            <circle cx="11" cy="6" r="1" fill="white"/>
          </svg>
        );
      case 'mobile-app':
        return (
          <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" stroke="white">
            <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="2"/>
            <line x1="7" y1="6" x2="17" y2="6" strokeWidth="2"/>
            <line x1="7" y1="18" x2="17" y2="18" strokeWidth="2"/>
            <circle cx="12" cy="20" r="1" fill="white"/>
          </svg>
        );
      case 'open-source':
        return (
          <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" stroke="white">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-1.02-.01-1.86-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'hosting':
        return (
          <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" stroke="white">
            <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="2"/>
            <path d="M3 10h18" strokeWidth="2"/>
            <circle cx="7" cy="8" r="1" fill="white"/>
            <circle cx="11" cy="8" r="1" fill="white"/>
          </svg>
        );
      case 'enterprise':
        return (
          <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" stroke="white">
            <path d="M3 21h18M3 7v14M21 7v14M6 21V7M18 21V7M3 7l9-4 9 4M12 7v14M15 11h2M15 15h2M7 11h2M7 15h2" strokeWidth="2"/>
          </svg>
        );
      case 'pentest':
        return (
          <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" stroke="white">
            <path d="M12 3v3M3 12h3M21 12h-3M12 21v-3M12 12l4 4" strokeWidth="2"/>
            <circle cx="12" cy="12" r="9" strokeWidth="2"/>
            <path d="M14.5 9.5l-5 5" strokeWidth="2"/>
          </svg>
        );
      case 'digital-ai':
        return (
          <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" stroke="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" strokeWidth="2"/>
          </svg>
        );
      case 'bulk-campaigns':
        return (
          <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" stroke="white">
            <path d="M21.73 18l-8-14a2 2 0 00-3.48 0l-8 14A2 2 0 004 21h16a2 2 0 001.73-3z" strokeWidth="2"/>
            <path d="M12 9v4" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="16" r="1" fill="white"/>
          </svg>
        );
      case 'whatsapp-business':
        return (
          <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" stroke="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeWidth="2"/>
            <path d="M12 16v-4" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 8h.01" strokeWidth="2" strokeLinecap="round"/>
            <path d="M17.5 8.5c.29.3.5.71.5 1.17v4.67c0 .46-.21.87-.5 1.17-.29.3-.71.5-1.17.5h-2.67l-2 2-2-2H7.67c-.46 0-.87-.21-1.17-.5-.29-.3-.5-.71-.5-1.17V9.67c0-.46.21-.87.5-1.17.29-.3.71-.5 1.17-.5h8.67c.46 0 .87.21 1.17.5z" strokeWidth="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen pb-20 bg-[#111111]">
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h1 
          initial={{opacity:0, y:30}} 
          animate={{opacity:1, y:0}} 
          transition={{duration:0.7}} 
          className="font-heading text-6xl md:text-7xl font-extrabold mb-16 text-white text-center"
        >
          Our Services
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1A1A1A] p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between h-full"
            >
              <div className="flex flex-col items-center">
                {renderServiceIcon(service.id)}
                <h3 className="font-bold text-2xl text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>
              </div>
              <Link 
                to={`/services/${service.id}`} 
                className="bg-white text-black font-bold rounded-full px-8 py-3 text-base shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
