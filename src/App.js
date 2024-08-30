import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
//d39d9274
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=d39d9274'

// const movie1 = {
//         "Title": "Spiderman",
//         "Year": "2010",
//         "imdbID": "tt1785572",
//         "Type": "movie",
//         "Poster": "N/A"
//     }

const App = () => {
    const [movies, setmovies] = useState([]);
    const [searchTearm, setsearchTearm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setmovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder="Search for movies"
                    value={searchTearm}
                    onChange={(e) => setsearchTearm(e.target.value)}/>
                <img src={SearchIcon} alt="Search"
                    onClick={() => searchMovies(searchTearm) } />
            </div>

            {movies?.length > 0
                    ? (
                    <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                    ))}
                    </div>      
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )}
        </div>
    );
}



export default App;
