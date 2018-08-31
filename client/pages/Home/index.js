import React, { Component } from 'react';
import InputPartition from '../../components/InputPartition';
import NavPartition from '../../components/NavPartition';
import NotesPartition from '../../components/NotesPartition';
import OutputPartition from '../../components/OutputPartition';
import './style.scss';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <div id="partitions-wrapper" className="flex">
          <NavPartition />
          <NotesPartition />
          <div id="display-partitions-wrapper" className="flex">
            <InputPartition />
            <OutputPartition />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
