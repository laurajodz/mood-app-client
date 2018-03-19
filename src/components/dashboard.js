import React, {Component} from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import {Link} from 'react-router-dom';

import './dashboard.css';

export default class Dashboard extends Component{

    // const data = [
    //     {date: 'January 1, 2018',
    //     mood: 5,
    //     moodTypes: ['happy', 'relaxed'],
    //     sleep: 5,
    //     eating: 2,
    //     exercise: 'No',
    //     notes: 'Visit with family'
    //     }, {
    //     date: 'January 2, 2018',
    //     mood: 4,
    //     moodTypes: ['great'],
    //     sleep: 4,
    //     eating: 5,
    //     exercise: 'Yes',
    //     notes: 'Made progress at work on project'
    //     }, {
    //     date: 'January 3, 2018',
    //     mood: 3,
    //     moodTypes: ['anxious'],
    //     sleep: 3,
    //     eating: 3,
    //     exercise: 'No',
    //     notes: ''
    //     }, {
    //     date: 'January 4, 2018',
    //     mood: 2,
    //     moodTypes: ['irritated', 'angry'],
    //     sleep: 5,
    //     eating: 4,
    //     exercise: 'Yes',
    //     notes: 'Very cold today'
    //     }, {
    //     date: 'January 5, 2018',
    //     mood: 5,
    //     moodTypes: ['excited'],
    //     sleep: 5,
    //     eating: 2,
    //     exercise: 'No',
    //     notes: 'Drinks with friends'
    //     }, {
    //     date: 'January 6, 2018',
    //     mood: 4,
    //     moodTypes: ['happy'],
    //     sleep: 5,
    //     eating: 3,
    //     exercise: 'No',
    //     notes: 'Day trip to the country'
    //     }, {
    //     date: 'January 7, 2018',
    //     mood: 4,
    //     moodTypes: ['great'],
    //     sleep: 5,
    //     eating: 4,
    //     exercise: 'Yes',
    //     notes: ''}
    // ];

    render() {
        return (

            <div className="dashboard">

                <section>
                    <Link to="/home" className="home">Home</Link>
                    <Link to="/history" className="history">My History</Link>
                </section>

                <section>
                    <h1>My Dashboard</h1>
                </section>

                <section>
                    <button className="start-entry-button">
                        <Link to="/form-entry">Enter Mood for Today</Link>
                    </button>
                </section>

                <section>
                    <h1>Analytics</h1>
                </section>

                <section>
                    <VictoryChart>
                        <VictoryBar

                        />
                    </VictoryChart>
                </section>



            </div>

        );
    }
}
