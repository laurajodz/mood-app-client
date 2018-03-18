import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addExercise} from '../actions/index';

import './exercise-entry.css';

export class ExerciseEntry extends Component{

    selectExercise(exercise){
        this.props.dispatch(addExercise(exercise));
    }

    render() {
        return (
            <div className="exercise">

                <h1>Did you get 30 minutes of exercise today?</h1>

                <input type="radio" name="exercise" value="yes" onClick={() => this.selectExercise('yes')} /> Yes <br/>

                <input type="radio" name="exercise" value="no" onClick={() => this.selectExercise('no')} /> No <br/>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    exercise: state.entry.newEntry.exercise
});

export default connect(mapStateToProps)(ExerciseEntry);
