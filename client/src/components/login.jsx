// Login Page - where people sign in to their accounts

import {useState} from 'react'
import './CSS/login.css'

export default function loginPage() {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

    async function handleSubmit(event) {
      event.preventDefault();
      console.log('Username =>', username, 'Password =>', password)
    }
    return (
      <>
        <div className='loginPage'>
            <h1>Login Page</h1>
            <div className='loginInputs'>
                <form onSubmit={handleSubmit}>
                  <div className='formGroup'>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    Password: <input value={password} onChange={(e) => setPassword(e.target.value)} required/>
                  </div>
                  <button>Submit</button>
                </form>
            </div>
        </div>  
      </>
    )
}