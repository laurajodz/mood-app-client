import React, { Component } from 'react';
// import './edit-day-data.css';


export default function EditDayData(props) {

    const day = props.day;
    const mood = props.mood;
    const sleep = props.sleep;
    const eating = props.eating;
    const exercise = props.exercise;
    const notes = props.notes;
    
    render() {
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
                        // ref={input => (this.mood = mood)}
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
                        // ref={input => (this.sleep = sleep)}
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
                        // ref={input => (this.eating = eating)}
                    />
                </label>

                <p>Exercise Today: </p>
                    <input
                        type="radio"
                        name="exercise"
                        id="radioYes"
                        value="yes"
                        autoComplete="off"
                        // ref={input => (this.exercise = exercise)}
                    />
                    <label htmlFor="radioYes">Yes</label>
                    <input
                        type="radio"
                        name="exercise"
                        id="radioNo"
                        value="no"
                        autoComplete="off"
                        // ref={input => (this.input = input)}
                    />
                    <label htmlFor="radioNo">No</label>

                <p>Notes: </p>
                    <textarea
                        name="notes"
                        // ref={input => (this.notes = notes)}
                    />

                </h3>

                <button
                  type="submit"
                  name="submit"
                  id="updateButton"
                  className="button"
                >
                    Update  //call to the put api and back to calendar day
                </button>

            </form>
    );
  }
}

export default EditDayData;
