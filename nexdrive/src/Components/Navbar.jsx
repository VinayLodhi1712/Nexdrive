import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
    expanded={expand}
    fixed="top"
    expand="md"
    className={navColour ? "sticky" : "navbar"}
  >
    <Container>
      <div className="d-flex justify-content-center align-items-center">
        <Navbar.Brand href="/" className="d-flex">
          <div
            className="d-flex align-items-center"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} className="img-fluid logo" alt="brand" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
      </div>
  
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link as={Link} to="/fleetsolutions" onClick={() => updateExpanded(false)}>
              Fleet soultions
            </Nav.Link>
          </Nav.Item>
  
          <Nav.Item>
            <Nav.Link as={Link} to="/Industries" onClick={() => updateExpanded(false)}>
              Industries
            </Nav.Link>
          </Nav.Item>
  
          <Nav.Item>
            <Nav.Link as={Link} to="/blogs" onClick={() => updateExpanded(false)}>
              Blogs
            </Nav.Link>
          </Nav.Item>
  
          <Nav.Item>
            <Nav.Link as={Link} to="/support" onClick={() => updateExpanded(false)}>
              Support
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/support" onClick={() => updateExpanded(false)}>
              Contact us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  

  
  );
}

export default NavBar;