import React from 'react';
import CalendarDay from './calendar-day';
// import {DatePicker} from 'material-ui-pickers';

import {Link} from 'react-router-dom';

// import './calendar.css';

export default function Calendar(props) {

    return (

        <div className="calendar">

            <section>
                <Link to="/dashboard">My Dashboard</Link>
            </section>

            <h1>My Calendar</h1>

            <h2>Click on a date to see your entry for that day</h2>  {/*on click make get call to api*/}

            <section>

                {/*}<DatePicker />*/}

            </section>

            <section>

                <CalendarDay />

            </section>

        </div>
    );

}
