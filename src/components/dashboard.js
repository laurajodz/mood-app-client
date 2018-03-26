import React, {Component} from 'react';
import {connect} from 'react-redux';
import {VictoryBar, VictoryChart} from 'victory';
import {Link} from 'react-router-dom';
import moment from 'moment';

import './dashboard.css';

export class Dashboard extends Component{

    render() {
        return (

            <div className="dashboard">

                <section>
                  Hello, {this.props.user.firstName}
                </section>

                <section>
                    <Link to="/home" className="home">Home</Link>
                    <Link to="/history" className="history">My History</Link>
                </section>

                <section>
                    <h1>My Dashboard</h1>
                </section>

                <section>
                    <button className="start-entry-button">
                        <Link to="/form-entry">Enter Mood for Today</Link>
                    </button>
                </section>

                <section>
                    <h1>Analytics</h1>
                </section>

                <section>
                    <VictoryChart>
                        <VictoryBar
                            data={this.props.entries}
                            x={day => moment(day.date).format('DD-MMM-YY')}
                            y='mood'
                        />
                    </VictoryChart>
                </section>




            </div>

        );
    }
}

const mapStateToProps = state => ({
    entries: state.entry.entries,
    user: state.auth.currentUser
});

export default connect(mapStateToProps)(Dashboard);
