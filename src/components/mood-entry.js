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
            const checked = this.props.mood === mood.value ? 'checked': '';
            return (
                <li className="moods" key={key}>
                  <input type="radio" id={mood.id} className="hide"
                         name="mood" value={mood.value} onClick={() => this.selectMood(mood.value)} checked={checked} />
                  <label htmlFor={mood.id}><i className="fa fa-fw fa-circle" id={mood.colour}></i>{mood.name}</label>
                </li>
            )
        });

        const types = this.props.types.map((type, key) => {
            const checked = this.props.type === type.name ? 'checked': '';
            return (
                <li className="moodTypeItem" key={key}>
                  <input type="checkbox" id={type.name}
                         name="moodType" value={type.name} onToggle={() => this.selectMoodTypes(type.name)} checked={checked} />
                  <label htmlFor={type.name}>{type.name}</label>
                </li>
            )
        })

        return (
            <div className="mood">

                <div className="card">

                    <img src={ require('../images/happy.png')} alt="Happy Face" />
                    <img src={ require('../images/ok.png')} alt="OK Face" />
                    <img src={ require('../images/sad.png')} alt="Sad Face" />

                    <h1>First, rate your mood. Overall, how did you feel today?</h1>

                    <ul className="choices">
                        {moods}
                    </ul>

                    <h1>Next, what words would you use to describe your mood today?</h1>

                    <ul className="types">
                        {types}
                    </ul>

                </div>

                <p className="icons">Icons made by <a href="http://www.baianat.com/" className="icons" target="_blank" rel="noopener noreferrer">Baianet</a> from <a href="http://www.flaticon.com" className="icons" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    mood: state.entry.newEntry.mood,
    moodTypes: state.entry.newEntry.moodTypes,
    moods: state.entry.moods,
    types: state.entry.types
});

export default connect(mapStateToProps)(MoodEntry);
