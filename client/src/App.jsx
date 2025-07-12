import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

import NavBar from './components/navBar'
import HomePage from './components/home'
import MoviesPage from './components/movies'
import LoginPage from './components/login'

function App() {
const [movies, setMovies] = useState([]);

  return (
    <Router>
      <div id='pageLayout'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/movies' element={<MoviesPage movies={movies} setMovies={setMovies}/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
