import React, {Component} from 'react';
import HistoryHeader from './history-header';
import {connect} from 'react-redux';
import AddEntryCard from './add-entry-card';
import {fetchEntries} from '../actions';
// import {editEntry} from '../actions';

import './history.css';

export class History extends Component{

    componentDidMount() {
        this.props.dispatch(fetchEntries());
        this.props = {isEditing: false};
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({isEditing: !this.props.isEditing})
    }

    render() {

        const entries = this.props.entries.map((entry, index) => (
            <li className="entry" key={index}>
                <AddEntryCard index={index} {...entry} />
            </li>
        ));

        if (this.props.isEditing) {
            return (
                <div className="history">

                    <section>
                        <HistoryHeader />
                    </section>

                    <h1>MY HISTORY</h1>

                    <div>
                        <p>edit entry</p>
                    </div>

                </div>
            );
        }
        return (
                <div className="history">

                    <section>
                        <HistoryHeader />
                    </section>

                    <h1>MY HISTORY</h1>

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
