import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

class NavPartition extends Component {
  render() {
    return (
      <div id="NavPartition" className="partition">
        <h1>{this.props.user.first_name}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NavPartition);
