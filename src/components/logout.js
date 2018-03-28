import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class Logout extends Component{
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out link if we are logged in
        let logOutLink;
        if (this.props.loggedIn) {
            logOutLink = (
                <p className="outLink" onClick={() => this.logOut()}>Log out</p>
            );
        }
        return (
            <div className="logout">
                {logOutLink}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Logout);
