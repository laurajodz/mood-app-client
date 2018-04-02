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

    sleepAverages(){
      // group by sleep
        const sleepGroup = this.props.entries
            .filter(entry => entry.sleep)
            .reduce((acc, curr)=>{
                if(acc[curr.sleep]){
                    acc[curr.sleep].push(curr);
              }else{
                    acc[curr.sleep] = [curr]
              }
              return acc;
            }, {});

            console.log(sleepGroup);

        const mood = Object.keys(sleepGroup)
            .map(key => {
                const moods = sleepGroup[key]
                    .filter(entry => entry.mood);
                const moodAverage = moods
                    .reduce((acc, curr)=>curr.mood + acc, 0)/moods.length;
                return {
                      sleep: key,
                      mood: moodAverage
                }
            });
        return {mood};
    }


    averages(){
      // group by mood
        const groups = this.props.entries
            .filter(entry => entry.mood)
            .reduce((acc, curr)=>{
                if(acc[curr.mood]){
                    acc[curr.mood].push(curr);
                }else{
                    acc[curr.mood] = [curr]
                }
                return acc;
            }, {});

        const sleep = Object.keys(groups)
            .map(key => {
                const sleeps = groups[key]
                    .filter(entry => entry.sleep);
                const sleepAverage = sleeps
                    .reduce((acc, curr)=>curr.sleep + acc, 0)/sleeps.length;
                return {
                    mood: key,
                    sleep: sleepAverage
                }
            });

        const eating = Object.keys(groups)
            .map(key => {
                const eatings = groups[key]
                    .filter(entry => entry.eating);
                const eatingAverage = eatings
                    .reduce((acc, curr)=>curr.eating + acc, 0)/eatings.length;
                return {
                  mood: key,
                  eating: eatingAverage
                }
            });

        return {sleep, eating};
    }


    render() {

        const { sleep, eating } = this.averages();

        const { mood } = this.sleepAverages();

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
                                data={sleep}
                                x='mood'
                                y='sleep'
                            />
                            <VictoryBar
                                data={eating}
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
                              { name: "Mood", symbol: { fill: "#3E00E5" } },
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
                                data={mood}
                                x='sleep'
                                y='mood'
                                style={{ data: { fill: "#3E00E5", width: 16 }  }}
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
