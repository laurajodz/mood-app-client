import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './done.css';

export class Done extends Component{

    render() {

        return (

            <div className="done">

                <h1>Great! You are done</h1>

                <Link to="/dashboard" className="return-button">Return to Dashboard</Link>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    newEntry: state.entry.newEntry,
})

export default connect(mapStateToProps)(Done);
