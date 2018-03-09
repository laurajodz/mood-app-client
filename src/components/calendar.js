import React from 'react';
import {Link} from 'react-router-dom';
import CalendarDay from './calendar-day';

// import './calendar.css';


export default function Calendar(props) {

    render() {
        return (

          <div className="calendar">

              <nav role="navigation">
                  My Dashboard
              </nav>

              <header role="banner">
                  <h1>My Calendar</h1>
              </header>

              <h1>Click on a date to see your entry for that day</h1>  //on click make get call to api

              <div>
                  Calendar
                      <div>
                          {props.calendarDay}
                      </div>
              </div>

          </div>
    );
  }
}

export default Calendar;
