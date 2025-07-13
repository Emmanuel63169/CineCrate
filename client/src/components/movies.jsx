// Movies Page - where all movies can be browsed
import { useEffect } from "react";

import './CSS/movies.css'

export default function moviesPage({ movies, setMovies}) {
const MOVIES_API_URL = "http://localhost:3000/api/movies";

// Scrolling-Buttons Logic -
const scrollContainer = (scrollOffset) => {
  const container = document.getElementById("moviesContainer");
  if (container) {
    container.scrollBy({ left: scrollOffset, behavior: "smooth" });
  }
};

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

  // Scroll-Wheel Logic -
  const container = document.getElementById("moviesContainer")
  if (container) {
    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel);

    return () => container.removeEventListener("wheel", handleWheel, { passive: false });
  }
}, []);

    return (
      <>
        <div className='moviesPage'>
            <h1>Movies Page</h1> 

          <div className="scrollWrapper">
            <button className='scrollButton_left' onClick={() => scrollContainer(-300)}>&lt;</button>

            <div id="moviesContainer" className='moviesContainer'>
              {movies.length === 0 ? ( 
                <p>No movies avaliable</p>
              ) : (
                movies.map((movie) => (
                  <div key={movie.id} id={movie.id} className="movieCard">
                    <img src={movie.movie_img} alt={`${movie.movie_name} Image`}  />
                    <h3>{movie.movie_name}</h3>
                  </div>
                ))
              )}
            </div>
            <button className='scrollButton_Right' onClick={() => scrollContainer(300)}>&gt;</button>
          </div>
        </div>  
      </>
    )
}