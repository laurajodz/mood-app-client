import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addMood, addMoodTypes} from '../actions/index';

import './mood-entry.css';

export class MoodEntry extends Component{

    selectMood(mood){
        this.props.dispatch(addMood(mood));
    }

    selectMoodTypes(moodTypes){
        this.props.dispatch(addMoodTypes(moodTypes));
    }

    render() {
        return (
            <div className="mood">

                <h1>First, rate your mood. Overall, how did you feel today?</h1>

                <ul className="choices">

                    <li className="moods">
                        <input type="radio" id="mood1" className="hide"
                         name="mood" value="1" onClick={() => this.selectMood(1)} />
                        <label htmlFor="mood1"><i className="fa fa-fw fa-circle" id="red"></i>bad</label>
                    </li>
                    <li className="moods">
                        <input type="radio" id="mood2" className="hide"
                         name="mood" value="2" onClick={() => this.selectMood(2)} />
                        <label htmlFor="mood2"><i className="fa fa-fw fa-circle" id="orange"></i>meh</label>
                    </li>
                    <li className="moods">
                        <input type="radio" id="mood3" className="hide"
                         name="mood" value="3" onClick={() => this.selectMood(3)} />
                        <label htmlFor="mood3"><i className="fa fa-fw fa-circle" id="yellow"></i>okay</label>
                    </li>
                    <li className="moods">
                        <input type="radio" id="mood4" className="hide"
                         name="mood" value="4" onClick={() => this.selectMood(4)} />
                        <label htmlFor="mood4"><i className="fa fa-fw fa-circle" id="chartreuse"></i>good</label>
                    </li>
                    <li className="moods">
                        <input type="radio" id="mood5" className="hide"
                         name="mood" value="5" onClick={() => this.selectMood(5)} />
                        <label htmlFor="mood5"><i className="fa fa-fw fa-circle" id="green"></i>great</label>
                    </li>

                </ul>

                <h1>Next, what words would you use to describe your mood today?</h1>

                <ul className="types">

                    <li className="moodTypeItem">
                        <input type="checkbox" id="happy" name="moodType" value="happy" onChange={() => this.selectMoodTypes('happy')} />
                        <label htmlFor="happy">happy</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="excited" name="moodType" value="excited" onChange={() => this.selectMoodTypes('excited')} />
                        <label htmlFor="excited">excited</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="optimistic" name="moodType" value="optimistic" onChange={() => this.selectMoodTypes('optimistic')} />
                        <label htmlFor="optimistic">optimistic</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="relaxed" name="moodType" value="relaxed" onChange={() => this.selectMoodTypes('relaxed')} />
                        <label htmlFor="relaxed">relaxed</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="great" name="moodType" value="great" onChange={() => this.selectMoodTypes('great')} />
                        <label htmlFor="great">great</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="silly" name="moodType" value="silly" onChange={() => this.selectMoodTypes('silly')} />
                        <label htmlFor="silly">silly</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="energetic" name="moodType" value="energetic" onChange={() => this.selectMoodTypes('energetic')} />
                        <label htmlFor="energetic">energetic</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="sad" name="moodType" value="sad" onChange={() => this.selectMoodTypes('sad')} />
                        <label htmlFor="sad">sad</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="angry" name="moodType" value="angry" onChange={() => this.selectMoodTypes('angry')} />
                        <label htmlFor="angry">angry</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="restless" name="moodType" value="restless" onChange={() => this.selectMoodTypes('restless')} />
                        <label htmlFor="restless">restless</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="nervous" name="moodType" value="nervous" onChange={() => this.selectMoodTypes('nervous')} />
                        <label htmlFor="nervous">nervous</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="pessimistic" name="moodType" value="pessimistic" onChange={() => this.selectMoodTypes('pessimistic')} />
                        <label htmlFor="pessimistic">pessimistic</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="bad" name="moodType" value="bad" onChange={() => this.selectMoodTypes('bad')} />
                        <label htmlFor="bad">bad</label>
                    </li>

                    <li className="moodTypeItem">
                        <input type="checkbox" id="irritated" name="moodType" value="irritated" onChange={() => this.selectMoodTypes('irritated')} />
                        <label htmlFor="irritated">irritated</label>
                    </li>

                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    mood: state.entry.newEntry.mood,
    moodTypes: state.entry.newEntry.moodTypes
});

export default connect(mapStateToProps)(MoodEntry);
