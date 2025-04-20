import React, { useRef, useState } from "react";
import { jobs } from "../data";
import { motion } from "framer-motion";

/**
 * LatentHQ-inspired Careers: huge heading, glass glowing cards, pill CTA.
 */
export default function Careers() {
  const [uploaded, setUploaded] = useState(false);
  const fileInput = useRef();
  function handleUpload(e) {
    e.preventDefault();
    setUploaded(true);
  }
  return (
    <section className="max-w-6xl mx-auto py-24 px-4">
      <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="font-heading text-5xl md:text-6xl font-extrabold mb-12 text-white drop-shadow-lg text-center">Careers at Code Crumble</motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="glass glow-border p-10 rounded-2xl">
          <h2 className="font-heading text-2xl mb-6 text-accent">Open Positions</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {jobs.map(job => (
              <div key={job.title} className="glass p-6 rounded-xl min-w-[200px] text-center shadow-md">
                <div className="font-bold text-light text-lg mb-1">{job.title}</div>
                <div className="text-xs text-accent mb-1">{job.location} | {job.type}</div>
                <div className="text-xs text-light/80 mb-4">{job.description}</div>
                <button className="pill-btn text-sm px-8 py-2" type="button">Apply</button>
              </div>
            ))}
          </div>
        </div>
        <div className="glass glow-border p-10 rounded-2xl flex flex-col items-center">
          <h2 className="font-heading text-2xl mb-6 text-accent">Our Culture, Benefits & Values</h2>
          <div className="text-light/80 mb-4 text-center">We believe in innovation, integrity, and global impact. Our team is diverse, passionate, and committed to excellence. Enjoy remote flexibility, global projects, and a culture of learning and growth.</div>
          <div className="text-light/70 mb-4 text-center">Benefits include flexible hours, remote work, global exposure, wellness programs, and a collaborative environment.</div>
          <div className="text-light/60 text-sm mb-6 text-center">Want to join us? Submit your resume or connect via LinkedIn.</div>
          <form className="flex flex-col gap-3 items-center w-full" onSubmit={handleUpload} aria-label="Resume submission form">
            <input
              ref={fileInput}
              type="file"
              accept=".pdf,.doc,.docx"
              className="glass p-3 rounded text-light w-full max-w-xs border border-accent/40"
              aria-label="Upload your resume"
              required
            />
            <button className="pill-btn text-base px-8 py-2 mt-2" type="submit">Upload Resume</button>
            {uploaded && <div className="text-accent text-sm mt-2">Resume uploaded! We'll be in touch.</div>}
          </form>
          <a href="https://www.linkedin.com/company/codecrumble" target="_blank" rel="noopener noreferrer" className="pill-btn text-base px-8 py-2 mt-6 inline-block" aria-label="Connect on LinkedIn">Connect on LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
