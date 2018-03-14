import React from 'react';
// import {reduxForm, Field} from 'redux-form';  --> I would like to wrap the routes below in a form

import MoodEntry from './mood-entry';
import SleepEntry from './sleep-entry';
import EatingEntry from './eating-entry';
import ExerciseEntry from './exercise-entry';
import NotesEntry from './notes-entry';
import Done from './done';

// import store from '../store';
// import {addEntry} from '../actions';

import {Route} from 'react-router-dom';

// import './form-entry.css';

export default function FormEntry(props) {

    const day = props.day;

    return (

        <form className="form-entry" onSubmit={"placeholder"}>

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

            {/*}<section>
                console.log(store.getState());

                store.dispatch(addEntry(
                    {date: 'January 8, 2018',
                    mood: 5,
                    sleep: 5,
                    eating: 5,
                    exercise: 'Yes',
                    notes: 'Went swimming'}
                ));

                console.log(store.getState());
            </section>*/}

        </form>

    );

}
