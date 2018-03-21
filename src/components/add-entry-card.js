import React from 'react';

// import './display-entries.css';

export default function AddEntryCard(props) {
    constructor(props)
        super(props);

    render() {
        return (
            <div className="add-entry-card">
                <h1>Date: {props.entries.date}</h1>
                <h1>Mood: {props.entries.mood}</h1>
                <h1>Description: {props.entries.moodTypes}</h1>
                <h2>Sleep: {props.entries.sleep}</h2>
                <h2>Healthy Eating: {props.entries.eating}</h2>
                <h2>Exercise: {props.entries.exercise}</h2>
                <h2>Notes: {props.entries.notes}</h2>
            </div>
        );
    }
}
