import React, { useState, useEffect } from 'react';
import { Route, useParams  } from 'react-router-dom';
import SingleContent from '../../components/SingleContent/SingleContent';
import ContentDetails from '../../components/ContentDetails/ContentDetails';
import './Movies.css';

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8d07a996f1bf5f9cee356b413d8fa485&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    },[])
    
    return(
    <div>
        <h1 className="section-title">Discover Movies</h1>
        <div className="trending">
            {movies.map((movie) => (
                <SingleContent 
                    key={movie.id}
                    id={movie._id}
                    poster={movie.poster_path}
                    title={movie.title || movie.name}
                    date={movie.release_date || movie.first_air_date}
                    media_type="Movie"
                    rating={movie.vote_average}
                    data={movie}
                />
            ))}
        </div>
        <ContentDetails data={movies}/>
    </div>
    )
}

export default Movies;