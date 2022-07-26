import React, { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
// import './Series.css';

function Series() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=8d07a996f1bf5f9cee356b413d8fa485&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`)
        .then(response => response.json())
        .then(data => setSeries(data.results))
    },[])

    return (
        <div>
            <h1 className="section-title">Discover TV Series</h1>
            <div className="trending">
                {series.map((serie) => (
                    <SingleContent 
                        key={serie.id}
                        id={serie.id}
                        poster={serie.poster_path}
                        title={serie.title || serie.name}
                        date={serie.release_date || serie.first_air_date}
                        media_type="TV Series"
                        rating={serie.vote_average}
                        data={serie}
                    />
                ))}
            </div>
        </div>
    )
}

export default Series;