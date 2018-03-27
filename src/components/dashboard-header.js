import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './logout';

import './dashboard-header.css';

export default function DashboardHeader(props) {

    return (

        <ul className="dashboard-header">
            <li className="dashLogo">Mood Today</li>
            <li className="dashLink"><Link to="/dashboard" className="dashLink">My Dashboard</Link></li>
            <li className="dashLink"><Link to="/history" className="dashLink">My History</Link></li>
            <li className="dashLogout"><Logout /></li>

        </ul>

    );
}
