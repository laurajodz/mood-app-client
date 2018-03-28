import React, {Component} from 'react';
import DashboardHeader from './dashboard-header';
import {connect} from 'react-redux';
import {VictoryBar, VictoryChart, VictoryLine, VictoryAxis, VictoryTheme} from 'victory';
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
                    Welcome, {this.props.user.username}
                </section>

                <section className="start">
                    <p className="start-entry">
                        <Link to="/form-entry" className="start-entry-link">Enter Mood for Today</Link>
                    </p>
                </section>

                <section>
                    <h1>Analytics</h1>

                    <h2>Trending Mood Rating</h2>
                    <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={20}
                    width={600} height={200}
                    animate={{ duration: 4000 }}
                    >
                        <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        />
                        <VictoryAxis dependentAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        />
                        <VictoryLine
                        style={{
                          tickLabels: { angle: -50 },
                          data: { stroke: "blue"}
                        }}
                        data={this.props.entries}
                        x={day => moment(day.date).format('MMM D')}
                        y='mood'
                        />
                    </VictoryChart>

                    <h2>Average Sleep Quality per Mood</h2>
                    <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={20}
                    width={600} height={200}
                    animate={{ duration: 4000 }}
                    >
                        <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        />
                        <VictoryAxis dependentAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        />
                        <VictoryBar
                            data={this.props.entries}
                            x='mood'
                            y='sleep'
                            style={{ data: { fill: "green" } }}
                        />
                    </VictoryChart>

                </section>

                <section>
                    Copyright 2018, <a href="http://www.laurajodz.com" className="port" target="_blank" rel="noopener noreferrer">Laura Jodz</a><br/>
                    <a href="https://github.com/laurajodz" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square" id="git"></i></a>
                    <a href="https://www.linkedin.com/in/laurajodz" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" id="linked"></i></a>
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
