import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className="Footer">
            <NavLink to="/">Trending</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/series">TV Series</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </div>
    )
}

export default Footer;