import React from 'react';
import {Link} from 'react-router-dom';

import './mood-entry.css';

export default function MoodEntry(props) {

    // const mood = props.mood;

    return (
        <div className="mood">

            <div class="progress-bar">
                <div class="progress-bar-gray round">
                    <div class="progress-bar-blue round">20%</div>
                </div>
            </div>

            <h1>First, rate your mood. Overall, how did you feel today?</h1>

                <div className="slidecontainer">
                    <input type="range" min="1" max="5" value="3" className="slider" id="myRange"/>
                </div>

                <p>A slider from 5 to 1 with colors or emojis</p>

            <h1>Next, what words would you use to describe your mood today?</h1>

                <div>
                    <input type="checkbox" id="happy" name="moodType" value="happy" />
                    <label htmlFor="happy">happy</label>
                </div>
                <div>
                    <input type="checkbox" id="excited" name="moodType" value="excited" />
                    <label htmlFor="excited">excited</label>
                </div>
                <div>
                    <input type="checkbox" id="content" name="moodType" value="content" />
                    <label htmlFor="content">content</label>
                </div>
                <div>
                    <input type="checkbox" id="relaxed" name="moodType" value="relaxed" />
                    <label htmlFor="relaxed">relaxed</label>
                </div>
                <div>
                    <input type="checkbox" id="alert" name="moodType" value="alert" />
                    <label htmlFor="alert">alert</label>
                </div>
                <div>
                    <input type="checkbox" id="great" name="moodType" value="great" />
                    <label htmlFor="great">great</label>
                </div>
                <div>
                    <input type="checkbox" id="peaceful" name="moodType" value="peaceful" />
                    <label htmlFor="peaceful">peaceful</label>
                </div>
                <div>
                    <input type="checkbox" id="silly" name="moodType" value="silly" />
                    <label htmlFor="silly">silly</label>
                </div>
                <div>
                    <input type="checkbox" id="giddy" name="moodType" value="giddy" />
                    <label htmlFor="giddy">giddy</label>
                </div>
                <div>
                    <input type="checkbox" id="energetic" name="moodType" value="energetic" />
                    <label htmlFor="energetic">energetic</label>
                </div>
                <div>
                    <input type="checkbox" id="sad" name="moodType" value="sad" />
                    <label htmlFor="sad">sad</label>
                </div>
                <div>
                    <input type="checkbox" id="angry" name="moodType" value="angry" />
                    <label htmlFor="angry">angry</label>
                </div>
                <div>
                    <input type="checkbox" id="agitated" name="moodType" value="agitated" />
                    <label htmlFor="agitated">agitated</label>
                </div>
                <div>
                    <input type="checkbox" id="sleepy" name="moodType" value="sleepy" />
                    <label htmlFor="sleepy">sleepy</label>
                </div>
                <div>
                    <input type="checkbox" id="restless" name="moodType" value="restless" />
                    <label htmlFor="restless">restless</label>
                </div>
                <div>
                    <input type="checkbox" id="nervous" name="moodType" value="nervous" />
                    <label htmlFor="nervous">nervous</label>
                </div>
                <div>
                    <input type="checkbox" id="tense" name="moodType" value="tense" />
                    <label htmlFor="tense">tense</label>
                </div>
                <div>
                    <input type="checkbox" id="bad" name="moodType" value="bad" />
                    <label htmlFor="bad">bad</label>
                </div>
                <div>
                    <input type="checkbox" id="anxious" name="moodType" value="anxious" />
                    <label htmlFor="anxious">anxious</label>
                </div>
                <div>
                    <input type="checkbox" id="irritated" name="moodType" value="irritated" />
                    <label htmlFor="irritated">irritated</label>
                </div>

            <button
                className="next-button"
            >
                <Link to="/form-entry/sleep-entry">Next</Link>  {/*onClick, capture input and go to sleep entry*/}
            </button>

            <button
                className="cancel-button"
            >
                <Link to="/dashboard">Cancel</Link>
            </button>

        </div>
    );

}
