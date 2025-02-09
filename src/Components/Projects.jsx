import React from 'react';
import { motion } from 'framer-motion';

function ProjectsSection() {
  // Sample projects data
  const projects = [
    {
      title: 'Project 1',
      description: 'Designed Responsive UI for a Music Recomendation website ',
      demoLink: 'https://musicplayerwithai.netlify.app/',
    },
    {
      title: 'Project 2',
      description: 'Developed Frontend for a basic Tourism Explorer ',
      demoLink: 'https://findurspot.netlify.app/',
    },
    {
      title: 'Project 3',
      description: 'A portfolio website with a cyberpunk theme.',
      demoLink: '#',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" style={{ padding: '50px 5%', textAlign: 'center' }}>
      <h2 className="neon-text" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
        Projects
      </h2>

      {/* Projects Grid */}
      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            style={{
              background: '#0a0a1a',
              borderRadius: '10px',
              padding: '20px',
              border: '2px solid #00ffff',
              boxShadow: '0 0 20px #00ffff',
            }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Project Title */}
            <h3 className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
              {project.title}
            </h3>

            {/* Project Description */}
            <p style={{ fontSize: '1rem', marginBottom: '20px', color: '#fff' }}>
              {project.description}
            </p>

            {/* Project Links - Only Live Demo */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  padding: '10px 20px',
                  border: '2px solid #00ffff',
                  color: '#00ffff',
                  background: 'transparent',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  textShadow: '0 0 5px #00ffff',
                  textDecoration: 'none',
                  width: '100%', // Make button responsive
                  maxWidth: '200px', // Limit maximum width
                }}
              >
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectsSection;