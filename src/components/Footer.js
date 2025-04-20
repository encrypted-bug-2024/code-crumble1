import React from "react";
import { company } from "../data";

/**
 * Footer with company info and office locations.
 */
export default function Footer() {
  return (
    <footer className="w-full bg-glass py-6 px-4 mt-8 text-center text-light/80 text-sm">
      <div className="mb-2 font-heading text-accent">{company.name} &copy; {new Date().getFullYear()}</div>
      <div className="mb-1">Global Offices: {company.offices.map(o => o.location).join(", ")}</div>
      <div>Empowering businesses worldwide with innovative digital solutions.</div>
    </footer>
  );
}
