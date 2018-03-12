import React from 'react';
import Login from './components/login';
import Home from './components/home';
import Dashboard from './components/dashboard';
import Calendar from './components/calendar';
import CalendarDay from './components/calendar-day';
import EditDayData from './components/edit-day-data';
import DeleteDayData from './components/delete-day-data';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Router >
                <div className="App">

                    <main role="main">
                        <h1>Mood Today</h1>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/calendar' component={Calendar} />
                        <Route exact path='/calendar-day' component={CalendarDay} />
                        <Route exact path='/edit-day-data' component={EditDayData} />
                        <Route exact path='/delete-day-data' component={DeleteDayData} />
                    </main>

                    <footer>
                        Copyright 2018, Laura Jodz
                        GitHub Link
                        Portfolio Link
                    </footer>

                </div>
            </Router>
      );
    }
  }
