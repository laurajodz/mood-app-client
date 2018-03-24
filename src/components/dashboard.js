import React, {Component} from 'react';
import DashboardHeader from './dashboard-header';
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
                    <DashboardHeader />
                </section>

                <h1>My Dashboard</h1>

                <section className="hello">
                    Hello, {this.props.user.username}
                </section>

                <section>
                    <button>
                        <Link to="/form-entry" className="start-entry-button">Enter Mood for Today</Link>
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
