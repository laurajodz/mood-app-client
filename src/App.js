import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
              <Login /> //go to login page
          </nav>

          <header role="banner">
              <h1>Mood Today</h1>
          </header>

          <section>
              <h2>Record Your Moods</h2>
              <h2>Look For Patterns</h2>
              <h2>Gain Insights</h2>
          </section>

          <section>
              <p>Screen shot 1 - Recording a mood</p>
          </section>

          <section>
              <p>Screen shot 2 - Seeing your history on a calendar</p>
          </section>

          <section>
              <p>Screen shot 3 - Data analytics</p>
          </section>

          <section>
              <Login /> //go to login page
          </section>

      </div>
    );
  }
}


export default App;
