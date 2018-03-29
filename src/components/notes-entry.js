import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNotes} from '../actions/index';

import './notes-entry.css';

export class NotesEntry extends Component{

    selectNotes(notes){
        this.props.dispatch(addNotes(notes));
    }

    render() {
        return (
            <div className="notes">

                <h1>Enter any notes for today. What is going on in your world?</h1>

                <textarea
                    autoFocus
                    onChange={(event) => this.selectNotes(event.target.value)}
                    defaultValue={this.props.notes}
                >
                </textarea>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.entry.newEntry.notes
});

export default connect(mapStateToProps)(NotesEntry);
