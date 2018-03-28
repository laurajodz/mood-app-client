import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addEating} from '../actions/index';

import './eating-entry.css';

export class EatingEntry extends Component{

    selectEating(eating){
        this.props.dispatch(addEating(eating));
    }

    render() {

        const eatings = this.props.eatings.map((eating, key) => {
            return (
                <li className="eatings" key={key}>
                    <input type="radio" id={eating.id} className="hide"
                           name="eating" value={eating.value} onClick={() => this.selectEating(eating.value)} defaultChecked={this.props.eating === eating.value} />
                    <label htmlFor={eating.id}><i className="fa fa-fw fa-circle" id={eating.colour}></i>{eating.name}</label>
                </li>
            )
        });

        return (
            <div className="eating">

                <div className="card">

                    <img src={ require('../images/eating.png')} alt="Eating icon" />

                    <h1>How healthy did you eat today?</h1>

                    <ul className="choices">
                        {eatings}
                    </ul>

                </div>

                <p className="icons">Icons made by <a href="https://www.flaticon.com/authors/freepik" className="icons" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="http://www.flaticon.com" className="icons" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    eating: state.entry.newEntry.eating,
    eatings: state.entry.eatings
});

export default connect(mapStateToProps)(EatingEntry);
