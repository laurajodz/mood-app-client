import React, { Component } from 'react';
// import './entry.css';


export default function Entry(props) {
    const question = props.question;
    const 

    render() {
        return (
          <div className="entry">

              <h1>
                  EntryQuestion
              </h1>

              <div class="slidecontainer">
                  <input type="range" min="1" max="10" value="5" class="slider" id="myRange">
              </div>

              <p>A slider from 10 to 1 with colors or emojis</p>

              <button
                  className="next-button"
                  // onClick={() => this.setEditing(true)}>
              >
                  Next  //capture input and go to sleep entry
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

export default MoodEntry;
