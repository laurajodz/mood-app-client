import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './logout';

import './history-header.css';

export default function HistoryHeader(props) {

    return (

        <div className="history-header">
            <ul className="historyHeader">
                <li className="logo">Mood Today</li>
                <li><Link to="/dashboard" className="dashboardLink">My Dashboard</Link></li>
                <li className="logout"><Logout /></li>
            </ul>
        </div>
    );
}
