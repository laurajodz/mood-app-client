import React from 'react';

import './add-entry-card.css';

export default function AddEntryCard(props) {

    // let dateRaw = {props.date};
    // let dateDisplay = dateRaw.toDateString().format('MMM D');
    //
    // let moodTypeArray = {props.moodTypes};
    // let moodTypeDisplay = moodTypeArray.join(", ");

    return (

        <div className="add-entry-card">
            <p>Date: {props.date}</p>
            <p>Mood: {props.mood} out of 5</p>
            <p>Description: {props.moodTypes}</p>
            <p>Sleep: {props.sleep} out of 5</p>
            <p>Healthy Eating: {props.eating} out of 5</p>
            <p>Exercise: {props.exercise}</p>
            <p>Notes: {props.notes}</p>
            <button className="editButton">edit</button>
        </div>
    );
}
