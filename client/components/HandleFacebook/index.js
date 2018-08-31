import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../reducers/user';

/**
 * This handles whether or not the user is logged in
 * @extends Component
 */

class HandleFacebook extends Component {

  constructor() {
    super();
    this.checkLoginState = this.checkLoginState.bind(this);
    this.statusChangeCallback = this.statusChangeCallback.bind(this);
  }

  /**
   * @method componentDidMount initializes fbsdk
   */

  componentDidMount() {
    let self = this;
    window.fbAsyncInit = () => {

      FB.init({
        appId: '262584314582693',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      });

      self.checkLoginState();

    };
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      self.props.setUser(user.userId, user.first_name);
    }
  }

  /**
   * @method checkLoginState gets the 'logged in' status of the user
   */

  checkLoginState() {
    let self = this;
    FB.getLoginStatus(function(response) {
      self.statusChangeCallback(response);
    });
  }

  /**
   * @method statusChangeCallback directs the user to a route based on their connection status
   * @param  {object} response contains the status of the users connection
   */

  statusChangeCallback(response) {
    let self = this;
    if (response.status === 'connected') {
      self.userId = response.authResponse.userID;
      FB.api('/me?fields=first_name', function(response) {
        localStorage.setItem("user", JSON.stringify({userId: self.userId, first_name: response.first_name}));
        self.props.setUser(self.userId, response.first_name);
      });
      self.props.history.push('/');
    } else {
      self.props.history.push('/login');
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}

const mapDispatchToProps = {
  setUser: setUser
}

export default withRouter(connect(null, mapDispatchToProps)(HandleFacebook));
