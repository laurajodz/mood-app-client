import React from 'react';

import {Link} from 'react-router-dom';

// import './calendar-day.css';

export default function CalendarDay(props) {

    const day = props.day;
    const mood = props.mood;
    const sleep = props.sleep;
    const eating = props.eating;
    const exercise = props.exercise;
    const notes = props.notes;

    return (

        <div className="calendar-day">

            <div className="entry">
                <h1>Date: {day} </h1>
                <h2>Mood Level: {mood} out of 10</h2>
                <h3>Hours of Sleep Last night: {sleep} hours</h3>
                <h3>Healthy Eating Level: {eating} out of 5</h3>
                <h3>Exercise Today: {exercise}</h3>
                <h3>Notes: {notes}</h3>
            </div>

            <button
                className="edit-button"
            >
                <Link to="/edit-day-entry">Edit</Link> {/* onClick, go to edit-day-data*/}
            </button>

            <button
                className="delete-button"
            >
                <Link to="/delete-day-entry">Delete</Link>  {/*onClick, go to delete-day-data*/}
            </button>

            <button
                className="back-button"
            >
                <Link to="/calendar">Back</Link>  {/*onClick, go to calendar*/}
            </button>

        </div>
    );

}
