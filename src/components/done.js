import React from 'react';
import {Link} from 'react-router-dom';

// import './done.css';

export default function Done(props) {

    return (
        <div className="done">

            <p>Animated checkmark placeholder</p>

            <h1>Great! You are done</h1>

            <button
                className="return-button"
            >
                <Link to="/dashboard">Return to My Dashboard</Link>
            </button>

        </div>
    )

}
