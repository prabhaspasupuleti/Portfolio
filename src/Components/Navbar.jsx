import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../index.css'; //

function NavbarComponent({ scrollToSection, homeRef, aboutRef, projectsRef }) {
  return (
    <Navbar expand="lg" className="transparent-navbar">
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand className="neon-text">Prabhas</Navbar.Brand>

        {/* Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />

        {/* Navbar Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as="button"
              onClick={() => scrollToSection(homeRef)}
              className="nav-link"
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as="button"
              onClick={() => scrollToSection(aboutRef)}
              className="nav-link"
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              AboutMe
            </Nav.Link>
            <Nav.Link
              as="button"
              onClick={() => scrollToSection(projectsRef)}
              className="nav-link"
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as="button"
              onClick={() => scrollToSection(projectsRef)} // Replace with contactRef if you have one
              className="nav-link"
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;