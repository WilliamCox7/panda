import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

class Login extends Component {

  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  /**
  * @method login this accesses fbsdk and logs in the user
  */

  login() {
    let self = this;
    FB.login(function(response) {
      if (response.status === 'connected') {
        self.props.history.push('/');
      } else {
        self.props.history.push('/login');
      }
    });
  }

  render() {
    return (
      <div id="Login" className="flex jc-c ai-c">
        <div id="login-wrapper" className="flex fd-c jc-c ai-c">
          <div id="logo-wrapper" className="flex jc-c ai-c">
            <img src="https://78.media.tumblr.com/5faba54b3b4e65ee4990557041ff8473/tumblr_os0ovnTPc11vewxszo1_500.jpg" />
          </div>
          <div className="fb-login-button" data-max-rows="1" data-size="large"
            data-button-type="continue_with" data-show-faces="false"
            data-auto-logout-link="false" data-use-continue-as="true"
            onClick={this.login}>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
