import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './logout';

import './history-header.css';

export default function HistoryHeader(props) {

    return (

        <ul className="history-header">

            <li className="histLogout"><Logout /></li>
            <li className="histLogo">Mood Today</li>
            <li className="histLinks"><Link to="/history" id="active" className="histLink">My History</Link></li>
            <li className="histLinks"><Link to="/dashboard" className="histLink">My Dashboard</Link></li>

        </ul>

    );
}
