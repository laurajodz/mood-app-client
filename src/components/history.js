import React from 'react';
import {Link} from 'react-router-dom';

// import './history.css';

export default function History(props) {

    const date = props.date;
    const mood = props.mood;
    const moodTypes = props.moodTypes;
    const sleep = props.sleep;
    const eating = props.eating;
    const exercise = props.exercise;
    const notes = props.notes;

    return (

        <div className="history">

            <section>
                <Link to="/dashboard">My Dashboard</Link>
            </section>

            <h1>My History</h1>

            <section>

                <div className="entry">
                    <h1>Date: {date} </h1>
                    <h2>Mood Level: {mood} out of 5</h2>
                    <h2>Descriptions: {moodTypes}</h2>
                    <h3>Sleep Quality Level Last Night: {sleep} out of 5</h3>
                    <h3>Healthy Eating Level: {eating} out of 5</h3>
                    <h3>Exercise Today: {exercise}</h3>
                    <h3>Notes: {notes}</h3>
                </div>

            </section>

        </div>
    );

}
