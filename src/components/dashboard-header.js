import React from 'react';
import {Link} from 'react-router-dom';
import HeaderBar from './header-bar';

import './dashboard-header.css';

export default function DashboardHeader(props) {

    return (

        <ul className="dashboard-header">
            <li className="logo">Mood Today</li>
            <li><Link to="/home" className="home">Home</Link></li>
            <li><Link to="/history" className="history">My History</Link></li>
            <li className="logout"><HeaderBar /></li>
        </ul>
    );
}
