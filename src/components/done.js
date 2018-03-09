import React from 'react';
// import './done.css';


export default function Done(props) {

    render() {
        return (
          <div className="done">

              <p>Animated checkmark placeholder</p>

              <h1>Great! You are done</h1>

              <button
                  className="return-button"
                  // onClick={() => this.setEditing(true)}>
              >
                  Return to My Dashboard  //go to dashboard
              </button>

          </div>
    );
  }
}

export default Done;
