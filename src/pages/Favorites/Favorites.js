import React, {useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Favorites.css';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        fetch("http://localhost:4000/results")
        .then(response => response.json())
        .then(data => setFavorites(data))
    }, [])

    function removeFavorite() {
        
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
                    <button onClick={removeFavorite}>REMOVE</button>
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}

export default Favorites;