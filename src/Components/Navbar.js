import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="Navbar">
                <h3 className="Brand">Mounika</h3>
                <ul className="Nav-links">
                    <li className="Nav-item">Home</li>
                    <li className="Nav-item">Projects</li>
                    <li className="Nav-item">Blogs</li>
                    <li className="Nav-item">Contact</li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar;