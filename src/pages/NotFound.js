import React from "react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-main">
      <h1 className="font-heading text-7xl font-extrabold mb-8 text-white drop-shadow-lg text-center">404</h1>
      <p className="text-xl text-light/80 mb-6 text-center">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="pill-btn text-lg px-10 py-3">Go Home</a>
    </main>
  );
}
