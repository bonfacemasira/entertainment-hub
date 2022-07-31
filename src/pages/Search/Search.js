import React, { useState, useEffect } from 'react';
import './Search.css';
import SingleContent from '../../components/SingleContent/SingleContent';

function Search() {
    const [name, setName] = useState('')
    const [content, setContent] = useState([]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    },[])

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8d07a996f1bf5f9cee356b413d8fa485&query="${name}`)
        .then((response) => response.json())
        .then((data) => {setContent(data.results)})
    }

    return(
        <div className="search" onSubmit={handleSubmit} >
            <form className="search">
                <input type="text" className="search-input" placeholder="Search..." onChange={(e) => setName(e.target.value)} />
                <button type='submit' onClick={handleSubmit}>🔍 Search</button>
            </form>
            <div className="trending">
                {content.map((s) => (
                    <SingleContent 
                        key={s.id}
                        id={s.id}
                        poster={s.poster_path}
                        title={s.title || s.name}
                        date={s.release_date || s.first_air_date}
                        media_type={s.media_type}
                        rating={s.vote_average}
                    />
                ))}
            </div>
        </div>
    )
}

export default Search;