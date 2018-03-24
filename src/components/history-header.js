import React from 'react';
import {Link} from 'react-router-dom';
import HeaderBar from './header-bar';

export default function DashboardHeader(props) {

    return (

        <section className="dashboard-header">
            <p className="logo">Mood Today</p>
            <Link to="/dashboard">My Dashboard</Link>
            <HeaderBar />
        </section>
    );
}
