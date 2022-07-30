import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    const linkStyles = {
        textDecoration: 'none',
        display: 'inline-block',
        padding: '1rem',
        margin: '0.1rem',
        border: '1px solid white',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'white',
        cursor: 'pointer',
    };
    return (
        <div className="footer">
            <div className="footer-content">
            <NavLink style={linkStyles} to="/">🔥 Trending</NavLink>
            <NavLink style={linkStyles} to="/movies">🎞️ Movies</NavLink>
            <NavLink style={linkStyles} to="/series">📺 TV Series</NavLink>
            <NavLink style={linkStyles} to="/search">🔍 Search</NavLink>
            <NavLink style={linkStyles} to="/favorites">❤️ Favorites</NavLink>
            </div>
        </div>
    )
}

export default Footer;