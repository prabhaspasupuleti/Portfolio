import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  // Hacker-themed "Hello World" typing animation
  const helloWorldText = "Hello World";
  const typingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.3, // Delay between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      style={{
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '0 5%',
      }}
    >
      {/* Left Side - Your Details */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'left' }}
      >
        <h1 className="neon-text" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
          Hi, I'm <span style={{ color: '#00ffff' }}>Prabhas</span>
        </h1>
        <p className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
          A passionate <span style={{ color: '#ff0099' }}>Frontend Developer</span> specializing in React, JavaScript, and modern web technologies.
        </p>
       
      </motion.div>

      {/* Right Side - Hacker-themed "Hello World" Animation */}
      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '3rem',
          fontFamily: 'monospace',
          color: '#00ff00', // Green text for hacker theme
          textShadow: '0 0 5px #00ff00', // Neon glow
        }}
      >
        <motion.div
          variants={typingVariants}
          initial="hidden"
          animate="visible"
        >
          {helloWorldText.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;