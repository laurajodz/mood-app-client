import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {editEntry} from '../actions/index';

import './add-entry-card.css';

export class AddEntryCard extends Component{

    editThisEntry(props){
        this.props.dispatch(editEntry(props));
    }

    // let dateRaw = {props.date};
    // let dateDisplay = dateRaw.toDateString().format('MMM D');
    //
    // let moodTypeArray = {props.moodTypes};
    // let moodTypeDisplay = moodTypeArray.join(", ");

    render() {

        return (

            <div className="add-entry-card">
                <p>Date: {this.props.date}</p>
                <p>Mood: {this.props.mood} out of 5</p>
                <p>Description: {this.props.moodTypes}</p>
                <p>Sleep: {this.props.sleep} out of 5</p>
                <p>Healthy Eating: {this.props.eating} out of 5</p>
                <p>Exercise: {this.props.exercise}</p>
                <p>Notes: {this.props.notes}</p>
                <Link to="/form-entry"
                    className="edit-entry-link"
                    onClick={() => this.editThisEntry(this.props)}
                >
                    edit
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    entries: state.entry.entries
});

export default connect(mapStateToProps)(AddEntryCard);
