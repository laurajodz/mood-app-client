import React from 'react';

import {Link} from 'react-router-dom';

// import './dashboard.css';

export default function Dashboard(props) {

    return (

        <div className="dashboard">

            <section>
                <Link to="/home">Home</Link>
                <Link to="/calendar">My Calendar</Link>
            </section>

            <section>
                <h1>My Dashboard</h1>
            </section>

            <section>
                <button className="start-entry-button">
                    <Link to="/form-entry">Enter Mood for Today</Link>  {/* add OnClick event, go to mood entry */}
                </button>
            </section>




            <section>
                Analytics
            </section>

        </div>

    );

}
