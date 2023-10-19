// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <Navbar expand="lg">

                    {/* Name */}
                    <Navbar.Text className="name ml-auto">Ollie Terry-Morales</Navbar.Text>

                    {/* Hamburger Toggle */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    {/* Collapsible Content */}
                    <Navbar.Collapse className="reverseNav" id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Item>
                                <Button as={Link} to="/" className="text-dark">Home</Button>
                            </Nav.Item>
                            <Nav.Item>
                                <Button as={Link} to="/Graphics" className="text-dark">Graphics</Button>
                            </Nav.Item>
                            <Nav.Item>
                                <Button as={Link} to="/WebApps" className="text-dark">Web Apps</Button>
                            </Nav.Item>
                            <Nav.Item>
                                <Button as={Link} to="/About" className="text-dark">About</Button>
                            </Nav.Item>
                            <Nav.Item>
                                <Button as={Link} to="/Contact" className="text-dark">Contact</Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;
