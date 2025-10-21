// Login Page - where people sign in to their accounts

import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import './CSS/login.css'

export default function LoginPage() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const USERS_API_URL = "http://localhost:3000/api/users";
  const navigate = useNavigate();
  
  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    console.log('email =>', email, 'Password =>', password)
    try {
      const response= await fetch(`${USERS_API_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');

      // JWT to localstorage?
      localStorage.setItem('token', data.token);
      alert('Login Successful');
      // Redirect or reload
      window.location.href = '/';

    }  catch (error) {
      setError(error.message)
    }
  };
  return (
      <>
        <div className='loginPage'>
            <h1>Login Page</h1>
            <div className='loginInputs'>
                <form onSubmit={handleSubmit}>
                  <div className='formGroup'>
                    <input 
                      type='text'
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input 
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type='submit'>Login</button>
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
              <div className='registerQuestion'>
                <p>Don't have an account?</p>
                <button type='button' onClick={() => navigate('/register')}>Register</button>
              </div>
            </div>
        </div>  
      </>
    )
}