import React from 'react';
import Header from './header';

import {Link} from 'react-router-dom';

// import './home.css';

export default function Home(props) {

    return (

        <div className="home">

            <Header />

            <section>
                <h2>Record Your Moods</h2>
                <h2>Look For Patterns</h2>
                <h2>Gain Insights</h2>
            </section>

            <section>
                <p>Screen shot 1 - Recording a mood</p>
            </section>

            <section>
                <p>Screen shot 2 - Seeing your history</p>
            </section>

            <section>
                <p>Screen shot 3 - Data analytics</p>
            </section>

            <section>
                <Link to="/login">Login</Link>
            </section>
        </div>
    );
}
