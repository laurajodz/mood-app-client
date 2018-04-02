import React, {Component} from 'react';
import DashboardHeader from './dashboard-header';
import StartEntry from './start-entry';
import {connect} from 'react-redux';
import {VictoryBar, VictoryChart, VictoryLine, VictoryAxis, VictoryTheme, VictoryGroup, VictoryLegend, VictoryVoronoiContainer} from 'victory';
import moment from 'moment';
import { fetchEntries } from '../actions';

import './dashboard.css';

export class Dashboard extends Component{

    componentWillMount() {
        this.props.dispatch(fetchEntries());
    }

    render() {

        return (

            <div className="dashboard">

                <section>
                  <DashboardHeader />
                </section>

                <h1>MY DASHBOARD</h1>

                <section className="hello">
                    Welcome, {this.props.user.firstName}
                </section>

                <section className="start">
                    <StartEntry />
                </section>

                <section>
                    <h1>Analytics</h1>

                    <p>Mood Rating Over Time</p>

                    <VictoryChart
                        theme={VictoryTheme.material}
                        domainPadding={20}
                        width={1000} height={200}
                        animate={{ duration: 4000 }}
                    >
                        <VictoryAxis
                            style={{ tickLabels: { angle: -40} }}
                            sortOrder='ascending'
                            sortKey='date'
                        />
                        <VictoryAxis dependentAxis
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={["Bad", "Meh", "Okay", "Good", "Great"]}
                        />
                        <VictoryLine
                            style={{ data: { stroke: "#3E00E5"} }}
                            data={this.props.entries}
                            x={day => moment(day.date).format('MMM D')}
                            y='mood'
                        />
                    </VictoryChart>

                    <p>Average Sleep Quality & Healthy Eating Quality per Mood</p>

                    <VictoryChart
                        theme={VictoryTheme.material}
                        domainPadding={20}
                        width={600} height={200}
                        animate={{ duration: 4000 }}
                    >
                        <VictoryLegend x={400} y={25}
                            orientation="horizontal"
                            data={[
                              { name: "Sleep", symbol: { fill: "chartreuse" } },
                              { name: "Healthy Eating", symbol: { fill: "orange" } }
                            ]}
                        />
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={["Bad", "Meh", "Okay", "Good", "Great"]}
                        />
                        <VictoryAxis
                            dependentAxis
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={["Bad", "Meh", "Okay", "Good", "Great"]}
                        />
                        <VictoryGroup
                            offset={20}
                            style={{ data: { width: 16 } }}
                            colorScale={["chartreuse", "orange"]}
                        >
                            <VictoryBar
                                data={this.props.entries}
                                x='mood'
                                y='sleep'
                            />
                            <VictoryBar
                                data={this.props.entries}
                                x='mood'
                                y='eating'
                            />
                        </VictoryGroup>
                    </VictoryChart>

                    <p>Average Mood Based on Sleep Quality</p>

                    <VictoryChart
                        theme={VictoryTheme.material}
                        domainPadding={20}
                        width={600} height={200}
                        animate={{ duration: 4000 }}
                        containerComponent={
                            <VictoryVoronoiContainer/>
                        }
                    >
                        <VictoryLegend x={470} y={35}
                            orientation="horizontal"
                            data={[
                              { name: "Sleep", symbol: { fill: "chartreuse" } },
                            ]}
                        />
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={["Bad", "Meh", "Okay", "Good", "Great"]}
                        />
                        <VictoryAxis
                            dependentAxis
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={["Bad", "Meh", "Okay", "Good", "Great"]}
                        />
                            <VictoryBar
                                data={this.props.entries}
                                x='sleep'
                                y='mood'
                                style={{ data: { fill: "chartreuse", width: 16 }  }}
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
