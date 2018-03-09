import React from 'react';
import DeleteDayData from './delete-day-data';
import EditDayData from './edit-day-data';
// import './calendar-day.css';


export default function CalendarDay(props) {

    const day = props.day;
    const mood = props.mood;
    const sleep = props.sleep;
    const eating = props.eating;
    const exercise = props.exercise;
    const notes = props.notes;

    render() {
        return (

            <div className="calendar-day">

                <div className="entry">
                    <h1>{day}</h1>
                    <h2>Mood Level: {mood} out of 10</h2>
                    <h3>Hours of Sleep Last night: {sleep}</h3>
                    <h3>Healthy Eating Level: {eating} out of 5</h3>
                    <h3>Exercise Today: {exercise}</h3>
                    <h3>Notes: {notes}</h3>
                </div>

                <button
                    className="edit-button"
                    // onClick={() => this.setEditing(true)}>
                >
                    Edit //go to edit-day-data
                </button>

                <button
                    className="delete-button"
                    // onClick={() => this.setEditing(true)}>
                >
                    Delete  //go to delete-day-data
                </button>

                <button
                    className="back-button"
                    // onClick={() => this.setEditing(true)}>
                >
                    Back  //go to calendar
                </button>

            </div>
    );
  }
}

export default CalendarDay;
