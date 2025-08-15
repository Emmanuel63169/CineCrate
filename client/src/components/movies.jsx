// Movies Page - where all movies can be browsed
import { useEffect, useState, useRef } from "react";

import './CSS/movies.css'

export default function MoviesPage({ movies, setMovies}) {
const MOVIES_API_URL = "http://localhost:3000/api/movies";

// Search Bar -
const [searchQuery, setSearchQuery ] = useState("");

// Scrolling-Buttons Logic -
let scrollInterval = null;

const startScrolling = (container, direction) => {
  if (!container) return; 
  scrollInterval = setInterval(() => {
    container.scrollBy({ left: direction, behavior: "smooth" });
  }, 50);
};

const stopScrolling = () => {
  clearInterval(scrollInterval)
}

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

const filteredMovies = movies.filter(movie => 
  movie.movie_name.toLowerCase().includes(searchQuery.toLowerCase())
)

  // Scroll-Wheel Logic -
  useEffect(() => {
    const scrollContainers = document.querySelectorAll(".scrollable")
    const handleWheel = (e) => {
      e.preventDefault();
      e.currentTarget.scrollLeft += e.deltaY * 3;
    };

    scrollContainers.forEach(container => {
      container.addEventListener("wheel", handleWheel, { passive: false });
    });
    
    return () => {
      scrollContainers.forEach(container => {
        container.removeEventListener("wheel", handleWheel);
      });
    };
  }, [movies, filteredMovies])


  const moviesByGenre = {};
  movies.forEach(movie => {
    if  (Array.isArray(movie.genres)) {
      movie.genres.forEach(genre =>  {
        if (!moviesByGenre[genre]) {
          moviesByGenre[genre] = [];
        }
        moviesByGenre[genre].push(movie);
      });
    }
  });

  const renderScrollSection = (title, moviesList) => (
    <>
    <h2>{title}</h2>
    <div className="scrollWrapper">
          <button 
            className='scrollButton_left' 
            onMouseDown={(e) => startScrolling(e.currentTarget.nextElementSibling, -10)}
            onMouseUp={stopScrolling}
            onMouseLeave={stopScrolling}
            onTouchStart={(e) => startScrolling(e.currentTarget.nextElementSibling, -10)}
            onTouchEnd={stopScrolling}
          >&lt;</button>

          <div className='moviesContainer scrollable'>
              {moviesList.length === 0 ? ( 
                <p>No movies avaliable</p>
              ) : (
              moviesList.map((movie) => (
                <div key={movie.movie_id} id={movie.movie_id} className='movieCard'>
                  <img src={movie.movie_img} alt={`${movie.movie_name} Image`}  />
                  <h3>{movie.movie_name}</h3>
                </div>
              ))
            )}
          </div>

          <button 
            className='scrollButton_right' 
            onMouseDown={(e) => startScrolling(e.currentTarget.previousElementSibling, 10)}
            onMouseUp={stopScrolling}
            onMouseLeave={stopScrolling}
            onTouchStart={(e) => startScrolling(e.currentTarget.previousElementSibling, 10)}
            onTouchEnd={stopScrolling}
          >&gt;</button>

        </div>
    </>
  )

  const renderSearchResults = (movieList) => (
    <div className="searchResults">
      {movieList.length === 0 ? (
        <p>No Movies Found</p>
      ) : (
        movieList.map((movie) => (
          <div key={movie.movie_id} className='searchResultItem'>
            <img src={movie.movie_img} alt={movie.movie_name} />
            <h3>{movie.movie_name}</h3>
          </div>
        ))
      )}
     </div>
  )

    return (
      <div className='moviesPage'>
      <div className="header">
            <h1>Movies Page</h1> 
      <input 
        type="text"
        placeholder="Search Movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="searchBar" 
        />
      </div>

      {searchQuery.trim() ? (
       <>
          <h2>SearchResults for "{searchQuery}"</h2>
          {renderSearchResults(filteredMovies)}
       </> 
      ) : (
        <>
          {renderScrollSection("All Movies", movies)}

          {Object.entries(moviesByGenre).map(([genre, genreMovies]) => (
            <section key={genre} className="genreMovies">
              {renderScrollSection(genre, genreMovies)}
            </section>
          ))}
        </>
        )}
      </div> 
    );
}