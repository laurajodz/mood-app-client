import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class Protected extends Component {

  render() {
    if(this.props.user) {
      return (<div>{this.props.render(this.props.user)}</div>);
    }else{
      return <Redirect to="/"/>
    }
  }

}

const  mapStateToProps = state => ({
  user: state.auth.currentUser
});

export default connect(mapStateToProps)(Protected);
