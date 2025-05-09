import React from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#111111]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="font-heading text-7xl font-extrabold mb-8 text-white">404</h1>
        <p className="text-xl text-gray-400 mb-6">Sorry, the page you are looking for does not exist.</p>
        <a 
          href="/" 
          className="bg-white text-black font-bold rounded-full px-10 py-3 text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Go Home
        </a>
      </motion.div>
    </main>
  );
}
