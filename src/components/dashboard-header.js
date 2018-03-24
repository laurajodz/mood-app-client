import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './logout';

import './dashboard-header.css';

export default function DashboardHeader(props) {

    return (

        <div className="dashboard-header">
            <ul className="dashboardHeader">
                <li className="logo">Mood Today</li>
                <li><Link to="/home" className="homeLink">Home</Link></li>
                <li><Link to="/history" className="historyLink">My History</Link></li>
                <li className="logout"><Logout /></li>
            </ul>
        </div>
    );
}
