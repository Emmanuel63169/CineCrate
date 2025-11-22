// Home Page - where website clients are sent to initially
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

import './CSS/home.css'

export default function HomePage() {
  const [username, setUsername] = useState('Guest')

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

    return (
      <>
        <div className='homePage'>
            <div className='Header'>
              <h1>Home page</h1>
              <h2>Welcome Home, {username || 'Guest'}!</h2>
            </div>
            <div className='yourMoviesContainer'>
                <p>No listed Movies</p>
            </div>
            <div className='onSaleMovies'>
                <p>No recommended Movies</p>
            </div>
        </div>
      </>
    )
}