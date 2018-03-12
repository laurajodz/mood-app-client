import React from 'react';
// import './delete-day-data.css';

import {Link} from 'react-router-dom';

export default function DeleteDayData(props) {

    const day = props.day;

    return (
        <div className="delete-day-data">

            <h1>Are you sure you want to permanently delete the entry for {day}?</h1>

            <button
                type="button"
                name="delete"
                id="deleteButton"
                className="button"
            >
                <Link to="/calendar-day">Yes, Delete</Link>  {/*onClick, call to the delete api and then back to calendar day*/}
            </button>

            <button
                type="button"
                name="no"
                id="noButton"
                className="button"
            >
                <Link to="/calendar-day">No, Take Me Back</Link>  {/*onClick, and back to calendar day*/}
            </button>

        </div>
    );

}
