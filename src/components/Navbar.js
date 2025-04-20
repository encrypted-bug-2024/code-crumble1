import React from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * LatentHQ-inspired Navbar: sticky, glass, minimal links, pill CTA.
 */
export default function Navbar() {
  return (
    <nav className="w-full px-6 py-2 flex items-center justify-between bg-glass/90 backdrop-blur-md shadow-md sticky top-0 z-50 min-h-[64px] border-b border-[#23234d]/40" aria-label="Main navigation">
      <Link to="/" className="flex items-center gap-2 font-heading text-2xl text-accent font-extrabold tracking-tight drop-shadow-lg" aria-label="Code Crumble Home">
        <svg width="32" height="32" viewBox="0 0 64 64" className="mr-2" aria-hidden="true"><circle cx="32" cy="32" r="28" fill="#23234d"/><circle cx="32" cy="32" r="16" fill="#5f5fff" opacity="0.18"/><circle cx="32" cy="32" r="10" fill="#ff5fcb" opacity="0.22"/></svg>
        <span className="hidden sm:inline">Code Crumble</span>
      </Link>
      <div className="flex gap-2 items-center">
        <NavLink to="/about" className={({isActive}) => isActive ? "text-accent font-bold" : "text-light/80 hover:text-accent transition px-3 py-2 rounded-lg"}>About</NavLink>
        <NavLink to="/services" className={({isActive}) => isActive ? "text-accent font-bold" : "text-light/80 hover:text-accent transition px-3 py-2 rounded-lg"}>Services</NavLink>
        <NavLink to="/work" className={({isActive}) => isActive ? "text-accent font-bold" : "text-light/80 hover:text-accent transition px-3 py-2 rounded-lg"}>Work</NavLink>
        <NavLink to="/careers" className={({isActive}) => isActive ? "text-accent font-bold" : "text-light/80 hover:text-accent transition px-3 py-2 rounded-lg"}>Careers</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "text-accent font-bold" : "text-light/80 hover:text-accent transition px-3 py-2 rounded-lg"}>Contact</NavLink>
        <a href="/contact" className="pill-btn ml-4 text-base shadow-lg" aria-label="Contact CTA">Let's Talk</a>
        <button
          aria-label="Toggle dark mode"
          className="ml-4 p-2 rounded-full bg-glass border border-accent/40 hover:bg-accent/20 transition focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
          }}
        >
          {/* Sun/Moon icon toggle */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
