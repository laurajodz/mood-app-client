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
                <li><p className="homeLogo">MOOD TODAY<br/><span className="subtitle">Your Mood Tracking App</span></p></li>
            </ul>

            <section className="homeBody">

                <section className="section1">
                    <ul className="sectionHeader">
                        <li className="about1"><span className="orange">Mood Today</span> is on a mission to help <br/> make sense of our mood patterns</li>
                        <li className="about2">RECORD YOUR MOODS</li>
                        <img src={ require('../images/arrow.png')} alt="Down arrow" />
                        <li className="about2">LOOK FOR PATTERNS</li>
                        <img src={ require('../images/arrow.png')} alt="Down arrow" />
                        <li className="about2">GAIN INSIGHTS</li>
                        <li className="about3">Many things in life are not under our control, yet they can have great effects on our daily mood. However, maybe there is something we COULD do to influence our mood, like making <span className="orange">a small lifestyle change</span>. For some of us it could be as simple as eating better or getting more sleep. But which change could have THE MOST impact? Mood Today has everything you need to get started on your path to <span className="orange">understanding your moods</span> and the relationship between your mood and your daily habits.</li>
                    </ul>
                </section>

                <section className="section2">
                    <div className="sectionHeader">Record your daily mood
                        <div className="sectionContent">
                            <p>Every day, rate and describe your</p>
                            <img src={ require('../images/happy.png')} alt="Happy Face" />
                            <img src={ require('../images/ok.png')} alt="OK Face" />
                            <img src={ require('../images/sad.png')} alt="Sad Face" />
                            <p>MOOD</p>
                            <img src={ require('../images/sleep.png')} alt="Sleep icon" />
                            <p>QUALITY OF YOUR SLEEP</p>
                            <img src={ require('../images/eating.png')} alt="Eating icon" />
                            <p>HOW HEALTHY YOU ATE</p>
                            <img src={ require('../images/exercise.png')} alt="Exercise icon" />
                            <p>IF YOU EXERCISED</p>
                            <img src={ require('../images/notes.png')} alt="Notes icon" />
                            <p>NOTES ABOUT YOUR DAY</p>
                        </div>
                    </div>
                </section>

                <section className="section3">
                    <ul className="sectionHeader">See your history
                        <li className="sectionContent">
                        Access your mood history<br/>
                        Review your previous mood entries<br/>
                        <img src={ require('../images/historyIphoneSmall.png')} alt="History" />
                        </li>
                    </ul>
                </section>

                <section className="section4">
                    <ul className="sectionHeader">Data analytics
                        <li className="sectionContent">
                        Examine your mood records via charts and graphs<br/>
                        If patterns in your data emerge, perhaps a greater understanding of your moods is in reach<br/>
                        <img src={ require('../images/dashboard.png')} alt="Analytics" />
                        </li>
                    </ul>
                </section>

                <section className="section5">
                    <ul className="sectionHeader">Privacy
                        <li className="sectionContent">
                        <strong>Your info is yours.</strong> Your data is only accessible via your secure login<br/>
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
                    <p className="icons">Icons made by <a href="https://www.flaticon.com/authors/freepik" className="icons" target="_blank" rel="noopener noreferrer">Freepik</a>, <a href="http://www.baianat.com/" className="icons" target="_blank" rel="noopener noreferrer">Baianet</a>, Gregor Cresnar, Dave Gandy, and Cursor Creative from <a href="http://www.flaticon.com" className="icons" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p>
                </section>

            </section>

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
