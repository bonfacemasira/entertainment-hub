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
    
    return (
    <div>
        <h1 className="section-title">Favorites</h1>
        <div className="trending">
            {favorites.map((favorite) => (
                <SingleContent 
                    key={favorite.id}
                    id={favorite._id}
                    poster={favorite.poster_path}
                    title={favorite.title || favorite.name}
                    date={favorite.release_date || favorite.first_air_date}
                    media_type={favorite.media_type}
                    rating={favorite.vote_average}
                />
            ))}
        </div>
        {/* <ContentDetails data={movies}/> */}
    </div>
    )
}

export default Favorites;