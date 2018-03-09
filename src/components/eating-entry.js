import React from 'react';
// import './eating-entry.css';


export default function EatingEntry(props) {

    const eating = props.eating;

    render() {
        return (
          <div className="eating">

              <h1>How healthy did you eat today?</h1>

              <div class="slidecontainer">
                  <input type="range" min="1" max="5" value="3" class="slider" id="myRange">
              </div>

              <p>A slider from 1 to 5</p>


              <button
                  className="previous-button"
                  // onClick={() => this.setEditing(true)}>
              >
                  Previous  //go to sleep entry
              </button>

              <button
                  className="next-button"
                  // onClick={() => this.setEditing(true)}>
              >
                  Next  //capture input and go to exercise entry
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

export default EatingEntry;
