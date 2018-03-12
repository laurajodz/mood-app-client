import React from 'react';

import MoodEntry from './mood-entry';
import SleepEntry from './sleep-entry';
import EatingEntry from './eating-entry';
import ExerciseEntry from './exercise-entry';
import NotesEntry from './notes-entry';
import Done from './done';

import {Route} from 'react-router-dom';

// import './form-entry.css';

export default function FormEntry(props) {

    const day = props.day;

    return (

        <div className="form-entry">

            <section>
                <h1>Entry for {day}</h1>
            </section>

            <section>
                <Route exact path='/form-entry' component={MoodEntry} />
                <Route exact path='/form-entry/sleep-entry' component={SleepEntry} />
                <Route exact path='/form-entry/eating-entry' component={EatingEntry} />
                <Route exact path='/form-entry/exercise-entry' component={ExerciseEntry} />
                <Route exact path='/form-entry/notes-entry' component={NotesEntry} />
                <Route exact path='/form-entry/done' component={Done} />
            </section>

        </div>

    );

}
