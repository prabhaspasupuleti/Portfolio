import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      {/* Social Media Icons */}
      <motion.div
        className="social-icons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
            <FaTwitter className="icon" />
          </motion.div>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
            <FaInstagram className="icon" />
          </motion.div>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
            <FaLinkedin className="icon" />
          </motion.div>
        </a>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        className="quick-links"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a href="/About">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </motion.div>

      {/* Copyright Text */}
      <motion.div
        className="copyright"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        &copy; {new Date().getFullYear()} Prabhas. All rights reserved.
      </motion.div>

      {/* Back-to-Top Button */}
      <motion.div
        className="back-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.div>
    </footer>
  );
};

export default Footer;