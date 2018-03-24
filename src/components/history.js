import React, {Component} from 'react';
import HistoryHeader from './history-header';
import {connect} from 'react-redux';
import AddEntryCard from './add-entry-card';
import {fetchEntries} from '../actions';

import './history.css';

export class History extends Component{

    componentDidMount() {
        this.props.dispatch(fetchEntries());
    }

    render() {

        const entries = this.props.entries.map((entry, index) => (
            <p className="entry" key={index}>
                <AddEntryCard index={index} {...entry} />
            </p>
        ));

        return (

            <div className="history">

                <section>
                    <HistoryHeader />
                </section>

                <h1>My History</h1>

                <section className="entries">
                    {entries}
                </section>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    entries: state.entry.entries,
    error: state.entry.error
});

export default connect(mapStateToProps)(History);
