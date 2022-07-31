import React, { useState } from 'react';
import ContentDetails from '../ContentDetails/ContentDetails';
import './SingleContent.css';
import axios from 'axios';


function SingleContent({data, id, poster, title, date, media_type, rating}) {
    const [isShown, setIsShown] = useState(false);

    const onSelect = () => {
        axios.post("http://localhost:4000/results", data);
    };


    let source = `https://image.tmdb.org/t/p/w1280${poster}`

    return (
        <div className="single-content" key={id} onClick={() =>{onSelect(id)}}>
            {isShown && <ContentDetails data={data} />}
            <img className="image" src={source} alt={title} />
            <div className="description-container">
                <p className="title">{title}</p>
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