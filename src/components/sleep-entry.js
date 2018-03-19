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

                <section className="choices">

                    <div className="red">
                        <input type="radio" id="sleep1"
                         name="sleep" value="1" onClick={() => this.selectSleep(1)} />
                        <label htmlFor="sleep1">Lousy</label>
                    </div>

                    <div className="orange">
                        <input type="radio" id="sleep2"
                         name="sleep" value="2" onClick={() => this.selectSleep(2)} />
                        <label htmlFor="sleep2">Meh</label>
                    </div>

                    <div className="yellow">
                        <input type="radio" id="sleep3"
                         name="sleep" value="3" onClick={() => this.selectSleep(3)} />
                        <label htmlFor="sleep3">OK</label>
                    </div>

                    <div className="yellow-green">
                        <input type="radio" id="sleep4"
                         name="sleep" value="4" onClick={() => this.selectSleep(4)} />
                        <label htmlFor="sleep4">Good</label>
                    </div>

                    <div className="green">
                        <input type="radio" id="sleep5"
                         name="sleep" value="5" onClick={() => this.selectSleep(5)} />
                        <label htmlFor="sleep5">Great</label>
                    </div>

                </section>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    sleep: state.entry.newEntry.sleep
});

export default connect(mapStateToProps)(SleepEntry);
