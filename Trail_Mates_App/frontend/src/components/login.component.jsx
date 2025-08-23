import './styles/login.css'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onChangeUsername(e) {
        setUsername(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        const user = {username, password};
        console.log(user);
        // send user to backend for credential checking
        axios.post('http://localhost:3000/users/login', user)
            .then(res => localStorage.setItem('token', res.data.accessToken));
        navigate('/dashboard')
        setUsername('');
        setPassword('');
    }

    return(
        <div className="logincard">
            <div className="loginitems">
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor='text'>Username</label>
                        <input
                        type="text"
                        placeholder="Enter Username"
                        name='user'
                        value={username}
                        onChange={onChangeUsername}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        ></input>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
                <div>
                    <p>Sign Up!</p>
                    <Link to="/register">
                    Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Login