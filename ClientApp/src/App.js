import React, { Component } from 'react';
import Test from './components/draganddrop/Test';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}
