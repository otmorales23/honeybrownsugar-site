import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="name">Ollie Terry-Morales</div>
            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Graphics">Graphics</Link>
                        </li>
                        <li>
                            <Link to="/WebApps">Web Apps</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;