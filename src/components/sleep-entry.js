import React from 'react';
import {Link} from 'react-router-dom';

import './sleep-entry.css';

export default function SleepEntry(props) {

    // const sleep = props.sleep;

    return (
        <div className="sleep">

            <div class="progress-bar">
                <div class="progress-bar-gray round">
                    <div class="progress-bar-blue round">40%</div>
                </div>
            </div>

            <h1>What was the quality level of your sleep last night?</h1>

                <div className="slidecontainer">
                    <input type="range" min="1" max="5" value="3" className="slider" id="myRange" />
                </div>

                <p>A slider from 1 to 5</p>

            <button
                className="previous-button"
            >
                <Link to="/form-entry">Previous</Link>
            </button>

            <button
                className="next-button"
            >
                <Link to="/form-entry/eating-entry">Next</Link>  {/*onClick, capture input and go to eating entry*/}
            </button>

            <button
                className="cancel-button"
            >
                <Link to="/dashboard">Cancel</Link>
            </button>

        </div>
    );

}
