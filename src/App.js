import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './index.css';
import AdditionalSkills from './Components/AdditionalSkills';

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ 
      position: 'relative', 
      overflow: 'hidden', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      {/* Animated Background */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a0a1a, #000033, #0a0a1a, #000033)',
          zIndex: -1,
        }}
        animate={{
          background: [
            'linear-gradient(135deg, #0a0a1a, #000033, #0a0a1a, #000033)',
            'linear-gradient(135deg, #000033, #0a0a1a, #000033, #0a0a1a)',
            'linear-gradient(135deg, #0a0a1a, #000033, #0a0a1a, #000033)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />

      {/* Moving Shapes */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, #00ffff, transparent)',
          borderRadius: '50%',
        }}
        animate={{
          x: ['0%', '100%', '0%'],
          y: ['0%', '-50%', '0%'],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '70%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, #ff0099, transparent)',
          borderRadius: '50%',
        }}
        animate={{
          x: ['0%', '100%', '0%'],
          y: ['0%', '50%', '0%'],
          scale: [1, 0.5, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />

      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        {/* Home Section */}
        <div ref={homeRef}>
          <Home />
        </div>  

        {/* About Section */}
        <div ref={aboutRef}>
          <About />
        </div>

        {/* Projects Section */}
        <div ref={projectsRef}>
          <Projects />
          <AdditionalSkills />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;