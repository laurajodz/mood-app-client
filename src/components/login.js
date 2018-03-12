import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// import './login.css';

export default function Login(props) {

    return (

        <form className="login">

            <div>
                <label for="username">Username</label>
                <input type="text" name='username' id='username' />
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" name='password' id='password' />
            </div>

            <button
                className="login-button"
            >
                <Link to="/dashboard">Login</Link> {/*onClick, capture input, auth or throw error, and go to dashboard*/}
            </button>

            <button
                className="cancel-button"
            >
                <Link to="/home">Cancel</Link>
            </button>

        </form>
    );

}
