import React from 'react';
// import './sleep-entry.css';


export default function SleepEntry(props) {

    const sleep = props.sleep;

    render() {
        return (
          <div className="sleep">

              <h1>How many hours did you sleep last night?</h1>

              <div className="input-group plus-minus-input">
                  <div classNames="input-group-button">
                      <button type="button" className="button hollow circle" data-quantity="minus" data-field="quantity">
                          <i className="fa fa-minus" aria-hidden="true"></i>
                      </button>
                  </div>

                  <input className="input-group-field" type="number" name="hours" value="8">

                  <div className="input-group-button">
                      <button type="button" className="button hollow circle" data-quantity="plus" data-field="quantity">
                          <i className="fa fa-plus" aria-hidden="true"></i>
                      </button>
                  </div>
                  
              </div>

              <button
                  className="previous-button"
                  // onClick={() => this.setEditing(true)}>
              >
                  Previous  //go to mood entry
              </button>

              <button
                  className="next-button"
                  // onClick={() => this.setEditing(true)}>
              >
                  Next  //capture input and go to eating entry
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

export default SleepEntry;
