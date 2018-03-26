import React from 'react';
import {connect} from 'react-redux';
import Login from './login';
import {Link, Redirect} from 'react-router-dom';

import './home.css';

export function Home(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (

        <div className="home">

            <ul className="homeHeader">
                <li><p className="homeLogo">Mood Today</p></li>
                <li><Link to="/login" className="homeLogin">Log in</Link></li>
            </ul>

            <section className="homeBody">

                <section className="section1">
                    <ul className="sub1">Your Mood Tracking App
                        <li className="firstText">Record Your Moods <br/>
                            <i className="fa fa-pencil-square-o fa-3x" id="pencil"></i>
                        </li>
                        <li className="secondText">Look For Patterns <br/>
                            <i className="fa fa-history fa-3x" id="history"></i>
                        </li>
                        <li className="thirdText">Gain Insights <br/>
                            <i className="fa fa-bar-chart fa-3x" id="history"></i>
                        </li>
                    </ul>
                </section>

                <section className="section2">
                    <p className="sub">Record your daily mood</p>
                    <p>Rate your mood and describe it</p>
                    <p>Rate the quality of your sleep, how healthy you ate, if you got some exercise, plus enter any notes about your day</p>
                    <p>Screen shots</p>
                </section>

                <section className="section3">
                    <p className="sub">See your history</p>
                    <p>Access your mood history</p>
                    <p>Screen shot</p>
                </section>

                <section className="section4">
                    <p className="sub">Data analytics</p>
                    <p>Examine your mood records via charts and graphs</p>
                    <p>Screen shots</p>
                </section>

                <section className="section5">
                    <Login />
                </section>

                <section className="homeFooter">
                    Copyright 2018, Laura Jodz
                    <a href="your link here"><i className="fa fa-github-square" id="git"></i></a>
                    <a href="your link here"><i className="fa fa-linkedin-square" id="linked"></i></a>
                    <a href="www.laurajodz.com" className="port">Portfolio</a>
                </section>

            </section>

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
