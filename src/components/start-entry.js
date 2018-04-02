import React from 'react';
import {Link} from 'react-router-dom';
import './start-entry.css';

export default function StartEntry(props) {

    return (

        <div className="start-entry">

            <Link to="/form-entry" className="start-entry-link">Enter Mood for Today</Link>

        </div>

    );
}
