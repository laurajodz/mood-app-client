import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AddEntryCard from './add-entry-card';
import {fetchEntries} from '../actions';

import './history.css';

export class History extends Component{

    componentDidMount() {
        this.props.dispatch(fetchEntries());
    }

    render() {

        const entries = this.props.entries.map((entry, index) => (
            <li className="entry" key={index}>
                <AddEntryCard index={index} {...entry} />
            </li>
        ));

        return (

            <div className="history">

                <section>
                    <Link to="/dashboard">My Dashboard</Link>
                </section>

                <h1>My History</h1>

                <ul className="entries">
                    {entries}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    entries: state.entry.entries,
    error: state.entry.error
});

export default connect(mapStateToProps)(History);
