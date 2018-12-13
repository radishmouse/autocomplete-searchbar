import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AutoComplete from './AutoComplete';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      wordList: []
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt')
      // .then(response => {
      //   debugger;
      // })
      .then(r => r.text())
      .then(wordsAsText => {
        this.setState({
          wordList: wordsAsText.split('\n')
        });
      })
  }


  render() {
    return (
      <div className="App">
        <AutoComplete words={this.state.wordList}/>
      </div>
    );
  }
}

export default App;
