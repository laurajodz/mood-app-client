import React from 'react';
// import './notes-entry.css';


export default function NotesEntry(props) {

    const notes = props.notes;

    render() {
        return (
          <div className="notes">

              <h1>Enter any notes for today. What is going on in your world?</h1>

              <textarea autofocus>
              </textarea>

              <button
                  className="finish-button"
                  // onSubmit={this.onSubmit}
              >
                  Finish!  //capture input, make post call to api, and go to done
              </button>

              <button
                  className="previous-button"
                  // onClick={() => this.setEditing(true)}>
              >
                  Previous  //go to exercise entry
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

export default NotesEntry;
