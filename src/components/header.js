import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// import './header.css';

export default function Header(props) {

    return (

        <header>
            <h1><Link to="/login">Login</Link></h1> {/*go to login page*/}
        </header>
    );
}
