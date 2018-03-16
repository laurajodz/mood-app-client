import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

                <textarea autoFocus>
                </textarea>

                <p>

                    <button
                        className="finish-button"
                        type="submit"
                        onClick={() => this.selectNotes()} 
                    >
                        <Link to="/form-entry/done">Finish!</Link>  {/*onSubmit, capture input, make post call to api, and go to done*/}
                    </button>

                </p>

                <p>

                    <button
                        className="previous-button"
                    >
                        <Link to="/form-entry/exercise-entry">Previous</Link>

                    </button>

                    <button
                        className="cancel-button"
                    >
                        <Link to="/dashboard">Cancel</Link>
                    </button>

                </p>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.entry.newEntry.notes
});

export default connect(mapStateToProps)(NotesEntry);
