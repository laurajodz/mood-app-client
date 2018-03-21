import React from 'react';

// import './display-entries.css';

export default function AddEntryCard(props) {

        return (
            <div className="add-entry-card">
                <h1>Date: {props.date}</h1>
                <h1>Mood: {props.mood}</h1>
                <h1>Description: {props.moodTypes}</h1>
                <h2>Sleep: {props.sleep}</h2>
                <h2>Healthy Eating: {props.eating}</h2>
                <h2>Exercise: {props.exercise}</h2>
                <h2>Notes: {props.notes}</h2>
            </div>
        );
}
