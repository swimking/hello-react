import React from "react";
import { useEffect } from "react";
import'./app.css';
import SearchIcon from './search.svg';

// df3ce191

const API_URL = 'http://www.omdbapi.com?apikey=df3ce191'
const movie1 ={
    "Title": "Moana",
    "Year": "1926",
    "imdbID": "tt0017162",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmRlYWEyNWYtZmI0ZC00N2IxLTk4OTYtNWJlODA0NTZjYWQxXkEyXkFqcGdeQXVyMjQ3MTQ1MTg@._V1_SX300.jpg"
}
const App = ()=>{
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data)

    }
    useEffect(()=> {
        searchMovies('moana');
    }, []);

    return (
        
           <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input placeholder="Search for movies" value="Superman"
                onChange={()=>{}}
                />

                <img src={SearchIcon}
                alt={'search'}
                onClick={()=>{}}
                />

            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                   
                
                <div>
                    <img src={movie1.Poster !== true? movie1.Poster :'https://via.placeholder.com/400'} alt={movie1.title} />
                </div>
                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
            </div>
            </div>
           </div>
        
    );
}

export default App;