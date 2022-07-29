import React, { useState, useEffect } from 'react';
import './Trending.css';
import SingleContent from '../../components/SingleContent/SingleContent';

function Trending() {
    const [trending, setTrending] = useState([])
    // const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=8d07a996f1bf5f9cee356b413d8fa485&page=1`)
        .then(res => res.json())
        .then(data => setTrending(data.results))
    }, [])
    return(
        <div>
            {/* <span className="title">Trending</span> */}
            <h1>Trending</h1>
            <div className="trending">
                {trending.map((trend) => (
                    <SingleContent 
                        key={trend._id}
                        id={trend._id}
                        poster={trend.poster_path}
                        title={trend.title }
                        date={trend.release_date}
                        media_type={trend.media_type}
                        rating={trend.vote_average}
                    />
                ))}
            </div>
        </div>
    );
};

export default Trending;