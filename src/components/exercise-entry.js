import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addExercise} from '../actions/index';

import './exercise-entry.css';

export class ExerciseEntry extends Component{

    selectExercise(exercise){
        this.props.dispatch(addExercise(exercise));
    }

    render() {

        const exercises = this.props.exercises.map((exercise, key) => {
            return (
                <li className="exercises" key={key}>
                      <input type="radio" id={exercise.id} className="hide"
                             name="exercise" value={exercise.value} onClick={() => this.selectExercise(exercise.value)} defaultChecked={this.props.exercise === exercise.value} />
                      <label htmlFor={exercise.id}><i className="fa fa-fw fa-circle"></i>{exercise.value}</label>
                </li>
            )
        });

        return (
            <div className="exercise">

                <div className="card">

                    <img src={ require('../images/exercise.png')} alt="Exercise icon" />

                    <h1>Did you get 30 minutes of exercise today?</h1>

                    <ul className="choices">
                        {exercises}
                    </ul>

                </div>

                <p className="icons">Icons made by <a href="https://www.flaticon.com/authors/freepik" className="icons" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="http://www.flaticon.com" className="icons" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    exercise: state.entry.newEntry.exercise,
    exercises: state.entry.exercises
});

export default connect(mapStateToProps)(ExerciseEntry);
