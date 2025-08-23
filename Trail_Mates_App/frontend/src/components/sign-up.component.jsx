import './styles/signup.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

function SignUp() {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onChangeUsername(e) {
        setUsername(e.target.value);
    }

    function onChangeEmail(e) {
        setEmail(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }


    function onSubmit(e) {
        e.preventDefault();
        const user = {username, email, password};
        console.log(user);
        // send user to the backend 
        axios.post('http://localhost:3000/users/signup', user)
            .then(res => console.log(res.data));
        setUsername('');
        setEmail('');
        setPassword('');
    }

    return(
            <div className="card">
                <div className="items">
                    <h1>Register</h1>
                        <form onSubmit={onSubmit}>
                            <div>
                                <label htmlFor='text'>Name</label>
                                <br></br>
                                <input 
                                type="text" 
                                placeholder="Enter Username"
                                name='user'
                                value={username}
                                onChange={onChangeUsername}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <br></br>
                                <input 
                                 type="text"
                                 placeholder="Enter Email"
                                 name='email'
                                 value={email}
                                 onChange={onChangeEmail}
                                 ></input>
                            </div>
                            <div>
                                <label htmlFor='password'>Password</label>
                                <br></br>
                                <input 
                                type="password" 
                                placeholder="Enter Password"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                ></input>
                            </div>
                            <button type="submit">Register</button>
                        </form>
                        <div>
                            <p>Already Have an Account?</p>
                            <Link to="/login">
                                Login
                            </Link>
                        </div>
            </div>
            </div>

    );
}

export default SignUp