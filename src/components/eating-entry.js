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

                <ul className="choices">

                    <li className="eatings">
                        <input type="radio" id="eating1" className="hide"
                         name="eating" value="1" onClick={() => this.selectEating(1)} />
                        <label htmlFor="eating1"><i className="fa fa-fw fa-circle" id="red"></i>bad</label>
                    </li>

                    <li className="eatings">
                        <input type="radio" id="eating2" className="hide"
                         name="eating" value="2" onClick={() => this.selectEating(2)} />
                        <label htmlFor="eating2"><i className="fa fa-fw fa-circle" id="orange"></i>meh</label>
                    </li>

                    <li className="eatings">
                        <input type="radio" id="eating3" className="hide"
                         name="eating" value="3" onClick={() => this.selectEating(3)} />
                        <label htmlFor="eating3"><i className="fa fa-fw fa-circle" id="yellow"></i>okay</label>
                    </li>

                    <li className="eatings">
                        <input type="radio" id="eating4" className="hide"
                         name="eating" value="4" onClick={() => this.selectEating(4)} />
                        <label htmlFor="eating4"><i className="fa fa-fw fa-circle" id="chartreuse"></i>good</label>
                    </li>

                    <li className="eatings">
                        <input type="radio" id="eating5" className="hide"
                         name="eating" value="5" onClick={() => this.selectEating(5)} />
                        <label htmlFor="eating5"><i className="fa fa-fw fa-circle" id="green"></i>great</label>
                    </li>

                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    eating: state.entry.newEntry.eating
});

export default connect(mapStateToProps)(EatingEntry);
