// ./Components/AdditionalSkills.js
import React from 'react';
import { motion } from 'framer-motion';

const AdditionalSkills = () => {
  // Animation variants for the list items
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div style={{ padding: '50px 5%', color: 'white', textAlign: 'center' }}>
      {/* Title */}
      <motion.h1
        className="neon-text"
        style={{ fontSize: '2.5rem', marginBottom: '40px' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Additional Skills
      </motion.h1>

      {/* Description */}
      <motion.p
        style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#fff' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Here are some of my additional skills:
      </motion.p>

      {/* Skills List */}
      <motion.ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(25px, 1fr))',
          gap: '30px',
        }}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Skill Items */}
        {['🎬 Video Editing', '📸 Photography', '🎨 Poster Designing', '📹 Videography'].map(
          (skill, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              transition={{ duration: 0.5 }}
              style={{
                background: '#0a0a1a',
                borderRadius: '10px',
                padding: '20px',
                border: '2px solid #00ffff',
                boxShadow: '0 0 20px #00ffff',
                fontSize: '1.2rem',
                color: '#00ffff',
                textShadow: '0 0 5px #00ffff',
              }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.li>
          )
        )}
      </motion.ul>
    </div>
  );
};

export default AdditionalSkills;