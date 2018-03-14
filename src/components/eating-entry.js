import React from 'react';
import {Link} from 'react-router-dom';

import './eating-entry.css';

export default function EatingEntry(props) {

    // const eating = props.eating;

    return (
        <div className="eating">

            <div class="progress-bar">
                <div class="progress-bar-gray round">
                    <div class="progress-bar-blue round">60%</div>
                </div>
            </div>

            <h1>How healthy did you eat today?</h1>

                <div className="slidecontainer">
                    <input type="range" min="1" max="5" value="3" className="slider" id="myRange" />
                </div>

                <p>A slider from 1 to 5</p>

            <button
                className="previous-button"
            >
                <Link to="/form-entry/sleep-entry">Previous</Link>
            </button>

            <button
                className="next-button"
            >
                <Link to="/form-entry/exercise-entry">Next</Link>  {/*onClick, capture input and go to exercise entry*/}
            </button>

            <button
                className="cancel-button"
            >
                <Link to="/dashboard">Cancel</Link>
            </button>

        </div>
    );

}
