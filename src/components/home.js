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
                <li><Link to="/login" className="homeLogin">Log in</Link></li>
                <li><p className="homeLogo">Mood Today<span className="subtitle"><br/> Your Mood Tracking App</span></p></li>
            </ul>

            <section className="homeBody">

                <section className="section1">
                    <ul className="sectionHeader">
                        <li>Mood Today is on a mission to make sense of our changing moods</li>
                        <li className="about">If your goal is to better understand your mood patterns,
                        Mood Today provides an easy way to record and track moods -- as well as environmental
                        factors (sleep, eating, and exercise) -- to help you on your path to mood management</li>
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
                    <div className="sectionHeader">Record your daily mood
                        <div className="sectionContent">
                            <p>Every day, rate and describe your</p>
                            <img src={ require('../images/happy.png')} alt="Happy Face" />
                            <img src={ require('../images/ok.png')} alt="OK Face" />
                            <img src={ require('../images/sad.png')} alt="Sad Face" />
                            <p>mood</p>
                            <img src={ require('../images/sleep.png')} alt="Sleep icon" />
                            <p>the quality of your sleep</p>
                            <img src={ require('../images/eating.png')} alt="Eating icon" />
                            <p>how healthy you ate</p>
                            <img src={ require('../images/exercise.png')} alt="Exercise icon" />
                            <p>if you got some exercise or not</p>
                        </div>
                    </div>
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
                    <ul className="sectionHeader">Privacy
                        <li className="sectionContent">
                        Your info is yours. Your data is only accessible via your secure login<br/>
                        <img src={ require('../images/padlock.png')} alt="Lock" />
                        </li>
                    </ul>
                </section>

                <section className="section6">
                    <ul className="sectionHeader">Login
                        <li className="sectionContent">
                            <Login />
                        </li>
                    </ul>
                </section>

                <section className="homeFooter">
                    Copyright 2018, <a href="http://www.laurajodz.com" className="port" target="_blank" rel="noopener noreferrer">Laura Jodz</a><br/>
                    <a href="https://github.com/laurajodz" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square" id="git"></i></a>
                    <a href="https://www.linkedin.com/in/laurajodz" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" id="linked"></i></a>
                    <p className="icons">Icons made by <a href="https://www.flaticon.com/authors/freepik" className="icons" target="_blank" rel="noopener noreferrer">Freepik</a>, <a href="http://www.baianat.com/" className="icons" target="_blank" rel="noopener noreferrer">Baianet</a>, Gregor Cresnar, and Cursor Creative from <a href="http://www.flaticon.com" className="icons" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p>
                </section>

            </section>

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
