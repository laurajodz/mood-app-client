import React from 'react';
import {Link} from 'react-router-dom';

export default function HeaderLogin(props) {

    return (

        <header>
            <h1><Link to="/login">Login</Link></h1> {/*go to login page*/}
        </header>
    );
}
