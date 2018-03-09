import React from 'react';
// import './delete-day-data.css';


export default function DeleteDayData(props) {

    const day = props.day;

    render() {
        return (
            <div className="delete-day-data">

                <h1>Are you sure you want to permanently delete the entry for {day}?</h1>

                <button
                    type="button"
                    name="delete"
                    id="deleteButton"
                    className="button"
                >
                    Yes, Delete  //call to the delete api and back to calendar day
                </button>

                <button
                    type="button"
                    name="no"
                    id="noButton"
                    className="button"
                >
                    No, Take me back  //back to calendar day
                </button>

            </div>
    );
  }
}

export default DeleteDayData;
