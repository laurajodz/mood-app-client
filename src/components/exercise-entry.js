import React from 'react';
import {Link} from 'react-router-dom';

import './exercise-entry.css';

export default function ExerciseEntry(props) {

    // const exercise = props.exercise;

    return (
        <div className="exercise">

            <div class="progress-bar">
                <div class="progress-bar-gray round">
                    <div class="progress-bar-blue round">80%</div>
                </div>
            </div>

            <h1>Did you get 30 minutes of exercise today?</h1>

            <input type="radio" name="exercise" value="yes" /> Yes <br/>

            <input type="radio" name="exercise" value="no" /> No <br/>

            <button
                className="previous-button"
            >
                <Link to="/form-entry/eating-entry">Previous</Link>
            </button>

            <button
                className="next-button"
            >
                <Link to="/form-entry/notes-entry">Next</Link>  {/*onClick, capture input and go to notes entry*/}
            </button>

            <button
                className="cancel-button"
            >
                <Link to="/dashboard">Cancel</Link>
            </button>

        </div>
    );

}
