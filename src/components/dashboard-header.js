import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './logout';

import './dashboard-header.css';

export default function DashboardHeader(props) {

    return (

        <div className="dashboard-header">
            <div className="dashLogo">Mood Today</div>
            <div className="dashLogout"><Logout /></div>
            <div className="clearfix"></div>
            <ul className="dashboardHeader">
                <li className="dashHistoryLink"><Link to="/history" className="historyLink">My History</Link></li>
            </ul>
        </div>
    );
}
