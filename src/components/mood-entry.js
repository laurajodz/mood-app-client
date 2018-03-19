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

                <section className="choices">

                    <div className="red">
                        <input type="radio" id="mood1"
                         name="mood" value="1" onClick={() => this.selectMood(1)} />
                        <label htmlFor="mood1">Lousy</label>
                    </div>
                    <div className="orange">
                        <input type="radio" id="mood2"
                         name="mood" value="2" onClick={() => this.selectMood(2)} />
                        <label htmlFor="mood2">Meh</label>
                    </div>
                    <div className="yellow">
                        <input type="radio" id="mood3"
                         name="mood" value="3" onClick={() => this.selectMood(3)} />
                        <label htmlFor="mood3">OK</label>
                    </div>
                    <div className="yellow-green">
                        <input type="radio" id="mood4"
                         name="mood" value="4" onClick={() => this.selectMood(4)} />
                        <label htmlFor="mood4">Good</label>
                    </div>
                    <div className="green">
                        <input type="radio" id="mood5"
                         name="mood" value="5" onClick={() => this.selectMood(5)} />
                        <label htmlFor="mood5">Great</label>
                    </div>

                </section>

                <h1>Next, what words would you use to describe your mood today?</h1>

                <section className="types">

                    <input type="checkbox" id="happy" name="moodType" value="happy" onChange={() => this.selectMoodTypes('happy')} />
                    <label htmlFor="happy">happy</label>

                    <input type="checkbox" id="excited" name="moodType" value="excited" onChange={() => this.selectMoodTypes('excited')} />
                    <label htmlFor="excited">excited</label>

                    <input type="checkbox" id="optimistic" name="moodType" value="optimistic" onChange={() => this.selectMoodTypes('optimistic')} />
                    <label htmlFor="optimistic">optimistic</label>

                    <input type="checkbox" id="relaxed" name="moodType" value="relaxed" onChange={() => this.selectMoodTypes('relaxed')} />
                    <label htmlFor="relaxed">relaxed</label>

                    <input type="checkbox" id="alert" name="moodType" value="alert" onChange={() => this.selectMoodTypes('alert')} />
                    <label htmlFor="alert">alert</label>

                    <input type="checkbox" id="great" name="moodType" value="great" onChange={() => this.selectMoodTypes('great')} />
                    <label htmlFor="great">great</label>

                    <input type="checkbox" id="peaceful" name="moodType" value="peaceful" onChange={() => this.selectMoodTypes('peaceful')} />
                    <label htmlFor="peaceful">peaceful</label>

                    <input type="checkbox" id="silly" name="moodType" value="silly" onChange={() => this.selectMoodTypes('silly')} />
                    <label htmlFor="silly">silly</label>

                    <input type="checkbox" id="giddy" name="moodType" value="giddy" onChange={() => this.selectMoodTypes('giddy')} />
                    <label htmlFor="giddy">giddy</label>

                    <input type="checkbox" id="energetic" name="moodType" value="energetic" onChange={() => this.selectMoodTypes('energetic')} />
                    <label htmlFor="energetic">energetic</label>

                    <input type="checkbox" id="sad" name="moodType" value="sad" onChange={() => this.selectMoodTypes('sad')} />
                    <label htmlFor="sad">sad</label>

                    <input type="checkbox" id="angry" name="moodType" value="angry" onChange={() => this.selectMoodTypes('angry')} />
                    <label htmlFor="angry">angry</label>

                    <input type="checkbox" id="agitated" name="moodType" value="agitated" onChange={() => this.selectMoodTypes('agitated')} />
                    <label htmlFor="agitated">agitated</label>

                    <input type="checkbox" id="tired" name="moodType" value="tired" onChange={() => this.selectMoodTypes('tired')} />
                    <label htmlFor="tired">tired</label>

                    <input type="checkbox" id="restless" name="moodType" value="restless" onChange={() => this.selectMoodTypes('restless')} />
                    <label htmlFor="restless">restless</label>

                    <input type="checkbox" id="nervous" name="moodType" value="nervous" onChange={() => this.selectMoodTypes('nervous')} />
                    <label htmlFor="nervous">nervous</label>

                    <input type="checkbox" id="pessimistic" name="moodType" value="pessimistic" onChange={() => this.selectMoodTypes('pessimistic')} />
                    <label htmlFor="pessimistic">pessimistic</label>

                    <input type="checkbox" id="bad" name="moodType" value="bad" onChange={() => this.selectMoodTypes('bad')} />
                    <label htmlFor="bad">bad</label>

                    <input type="checkbox" id="lonely" name="moodType" value="lonely" onChange={() => this.selectMoodTypes('lonely')} />
                    <label htmlFor="lonely">lonely</label>

                    <input type="checkbox" id="irritated" name="moodType" value="irritated" onChange={() => this.selectMoodTypes('irritated')} />
                    <label htmlFor="irritated">irritated</label>

                </section>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    mood: state.entry.newEntry.mood,
    moodTypes: state.entry.newEntry.moodTypes
});

export default connect(mapStateToProps)(MoodEntry);
