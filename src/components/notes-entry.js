import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// import './notes-entry.css';

export default function NotesEntry(props) {

    const notes = props.notes;

    return (
        <div className="notes">

            <h1>Enter any notes for today. What is going on in your world?</h1>

            <textarea autofocus>
            </textarea>

            <button
                className="finish-button"
            >
                <Link to="/done">Finish!</Link>  {/*onSubmit, capture input, make post call to api, and go to done*/}
            </button>

            <button
                className="previous-button"
            >
                <Link to="/exercise-entry">Previous</Link>

            </button>

            <button
                className="cancel-button"
            >
                <Link to="/dashboard">Cancel</Link>
            </button>

        </div>
    );

}
