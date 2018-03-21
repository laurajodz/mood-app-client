import React from 'react';
import Header from './header';

import {Link} from 'react-router-dom';

import './home.css';

export default function Home(props) {

    return (

        <div className="home">

            <Header />

            <section className="section1">

                <h2>Record Your Moods</h2>
                <h2>Look For Patterns</h2>
                <h2>Gain Insights</h2>

            </section>

            <section className="section2">
                Record your daily mood
                <p>Rate your mood and describe it</p>
                <p>Rate the quality of your sleep, how healthy you ate, if you got some exercise, plus enter any notes about your day</p>
                <p>Screen shots</p>
            </section>

            <section className="section3">
                See your history
                <p>Access your mood history</p>
                <p>Screen shot</p>
            </section>

            <section className="section4">
                Data analytics
                <p>Examine your mood records via charts and graphs</p>
                <p>Screen shots</p>
            </section>

            <section className="section5">
                <Link to="/login">Login</Link>
            </section>
        </div>
    );
}
