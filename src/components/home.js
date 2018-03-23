import React from 'react';
import {connect} from 'react-redux';
import Login from './login';
import {Redirect} from 'react-router-dom';

import './home.css';

export function Home(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (

        <div className="home">

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
                <Login />
            </section>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
