import React from "react";
import MovieCard from "./Movie-card";
import { useState, useEffect } from "react";
import'./app.css';
import SearchIcon from './search.svg';


// df3ce191

const API_URL = 'http://www.omdbapi.com?apikey=df3ce191'
// eslint-disable-next-line
// const movie ={

//     "Title": "Moana",
//     "gido": "1926",
//     "imdbID": "tt0017162",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNmRlYWEyNWYtZmI0ZC00N2IxLTk4OTYtNWJlODA0NTZjYWQxXkEyXkFqcGdeQXVyMjQ3MTQ1MTg@._V1_SX300.jpg"
// }
const App = ()=>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setTerm] = useState('')
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
       setMovies(data.Search);

    }
    useEffect(()=> {
        searchMovies('');
    }, []);

    return (
        
           <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input placeholder="Search for movies" value={searchTerm}
                onChange={(e)=> setTerm(e.target.value)}
                />

                <img src={SearchIcon}
                alt={'search'}
                onClick={()=>searchMovies(searchTerm)}
                />

            </div>

            {
             movies?.length > 0 
             ?(
                    <div className="container">
                        {
                        movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))

                        }   
                        
                    </div>
                ):(
                    
                    <div className="empty">
                        <h2>No movies Found</h2>
                    </div>
                    
                )
            }

            
           </div>
        
    );
}

export default App;