import React from 'react';
// import {reduxForm, Field} from 'redux-form';  --> I would like to wrap the routes below in a form

import MoodEntry from './mood-entry';
import SleepEntry from './sleep-entry';
import EatingEntry from './eating-entry';
import ExerciseEntry from './exercise-entry';
import NotesEntry from './notes-entry';
import Done from './done';

import StepZilla from 'react-stepzilla';

// import './form-entry.css';
import './stepzilla.css';

export default function FormEntry(props) {

    const steps = [
      {name: 'Mood', component: <MoodEntry />},
      {name: 'Sleep', component: <SleepEntry />},
      {name: 'Eating', component: <EatingEntry />},
      {name: 'Exercise', component: <ExerciseEntry />},
      {name: 'Notes', component: <NotesEntry />},
      {name: 'Done!', component: <Done />}
    ]

    return (

        <form className="form-entry">

            <section>
                <h1>Daily Entry for</h1>
                <h2>date</h2>
            </section>

            <section className='step-progress'>
                <StepZilla steps={steps} showNavigation={false}/>
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
