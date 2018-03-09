import React from 'react';
// import './login.css';

export default function Login(props) {

    render() {
        return (

          <div className="login">

              <header role="banner">
                  <h1>Mood Today</h1>
              </header>

              <form class="login">
                  <div>
                      <label for="username">Username</label>
                      <input type="text" name='username' id='username' />
                  </div>

                  <div>
                      <label for="password">Password</label>
                      <input type="password" name='password' id='password' />
                  </div>

                  <button
                      className="login-button"
                      // onClick={() => this.setEditing(true)}>
                  >
                      Login  //capture input, authenticate or throw error, and go to dashboard
                  </button>

                  <button
                      className="cancel-button"
                      // onClick={() => this.setEditing(true)}>
                  >
                      Cancel  //go to home
                  </button>

              </form>

          </div>
    );
  }
}

export default Login
