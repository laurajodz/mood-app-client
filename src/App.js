import React, {Component} from 'react';
import Login from './components/login';
import Home from './components/home';
import Dashboard from './components/dashboard';
import History from './components/history';
import FormEntry from './components/form-entry';
import {refreshAuthToken} from './actions/auth';

import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

export class App extends Component{

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <Router >
                <div className="App">

                    <main role="main">
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/history' component={History} />
                        <Route path='/form-entry' component={FormEntry} />
                    </main>

                    <footer>
                        Copyright 2018, Laura Jodz *
                        GitHub Link *
                        Portfolio Link
                    </footer>

                </div>
            </Router>
      );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default connect(mapStateToProps)(App);
