import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    const linkStyles = {
        textDecoration: 'none',
        // color: 'white',
        display: 'inline-block',
        padding: '1rem',
        margin: '0.1rem',
        border: '1px solid black',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'black',
        cursor: 'pointer',
    };
    return (
        <div className="Footer">
            <div className="footer-content">
            <NavLink style={linkStyles} activeStyle={{backgroundColor: 'black',}} to="/">Trending</NavLink>
            <NavLink style={linkStyles} to="/movies">Movies</NavLink>
            <NavLink style={linkStyles} to="/series">TV Series</NavLink>
            <NavLink style={linkStyles} to="/search">Search</NavLink>
            <NavLink style={linkStyles} to="/favorites">Favorites</NavLink>
            </div>
        </div>
    )
}

export default Footer;