import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addEntry} from '../actions';

import './done.css';

export class Done extends Component{

    render() {

        let moodDescriptionValue = this.props.newEntry.mood;
        let moodDescription;

        let moodTypesDescriptionValue = this.props.newEntry.moodTypes;
        let moodTypesDescription;

        let sleepDescriptionValue = this.props.newEntry.sleep;
        let sleepDescription;

        let eatingDescriptionValue = this.props.newEntry.eating;
        let eatingDescription;

        let exerciseDescriptionValue = this.props.newEntry.exercise;
        let exerciseDescription;

        let notesDescriptionValue = this.props.newEntry.notes;
        let notesDescription;

        if (moodDescriptionValue == null) {
            moodDescription = "not entered";
        } else if (moodDescriptionValue === 5) {
            moodDescription = "great";
        } else if (moodDescriptionValue === 4) {
            moodDescription = "good";
        } else if (moodDescriptionValue === 3) {
            moodDescription = "okay";
        } else if (moodDescriptionValue === 2) {
            moodDescription = "meh";
        } else if (moodDescriptionValue === 1) {
            moodDescription = "bad";
        }

        if (moodTypesDescriptionValue.length === 0) {
            moodTypesDescription = "not entered";
        } else if (moodTypesDescriptionValue !== null) {
            moodTypesDescription = moodTypesDescriptionValue.join(", ");
        }

        if (sleepDescriptionValue == null) {
            sleepDescription = "not entered";
        } else if (sleepDescriptionValue === 5) {
            sleepDescription = "great";
        } else if (sleepDescriptionValue === 4) {
            sleepDescription = "good";
        } else if (sleepDescriptionValue === 3) {
            sleepDescription = "okay";
        } else if (sleepDescriptionValue === 2) {
            sleepDescription = "meh";
        } else if (sleepDescriptionValue === 1) {
            sleepDescription = "bad";
        }

        if (eatingDescriptionValue == null) {
            eatingDescription = "not entered";
        } else if (eatingDescriptionValue === 5) {
            eatingDescription = "great";
        } else if (eatingDescriptionValue === 4) {
            eatingDescription = "good";
        } else if (eatingDescriptionValue === 3) {
            eatingDescription = "okay";
        } else if (eatingDescriptionValue === 2) {
            eatingDescription = "meh";
        } else if (eatingDescriptionValue === 1) {
            eatingDescription = "bad";
        }

        if (exerciseDescriptionValue == null) {
            exerciseDescription = "not entered";
        } else if (exerciseDescriptionValue !== null) {
            exerciseDescription = exerciseDescriptionValue;
        }

        if (notesDescriptionValue == null) {
            notesDescription = "not entered";
          } else if (notesDescriptionValue !== null) {
              notesDescription = notesDescriptionValue;
          }

        return (
            <div className="done">

                <h1>Your entry:</h1>

                <h2 className="box">
                    <img src={ require('../images/happy.png')} alt="Happy Face" />
                    <img src={ require('../images/ok.png')} alt="OK Face" />
                    <img src={ require('../images/sad.png')} alt="Sad Face" />
                    <p>{moodDescription}</p>
                    <p> - - - - - - </p>
                    <p>Your Descriptions:</p>
                    <p>{moodTypesDescription}</p>
                </h2>
                <h2 className="box">
                    <img src={ require('../images/sleep.png')} alt="Sleep icon" />
                    <p>{sleepDescription}</p>
                </h2>
                <h2 className="box">
                    <img src={ require('../images/eating.png')} alt="Eating icon" />
                    <p>{eatingDescription}</p>
                </h2>
                <h2 className="box">
                    <img src={ require('../images/exercise.png')} alt="Exercise icon" />
                    <p>{exerciseDescription}</p>
                </h2>
                <h2 className="box">Notes <br/>
                {notesDescription}
                </h2>

                <button
                    className="return-button" onClick={() => this.props.dispatch(addEntry())}
                >
                    <Link to="/dashboard">Save Entry</Link>
                </button>

                    alert: ('Great! You are done. Returning to Dashboard')

                <p className="icons">Icons made by <a href="https://www.flaticon.com/authors/freepik" className="icons" target="_blank" rel="noopener noreferrer">Freepik</a>, <a href="http://www.baianat.com/" className="icons" target="_blank" rel="noopener noreferrer">Baianet</a>, and Cursor Creative from <a href="http://www.flaticon.com" className="icons" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    newEntry: state.entry.newEntry,
})

export default connect(mapStateToProps)(Done);
