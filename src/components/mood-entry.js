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

        const moods = this.props.moods.map((mood, key) => {
            const checked = this.props.mood == mood.value ? 'checked': '';
            return (
                <li className="moods" key={key}>
                  <input type="radio" id={mood.id} className="hide"
                         name="mood" value={mood.value} onClick={() => this.selectMood(mood.value)} checked={checked} />
                  <label htmlFor={mood.id}><i className="fa fa-fw fa-circle" id={mood.colour}></i>{mood.name}</label>
                </li>
            )
        });

        return (
            <div className="mood">

                <h1>First, rate your mood. Overall, how did you feel today?</h1>

                <ul className="choices">
                  {moods}
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
    moodTypes: state.entry.newEntry.moodTypes,
    moods: state.entry.moods
});

export default connect(mapStateToProps)(MoodEntry);
