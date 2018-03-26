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
                    <ul className="sectionHeader">Your Mood Tracking App
                        <li className="sectionContent">Record Your Moods <br/>
                            <i className="fa fa-pencil-square-o fa-3x" id="pencil"></i>
                        </li>
                        <li className="sectionContent">Look For Patterns <br/>
                            <i className="fa fa-history fa-3x" id="history"></i>
                        </li>
                        <li className="sectionContent">Gain Insights <br/>
                            <i className="fa fa-bar-chart fa-3x" id="history"></i>
                        </li>
                    </ul>
                </section>

                <section className="section2">
                    <ul className="sectionHeader">Record your daily mood
                        <li className="sectionContent">
                        Rate your mood every day and describe it.<br/>
                        Add more information, including the quality of your sleep, how healthy you ate, if you got some exercise or not, plus enter any notes about your day.<br/>
                        <img src={ require('../images/moodEntry.png')} alt="Mood Entry" /><br/>
                        <img src={ require('../images/notesEntry.png')} alt="Notes Entry" />
                        </li>
                    </ul>
                </section>

                <section className="section3">
                    <ul className="sectionHeader">See your history
                        <li className="sectionContent">
                        Access your mood history<br/>
                        Review your previous mood entries<br/>
                        <img src={ require('../images/history.png')} alt="History" />
                        </li>
                    </ul>
                </section>

                <section className="section4">
                    <ul className="sectionHeader">Data analytics
                        <li className="sectionContent">
                        Examine your mood records via charts and graphs<br/>
                        If patterns in your data emerge, perhaps a greater understanding of your moods is in reach<br/>
                        <img src={ require('../images/analytics.png')} alt="Analytics" />
                        </li>
                    </ul>
                </section>

                <section className="section5">
                    <Login />
                </section>

                <section className="homeFooter">
                    Copyright 2018, <a href="http://www.laurajodz.com" className="port" target="_blank" rel="noopener noreferrer">Laura Jodz</a><br/>
                    <a href="https://github.com/laurajodz" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square" id="git"></i></a>
                    <a href="https://www.linkedin.com/in/laurajodz" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" id="linked"></i></a>
                </section>

            </section>

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
