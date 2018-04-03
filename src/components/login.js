import React, {Component} from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './login.css';

export class Login extends Component{
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {

        if(this.props.user){
          return <Redirect to="/dashboard"/>
        }

        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (

            <div className="login-form">

                <section className="logoForm">
                    Mood Today
                </section>

                <form
                    className="login"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        validate={[required, nonEmpty]}
                    />
                    <button className="loginButton" disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                    <section className="temp">
                        <p>DEMO USERNAME: demo</p>
                        <p>DEMO PASSWORD: Thinkful2018</p>
                    </section>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser
});

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(connect(mapStateToProps)(Login));
