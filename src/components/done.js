import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addEntry} from '../actions/index';

// import './done.css';

export function Done(props) {

    let moodDescriptionValue = props.newEntry.mood;
    let moodDescription;

    let sleepDescriptionValue = props.newEntry.sleep;
    let sleepDescription;

    let eatingDescriptionValue = props.newEntry.eating;
    let eatingDescription;

    if (moodDescriptionValue == null) {
        moodDescription = " ";
    } else if (moodDescriptionValue === 5) {
        moodDescription = "Great";
    } else if (moodDescriptionValue === 4) {
        moodDescription = "Good";
    } else if (moodDescriptionValue === 3) {
        moodDescription = "OK";
    } else if (moodDescriptionValue === 2) {
        moodDescription = "Meh";
    } else if (moodDescriptionValue === 1) {
        moodDescription = "Lousy";
    }

    if (sleepDescriptionValue == null) {
        sleepDescription = " ";
    } else if (sleepDescriptionValue === 5) {
        sleepDescription = "Great";
    } else if (sleepDescriptionValue === 4) {
        sleepDescription = "Good";
    } else if (sleepDescriptionValue === 3) {
        sleepDescription = "OK";
    } else if (sleepDescriptionValue === 2) {
        sleepDescription = "Meh";
    } else if (sleepDescriptionValue === 1) {
        sleepDescription = "Lousy";
    }

    if (eatingDescriptionValue == null) {
        eatingDescription = " ";
    } else if (eatingDescriptionValue === 5) {
        eatingDescription = "Great";
    } else if (eatingDescriptionValue === 4) {
        eatingDescription = "Good";
    } else if (eatingDescriptionValue === 3) {
        eatingDescription = "OK";
    } else if (eatingDescriptionValue === 2) {
        eatingDescription = "Meh";
    } else if (eatingDescriptionValue === 1) {
        eatingDescription = "Lousy";
    }

    return (
        <div className="done">

            <h1>Your entry:</h1>

            <h2>Mood: {moodDescription}</h2>
            <h2>Sleep: {sleepDescription}</h2>
            <h2>Eating: {eatingDescription}</h2>
            <h2>Exercise: {props.newEntry.exercise}</h2>
            <h2>Notes: {props.newEntry.notes}</h2>

            <button
                className="return-button" onClick={props.dispatch(addEntry())}
            >
                <Link to="/dashboard">Save Entry</Link>
            </button>

                alert: ('Great! You are done. Returning to Dashboard')
        </div>
    )
}

const mapStateToProps = state => ({
    newEntry: state.entry.newEntry
})

export default connect(mapStateToProps)(Done);
