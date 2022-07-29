import React from 'react';
import './Header.css';


function Header() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return(
        <div className="header" onClick={scrollToTop}>
            <div className="title">
            🎬 Entertainment Hub 🎥
            </div>
        </div>
    )
}

export default Header;