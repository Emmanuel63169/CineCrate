import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

import NavBar from './components/navBar';
import HomePage from './components/home';
import MoviesPage from './components/movies';
import MovieDetails from './components/movieDetails';
import LoginPage from './components/login';
import RegisterPage from './components/register';

function App() {
const [movies, setMovies] = useState([]);

  return (
    <Router>
      <div id='pageLayout'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/movies' element={<MoviesPage movies={movies} setMovies={setMovies}/>}/>
          <Route path='/movies/:movieId' element={<MovieDetails/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
