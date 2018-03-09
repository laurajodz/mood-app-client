import React from 'react';
// import './dashboard.css';


export default function Dashboard(props) {

    render() {
        return (

          <div className="dashboard">

              <nav role="navigation">
                  Home
                  <Calendar />
              </nav>

              <header role="banner">
                  <h1>My Dashboard</h1>
              </header>

              <button
                  className="start-entry-button"
                  // onClick={() => this.setEditing(true)}>
              >
                  Enter Mood for Today  //go to mood entry
              </button>

              <div>
                  Analytics
              </div>

          </div>
    );
  }
}

export default Dashboard;
