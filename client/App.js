import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import HandleFacebook from './components/HandleFacebook';
import './reset.scss';
import './main.scss';
import './skeleton.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HandleFacebook />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
