import React, {useState, useEffect } from 'react';
import './Favorites.css';
import axios from 'axios';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        fetch("https://enternment-hubv1-server.herokuapp.com/results")
        .then(response => response.json())
        .then(data => setFavorites(data))
    }, [])

    function removeFavorite(id) {
        const updatedFavorites = favorites.filter((f) => f.id !== id);
        setFavorites(updatedFavorites);
        axios.delete(`https://enternment-hubv1-server.herokuapp.com/results/${id}`)
    }
    
    return (
    <div>
        <h1 className="section-title">Favorites</h1>
        <div className="trending">
            {favorites.map((favorite) => (
                <div className="single-content" key={favorite.id} >
                <img className="image" src={`https://image.tmdb.org/t/p/w1280${favorite.poster_path}`} alt={favorite.title} />
                <div className="description-container">
                    <p className="title">{favorite.title}</p>
                    <div className="holder">
                        <span>{favorite.media_type === "movie" ? "Movie" : "TV Series"}</span>
                        <span>{favorite.date}</span>
                    </div>
                    <p className="rating">Rating: {favorite.vote_average}</p>
                    <button onClick={() => (removeFavorite(favorite.id))}>REMOVE</button>
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}

export default Favorites;