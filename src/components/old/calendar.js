import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectedDate} from '../actions/index';
import CalendarDay from './calendar-day';

// import './calendar.css';

import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DatePicker from 'material-ui-pickers/DatePicker';

export class Calendar extends Component{

    handleDateChange(selectedDate){
        this.props.dispatch(selectedDate(selectedDate));
    }

    render() {

        const {selectedDate} = this.props;

        return (

            <div className="calendar">

                <section>
                    <Link to="/dashboard">My Dashboard</Link>
                </section>

                <h1>My Calendar</h1>

                <h2>Click on a date to see your entry for that day</h2>  {/*on click make get call to api*/}

                <section>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          value={selectedDate}
                          onChange={this.handleDateChange}
                        />
                    </MuiPickersUtilsProvider>

                </section>

                <section>

                    <CalendarDay />

                </section>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedDate: state.selectedDate
});

export default connect(mapStateToProps)(Calendar);
