import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSleep} from '../actions/index';

import './sleep-entry.css';

export class SleepEntry extends Component{

    selectSleep(sleep){
        this.props.dispatch(addSleep(sleep));
    }

    render() {
        return (
            <div className="sleep">

                <h1>What was the quality level of your sleep last night?</h1>

                <ul className="choices">

                    <li className="sleeps">
                        <input type="radio" id="sleep1" className="hide"
                         name="sleep" value="1" onClick={() => this.selectSleep(1)} />
                        <label htmlFor="sleep1"><i className="fa fa-fw fa-circle" id="red"></i>bad</label>
                    </li>

                    <li className="sleeps">
                        <input type="radio" id="sleep2" className="hide"
                         name="sleep" value="2" onClick={() => this.selectSleep(2)} />
                        <label htmlFor="sleep2"><i className="fa fa-fw fa-circle" id="orange"></i>meh</label>
                    </li>

                    <li className="sleeps">
                        <input type="radio" id="sleep3" className="hide"
                         name="sleep" value="3" onClick={() => this.selectSleep(3)} />
                        <label htmlFor="sleep3"><i className="fa fa-fw fa-circle" id="yellow"></i>okay</label>
                    </li>

                    <li className="sleeps">
                        <input type="radio" id="sleep4" className="hide"
                         name="sleep" value="4" onClick={() => this.selectSleep(4)} />
                        <label htmlFor="sleep4"><i className="fa fa-fw fa-circle" id="chartreuse"></i>good</label>
                    </li>

                    <li className="sleeps">
                        <input type="radio" id="sleep5" className="hide"
                         name="sleep" value="5" onClick={() => this.selectSleep(5)} />
                        <label htmlFor="sleep5"><i className="fa fa-fw fa-circle" id="green"></i>great</label>
                    </li>

                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    sleep: state.entry.newEntry.sleep
});

export default connect(mapStateToProps)(SleepEntry);
