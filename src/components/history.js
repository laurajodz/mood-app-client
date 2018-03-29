import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
// import AddEntryCard from './add-entry-card';
import HistoryHeader from './history-header';
import {fetchEntries} from '../actions';

import './history.css';

export class History extends Component{

    componentDidMount() {
        this.props.dispatch(fetchEntries());
    }

    render() {

        const entries = this.props.entries.map((entry, index) => (
            <li className="entry" key={index}>
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
            </li>
        ));

        return (
            <div className="history">

                <section>
                    <HistoryHeader />
                </section>

                <h1>MY HISTORY</h1>

                <ul className="entries">
                    {entries}
                </ul>

                <section>
                    Copyright 2018, <a href="http://www.laurajodz.com" className="port" target="_blank" rel="noopener noreferrer">Laura Jodz</a><br/>
                    <a href="https://github.com/laurajodz" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square" id="git"></i></a>
                    <a href="https://www.linkedin.com/in/laurajodz" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" id="linked"></i></a>
                </section>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    entries: state.entry.entries,
    error: state.entry.error
});

export default connect(mapStateToProps)(History);
