import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

                <p>

                    <button
                        className="previous-button"
                    >
                        <Link to="/form-entry/eating-entry">Previous</Link>
                    </button>

                    <button
                        className="next-button"
                    >
                        <Link to="/form-entry/notes-entry">Next</Link>
                    </button>

                    <button
                        className="cancel-button"
                    >
                        <Link to="/dashboard">Cancel</Link>
                    </button>

                </p>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    exercise: state.entry.newEntry.exercise
});

export default connect(mapStateToProps)(ExerciseEntry);
