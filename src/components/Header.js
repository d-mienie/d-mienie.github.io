import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll"; 
import signature from "../img/signature1.png";
import './style.css';  

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "white" }} variant="dark" className="fixed-top top-0 m-0 p-0">
            <Container>
                <Navbar.Brand href="#Home">
                    <img
                        alt=""
                        src={signature}
                        width="240"
                        height="50"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-center">
                        <Nav.Link as={Link} to="about" smooth={true} duration={500} style={{ color: '#14499d' }} className="h5">About</Nav.Link>
                        <Nav.Link as={Link} to="skills" smooth={true} duration={500} style={{ color: '#14499d' }} className="h5">Skills</Nav.Link>
                        <Nav.Link as={Link} to="projects" smooth={true} duration={500} style={{ color: '#14499d' }} className="h5">Projects</Nav.Link>
                        <Nav.Link as={Link} to="contact" smooth={true} duration={500} style={{ color: '#14499d' }} className="h5">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
