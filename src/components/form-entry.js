import React from 'react';

import MoodEntry from './mood-entry';
import SleepEntry from './sleep-entry';
import EatingEntry from './eating-entry';
import ExerciseEntry from './exercise-entry';
import NotesEntry from './notes-entry';
import ReviewEntry from './review-entry';
import Done from './done';

import StepZilla from 'react-stepzilla';

import './form-entry.css';
import './stepzilla.css';

export default function FormEntry(props) {

    const steps = [
        {name: 'Mood', component: <MoodEntry />},
        {name: 'Sleep', component: <SleepEntry />},
        {name: 'Eating', component: <EatingEntry />},
        {name: 'Exercise', component: <ExerciseEntry />},
        {name: 'Notes', component: <NotesEntry />},
        {name: 'Review', component: <ReviewEntry/>},
        {name: 'Done!', component: <Done />}
    ]

    var today = new Date().toDateString();

    return (

        <section className="form-entry">

            <section className="logoForm">
                Mood Today
            </section>

            <section>
                <h1>Daily Entry for</h1>
                <h2>{today}</h2>
            </section>

            <section className='step-progress'>
                <StepZilla steps={steps} prevBtnOnLastStep={false} nextTextOnFinalActionStep={"Save Entry"}/>
            </section>

        </section>

    );

}
