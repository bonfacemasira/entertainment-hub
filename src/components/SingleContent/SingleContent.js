import React from 'react';
import './SingleContent.css';


function SingleContent({id, poster, title, date, media_type, rating}) {
    let source = `https://image.tmdb.org/t/p/w1280${poster}`
    return (
        <div className="single-content">
            <div className="image-container">
                <img className="image" src={source} alt={title} />
            </div>
            <div className="description-container">
                <h3 className="title">{title}</h3>
                <div className="holder">
                    <span>{media_type === "movie" ? "Movie" : "TV Series"}</span>
                    <span>{date}</span>
                </div>
                <p className="rating">Rating: {rating}</p>
            </div>
        </div>
    )
}

export default SingleContent;