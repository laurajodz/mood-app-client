import React from 'react';
import {Link} from 'react-router-dom';

// import {connect} from 'react-redux';
import {addEntry} from '../actions';

import './notes-entry.css';

export default function NotesEntry(props) {

    // const notes = props.notes;

    return (
        <div className="notes">

            <div class="progress-bar">
                <div class="progress-bar-gray round">
                    <div class="progress-bar-blue round">100%</div>
                </div>
            </div>

            <h1>Enter any notes for today. What is going on in your world?</h1>

            <textarea autofocus>
            </textarea>

            <button
                className="finish-button"
                type="submit"
                onClick={() =>
                    props.dispatch(addEntry())
                }>
                <Link to="/form-entry/done">Finish!</Link>  {/*onSubmit, capture input, make post call to api, and go to done*/}
            </button>

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

        </div>
    );

}
