import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './logout';

import './history-header.css';

export default function HistoryHeader(props) {

    return (

        <div className="history-header">
            <div className="histLogo">Mood Today</div>
            <div className="histLogout"><Logout /></div>
            <div className="clearfix"></div>
            <ul className="historyHeader">
                <li className="histDashboardLink"><Link to="/dashboard" className="dashboardLink">My Dashboard</Link></li>
            </ul>
        </div>
    );
}
