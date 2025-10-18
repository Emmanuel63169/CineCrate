import {useState} from 'react'
import './CSS/register.css'

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const USERS_API_URL = 'http://localhost:3000/api/users';

    async function handleSubmit(event) {
        event.preventDefault();
        setError('')

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        } try {
            const response = await fetch(`${USERS_API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password}),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Registration failed');

            alert('Registration successful! You can now log in.');
            window.location.href = '/login'; // Redirect
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
        <div className='registerPage'>
            <h1>Register Page</h1>
            <div className='registerInputs'>
                <form onSubmit={handleSubmit}>
                    <div className='formGroup'>
                        <input 
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input 
                            type='email'
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
                        <input 
                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type='submit'>Register</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>

        </div>
        </>
    )
}