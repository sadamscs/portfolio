import { useState } from "react";
import { useEffect } from 'react';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

import "./App.css";

let colorIndex = 0;
let lastTrailTime = 0;

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const cursorDot = document.getElementById('cursor-dot');

    if (cursorDot) {
      const handleMouseMove = (e: MouseEvent) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';

        const now = Date.now();
        if (now - lastTrailTime > 0.1) {
          const trail = document.createElement('div');
          const whiteTrail = document.createElement('div');
          trail.className = 'cursor-trail';
          whiteTrail.className = 'cursor-trail-white';
          trail.style.left = e.clientX + 'px';
          trail.style.top = e.clientY + 'px';
          whiteTrail.style.left = e.clientX + 'px';
          whiteTrail.style.top = e.clientY + 'px';
          trail.style.backgroundColor = '#4548FF';
          whiteTrail.style.backgroundColor = 'white';
          colorIndex++;
          document.body.appendChild(trail);
          document.body.appendChild(whiteTrail);
          lastTrailTime = now;

          setTimeout(() => trail.remove(), 300);
          setTimeout(() => whiteTrail.remove(), 300);
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="app">
      <div id="cursor-dot"></div>
      <Navbar page={page} setPage={setPage} />

      <main>
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "projects" && <Projects />}
        {page === "experience" && <Experience />}
      </main>

      <Footer />
    </div>
  );
}

export default App;