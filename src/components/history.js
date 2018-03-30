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
            <li className="entry" key={index}>
                <AddEntryCard index={index} {...entry} />
            </li>
        ));

        return (
            <div className="history">

                <section>
                    <HistoryHeader />
                </section>

                <h1>MY HISTORY</h1>

                <ul className="entries">
                    {entries}
                </ul>

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
    error: state.entry.error
});

export default connect(mapStateToProps)(History);
