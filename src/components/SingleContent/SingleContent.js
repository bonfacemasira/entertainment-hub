import React, { useState } from 'react';
import ContentDetails from '../ContentDetails/ContentDetails';
import './SingleContent.css';
import axios from 'axios';
import { Modal } from 'react-bootstrap';


function SingleContent({data, id, poster, title, date, media_type, rating}) {
    const [showStatus,setShowStatus] =useState(false);
    const [addToFavorites,setAddToFavorites] =useState(false);

    function handleAddToFavorites() {
        setAddToFavorites(true);
    }

    const handleShow = () => setShowStatus(true)
    const handleClose = () => setShowStatus(false)

    const onSelect = () => {
        axios.post("https://enternment-hubv1-server.herokuapp.com/results", data);
        handleAddToFavorites();
    };


    let source = `https://image.tmdb.org/t/p/w1280${poster}`

    return (
        <div>
            <div className="single-content" key={id} >
                <img className="image" src={source} alt={title} />
                <div className="description-container">
                    <p className="title">{title}</p>
                    <div className="holder">
                        <span>{media_type === "movie" ? "Movie" : "TV Series"}</span>
                        <span>{date}</span>
                    </div>
                    <p className="rating">Rating: {rating}</p>
                </div>
                <button onClick={() =>{onSelect(id)}}>{addToFavorites ? "Added" : "Add to Favorites"}</button>
            </div>
            <Modal open={handleShow} onClose={handleClose} className="rating-modal">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <ContentDetails data={data} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SingleContent;