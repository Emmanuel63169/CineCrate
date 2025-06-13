import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

import HomePage from './components/home'
import NavBar from './components/navBar'

function App() {

  return (
    <Router>
      <div id='pageLayout'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
