import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addEntry} from '../actions';

// import './done.css';

export class Done extends Component{

    render() {

        let moodDescriptionValue = this.props.newEntry.mood;
        let moodDescription;

        let sleepDescriptionValue = this.props.newEntry.sleep;
        let sleepDescription;

        let eatingDescriptionValue = this.props.newEntry.eating;
        let eatingDescription;

        if (moodDescriptionValue == null) {
            moodDescription = " ";
        } else if (moodDescriptionValue === 5) {
            moodDescription = "Great";
        } else if (moodDescriptionValue === 4) {
            moodDescription = "Good";
        } else if (moodDescriptionValue === 3) {
            moodDescription = "Okay";
        } else if (moodDescriptionValue === 2) {
            moodDescription = "Meh";
        } else if (moodDescriptionValue === 1) {
            moodDescription = "Bad";
        }

        if (sleepDescriptionValue == null) {
            sleepDescription = " ";
        } else if (sleepDescriptionValue === 5) {
            sleepDescription = "Great";
        } else if (sleepDescriptionValue === 4) {
            sleepDescription = "Good";
        } else if (sleepDescriptionValue === 3) {
            sleepDescription = "Okay";
        } else if (sleepDescriptionValue === 2) {
            sleepDescription = "Meh";
        } else if (sleepDescriptionValue === 1) {
            sleepDescription = "Bad";
        }

        if (eatingDescriptionValue == null) {
            eatingDescription = " ";
        } else if (eatingDescriptionValue === 5) {
            eatingDescription = "Great";
        } else if (eatingDescriptionValue === 4) {
            eatingDescription = "Good";
        } else if (eatingDescriptionValue === 3) {
            eatingDescription = "Okay";
        } else if (eatingDescriptionValue === 2) {
            eatingDescription = "Meh";
        } else if (eatingDescriptionValue === 1) {
            eatingDescription = "Bad";
        }

        return (
            <div className="done">

                <h1>Your entry:</h1>

                <h2>Mood: {moodDescription}</h2>
                <h2>Sleep: {sleepDescription}</h2>
                <h2>Eating: {eatingDescription}</h2>
                <h2>Exercise: {this.props.newEntry.exercise}</h2>
                <h2>Notes: {this.props.newEntry.notes}</h2>

                <button
                    className="return-button" onClick={() => this.props.dispatch(addEntry())}
                >
                    <Link to="/dashboard">Save Entry</Link>
                </button>

                    alert: ('Great! You are done. Returning to Dashboard')
            </div>
        )
    }
}

const mapStateToProps = state => ({
    newEntry: state.entry.newEntry
})

export default connect(mapStateToProps)(Done);
