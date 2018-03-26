import React, {Component} from 'react';
import DashboardHeader from './dashboard-header';
import {connect} from 'react-redux';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';
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

                <h1>MY DASHBOARD</h1>

                <section className="hello">
                    Hello, {this.props.user.username}
                </section>

                <section className="start">
                    <button className="start-entry-button">
                        <Link to="/form-entry" className="start-entry-button-link">Enter Mood for Today</Link>
                    </button>
                </section>

                <section>
                    <h1>Analytics</h1>
                </section>

                <section>
                    <p>Mood Rating Per Day</p>
                    <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={20}
                    >
                        <VictoryAxis
                        style={{tickLabels: { angle: -50 } }}
                        />
                        <VictoryAxis dependentAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        />
                        <VictoryBar
                            data={this.props.entries}
                            x={day => moment(day.date).format('MMM D')}
                            y='mood'
                            style={{ data: { fill: "blue" } }}
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
