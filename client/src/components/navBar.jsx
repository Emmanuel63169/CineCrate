// This is the navigation bar for the website
import { Link } from 'react-router-dom'
// use Auth
// toast
// useEffect
import './CSS/navBar.css'

export default function NavBar() {
    
    return (
        <>
            <div id='navBar'>
            <h1 className='title'>CineCrate</h1>
                <div className='navLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/movies'>Movies</Link>
                    <Link to='/login'>Log In</Link>
                    {/* make register/login and admin pages only show up when not logged in/ isAdmin is true */}
                </div>
            </div>
        </>
    )
}