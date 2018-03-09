import React from 'react';
// import './exercise-entry.css';


export default function ExerciseEntry(props) {

    const exercise = props.exercise;

    render() {
        return (
          <div className="exercise">

              <h1>Did you get 30 minutes of exercise today?</h1>

              <input type="radio" name="exercise" value="yes"> Yes<br>

              <input type="radio" name="exercise" value="no"> No<br>

              <button
                  className="previous-button"
                  // onClick={() => this.setEditing(true)}>
              >
                  Previous  //go to eating entry
              </button>

              <button
                  className="next-button"
                  // onClick={() => this.setEditing(true)}>
              >
                  Next  //capture input and go to notes entry
              </button>

              <button
                  className="cancel-button"
                  // onClick={() => this.setEditing(true)}>
              >
                  Cancel  //go to dashboard
              </button>

          </div>
    );
  }
}

export default ExerciseEntry;
