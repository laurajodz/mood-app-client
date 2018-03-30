import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchEntry } from '../actions';

import './add-entry-card.css';
import moment from 'moment';

export class AddEntryCard extends Component{

    selectEntry(entry){
        this.props.dispatch(fetchEntry());
    }

    render() {

        let dateDisplay = moment(this.props.date).format('dddd, MMMM D, YYYY');

        let moodDescriptionValue = this.props.mood;
        let moodDescription;

        let moodTypesDescriptionValue = this.props.moodTypes;
        let moodTypesDescription;

        let sleepDescriptionValue = this.props.sleep;
        let sleepDescription;

        let eatingDescriptionValue = this.props.eating;
        let eatingDescription;

        let exerciseDescriptionValue = this.props.exercise;
        let exerciseDescription;

        let notesDescriptionValue = this.props.notes;
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

            <div className="add-entry-card">
                <p>Date <span className="blue">{dateDisplay}</span></p>
                <p>Mood <span className="blue">{moodDescription}</span></p>
                <p>Description <span className="blue">{moodTypesDescription}</span></p>
                <p>Sleep <span className="blue">{sleepDescription}</span></p>
                <p>Healthy Eating <span className="blue">{eatingDescription}</span></p>
                <p>Exercise <span className="blue">{exerciseDescription}</span></p>
                <p className="notesMargin">Notes <span className="blue">{notesDescription}</span></p>
                <p
                    className="edit-entry-link"
                    onClick={() =>
                    this.selectEntry(this.props._id)}
                >
                    Edit
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    entries: state.entry.entries
});

export default connect(mapStateToProps)(AddEntryCard);
