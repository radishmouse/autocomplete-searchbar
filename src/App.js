import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AutoComplete from './AutoComplete';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AutoComplete />
      </div>
    );
  }
}

export default App;
