import React from 'react';

import MoodEntry from './mood-entry';
import SleepEntry from './sleep-entry';
import EatingEntry from './eating-entry';
import ExerciseEntry from './exercise-entry';
import NotesEntry from './notes-entry';
import Done from './done';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// import './form-entry.css';

export default function FormEntry(props) {

      return (
          <Router>
              <div className="form-entry">

                  <section>
                      <Route exact path='/mood-entry' component={MoodEntry} />
                      <Route exact path='/sleep-entry' component={SleepEntry} />
                      <Route exact path='/eating-entry' component={EatingEntry} />
                      <Route exact path='/exercise-entry' component={ExerciseEntry} />
                      <Route exact path='/notes-entry' component={NotesEntry} />
                      <Route exact path='/done' component={Done} />
                  </section>

              </div>
          </Router>
    );

}
