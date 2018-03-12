import React from 'react';
import Calendar from './calendar';
import MoodEntry from './mood-entry';
import SleepEntry from './sleep-entry';
import EatingEntry from './eating-entry';
import ExerciseEntry from './exercise-entry';
import NotesEntry from './notes-entry';
import Done from './done';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// import './dashboard.css';

export default function Dashboard(props) {

    return (
        <Router>
            <div className="dashboard">

                <section>
                    <Link to="/home">Home</Link>
                    <Link to="/calendar">My Calendar</Link>
                </section>

                <section>
                    <h1>My Dashboard</h1>
                </section>

                <section>
                    <Route exact path='/mood-entry' component={MoodEntry} />
                    <Route exact path='/sleep-entry' component={SleepEntry} />
                    <Route exact path='/eating-entry' component={EatingEntry} />
                    <Route exact path='/exercise-entry' component={ExerciseEntry} />
                    <Route exact path='/notes-entry' component={NotesEntry} />
                    <Route exact path='/done' component={Done} />
                </section>

                <section>
                    <button className="start-entry-button">
                        <Link to="/mood-entry">Enter Mood for Today</Link>  {/* add OnClick event, go to mood entry */}
                    </button>
                </section>

                <section>
                    Analytics
                </section>

            </div>
        </Router>
    );

}
