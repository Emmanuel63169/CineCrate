// Home Page - where website clients are sent to initially
import { useEffect } from 'react';

import './CSS/home.css'

export default function HomePage() {

    return (
      <>
        <div className='homePage'>
            <h1>Home page</h1>
            <div className='yourMoviesContainer'>
                <p>No Owned Movies</p>
            </div>
            <div className='onSaleMovies'>
                <p>No Movies on Sale</p>
            </div>
        </div>
      </>
    )
}