import React from 'react';

function SingleContent({id, poster, title, date, media_type, rating}) {
    let source = `https://image.tmdb.org/t/p/w1280${poster}`
    return (
        <div className="single-content">
            <div className="image-container">
                <img className="image" src={source} alt={title} />
            </div>
            <div className="description-container">
                <h2>{title}</h2>
                <p>{date}</p>
                <p>{rating}</p>
            </div>
        </div>
    )
}

export default SingleContent;