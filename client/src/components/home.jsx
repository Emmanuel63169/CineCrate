// Home Page - where website clients are sent to initially
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

import './CSS/home.css'

export default function HomePage() {
  const [username, setUsername] = useState('Guest')
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log('Decoded JWT:', decoded);
        setUsername(decoded.username);
      } catch (error) {
        console.error("Invalid Token:", error)
        localStorage.removeItem('token');
      }
    }
  }, [])

useEffect(() => {
  const token = localStorage.getItem('token');
  console.log("TOKEN before fetching saved movies: ", token)
  if (!token) return;

  const fetchSavedMovies = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/saved", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      console.log("Fetched saved movies:", data);

      if (Array.isArray(data)) {
        setSavedMovies(data);
      } else {
        console.error("Expected an array but got:", data);
        setSavedMovies([]);
      }
    } catch (error) {
      console.error("Error loading saved movies:", error);
    }
  };

  fetchSavedMovies();
}, []);

    return (
      <>
        <div className='homePage'>
            <div className='Header'>
              <h1>Home page</h1>
              <h2>Welcome Home, {username || 'Guest'}!</h2>
            </div>
            <div className='yourMoviesContainer'>
                <h3>Your Listed Movies</h3>

                {savedMovies.length === 0 ?  (
                  <p>No Listed Movies</p>
                ) : (
                  <div className="movieList">
                    {savedMovies.map(movie => (
                      <div className="movieItem" key={movie.movie_id}>
                        <img src={movie.movie_img} alt={movie.movie_name} />
                        <p>{movie.movie_name}</p>
                      </div>
                    ))}
                  </div> 
                )}
            </div>
            <div className='onSaleMovies'>
                <p>No recommended Movies</p>
            </div>
        </div>
      </>
    )
}