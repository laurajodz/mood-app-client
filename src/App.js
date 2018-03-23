import React from 'react';
import Login from './components/login';
import Home from './components/home';
import Dashboard from './components/dashboard';
import History from './components/history';
import FormEntry from './components/form-entry';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

export default class App extends React.Component {

    render() {
        return (
            <Router >
                <div className="App">

                    <main role="main">
                        <h1 className="logo">Mood Today</h1>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/history' component={History} />
                        <Route path='/form-entry' component={FormEntry} />
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
