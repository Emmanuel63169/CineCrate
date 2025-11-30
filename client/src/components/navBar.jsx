// This is the navigation bar for the website
import { Link, useNavigate } from 'react-router-dom'
// use Auth
// toast
// useEffect
import './CSS/navBar.css'

export default function NavBar() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const isLoggedIn = !!token;

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to sign out?");
        if (!confirmLogout) return;

        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <>
            <div id='navBar'>
            <h1 className='title'>CineCrate</h1>
                <div className='navLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/movies'>Movies</Link>

                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="logout-btn">
                            Sign Out
                        </button>
                    ) : (
                        <Link to='/login'>Log In</Link>
                    )}
                    {/* admin pages only show up when not logged in/ isAdmin is true */}
                </div>
            </div>
        </>
    )
}