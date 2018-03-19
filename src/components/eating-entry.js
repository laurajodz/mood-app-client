import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addEating} from '../actions/index';

import './eating-entry.css';

export class EatingEntry extends Component{

    selectEating(eating){
        this.props.dispatch(addEating(eating));
    }

    render() {
        return (
            <div className="eating">

                <h1>How healthy did you eat today?</h1>

                <section className="choices">

                    <div className="red">
                        <input type="radio" id="eating1"
                         name="eating" value="1" onClick={() => this.selectEating(1)} />
                        <label htmlFor="eating1">Lousy</label>
                    </div>

                    <div className="orange">
                        <input type="radio" id="eating2"
                         name="eating" value="2" onClick={() => this.selectEating(2)} />
                        <label htmlFor="eating2">Meh</label>
                    </div>

                    <div className="yellow">
                        <input type="radio" id="eating3"
                         name="eating" value="3" onClick={() => this.selectEating(3)} />
                        <label htmlFor="eating3">OK</label>
                    </div>

                    <div className="yellow-green">
                        <input type="radio" id="eating4"
                         name="eating" value="4" onClick={() => this.selectEating(4)} />
                        <label htmlFor="eating4">Good</label>
                    </div>

                    <div className="green">
                        <input type="radio" id="eating5"
                         name="eating" value="5" onClick={() => this.selectEating(5)} />
                        <label htmlFor="eating5">Great</label>
                    </div>

                </section>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    eating: state.entry.newEntry.eating
});

export default connect(mapStateToProps)(EatingEntry);
