import React from 'react';
// import './edit-entry.css';

import {Link} from 'react-router-dom';
import {editEntry} from '../actions/index';

export default function EditDayData(props) {

      editEntry(props){
          this.props.dispatch(editEntry(props));
      }

    return (

        <form onSubmit>

            <h1>{day}</h1>

            <h2><label htmlFor="moodEntry">Mood Level (1-10):
                <input
                    type="number"
                    name="mood"
                    id="moodEntry"
                    className="moodLevel"
                    min="1"
                    max="10"
                    autoComplete="off"
                />
            </label></h2>

            <h3>

            <label htmlFor="sleepEntry">Hours of sleep last night:
                <input
                    type="number"
                    name="sleep"
                    id="sleepEntry"
                    className="sleepHours"
                    min="1"
                    max="24"
                    autoComplete="off"
                />
            </label>

            <label htmlFor="eatingEntry">Healthy Eating Level (1-5):
                <input
                    type="number"
                    name="eating"
                    id="eatingEntry"
                    className="eatingLevel"
                    min="1"
                    max="5"
                    autoComplete="off"
                />
            </label>

            <p>Exercise Today:
                <input
                    type="radio"
                    name="exercise"
                    id="radioYes"
                    value="yes"
                    autoComplete="off"
                />
                <label htmlFor="radioYes">Yes</label>
                <input
                    type="radio"
                    name="exercise"
                    id="radioNo"
                    value="no"
                    autoComplete="off"
                />
                <label htmlFor="radioNo">No</label>
            </p>

            <p>Notes: </p>
                <textarea
                    name="notes"
                />

            </h3>

            <button
              type="submit"
              name="submit"
              id="updateButton"
              className="button"
            >
                <onClick={() => this.editedEntry(this.props)}
            </button>

        </form>
    );

}
