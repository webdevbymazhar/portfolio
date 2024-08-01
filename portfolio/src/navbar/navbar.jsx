import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

const Navmenu = () => {
  return (
    <div>
      <Navbar style={{borderBottom:"1px solid lightgrey",boxShadow:"5px 2px 5px lightgrey"}} theme="light" expand="lg" className="py-1 nav-menu navbar-fixed ">
        <Container>
          <h5 className="menu-heading py-2">WEB DEV BY MAZHAR</h5>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end collapse-menu">
            <Nav>
              <Nav.Link className="link">
                <Link
                  to="header"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Home
                </Link>{" "}
              </Nav.Link>
              <Nav.Link className="link">
                <Link
                  to="about-us"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  About
                </Link>{" "}
              </Nav.Link>
              <Nav.Link className="link">
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Skills
                </Link>{" "}
              </Nav.Link>
              <Nav.Link className="link">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Project
                </Link>{" "}
              </Nav.Link>
              <Nav.Link className="link">
                <Link
                  to="contact-us"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Contact
                </Link>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navmenu;
