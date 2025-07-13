// Movies Page - where all movies can be browsed
import { useEffect } from "react";

import './CSS/movies.css'

export default function moviesPage({ movies, setMovies}) {
const MOVIES_API_URL = "http://localhost:3000/api/movies";

useEffect(() => { 

  const fetchMovies = async () => {
    try {
      const response = await fetch(MOVIES_API_URL);
      const data = await response.json();
      console.log('Movies Found!', data)
      setMovies(data)
    } catch (error) {
      console.error('Error Fetching the Movies :(', error);
    }
  }

  fetchMovies();
}, []);

    return (
      <>
        <div className='moviesPage'>
            <h1>Movies Page</h1> 
            <div className='moviesContainer'>
                <p>No movies avaliable</p>
            </div>
        </div>  
      </>
    )
}