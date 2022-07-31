import React, { useState, useEffect } from 'react';
import './Trending.css';
import SingleContent from '../../components/SingleContent/SingleContent';

function Trending() {
    const [trending, setTrending] = useState([])
    // const [page, setPage] = useState(1)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=8d07a996f1bf5f9cee356b413d8fa485&page=1`)
        .then(res => res.json())
        .then(data => setTrending(data.results))
    }, [])
    return(
        <div>
            <h1 className='section-title'>Trending</h1>
            <div className="trending">
                {trending.map((trend) => (
                    <SingleContent 
                        key={trend.id}
                        id={trend.id}
                        poster={trend.poster_path}
                        title={trend.title || trend.name}
                        date={trend.release_date || trend.first_air_date}
                        media_type={trend.media_type}
                        rating={trend.vote_average}
                    />
                ))}
            </div>
        </div>
    );
};

export default Trending;