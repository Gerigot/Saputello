import React, { Component } from 'react';
import './App.css';
import generator from './saputello';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { frase: "" }
  }

  generateFrase = () => {
    this.setState({ frase: generator() })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>{this.state.frase}</h2>
          <button className="App-Button" onClick={this.generateFrase}>Genera</button>
        </header>
      </div>
    );
  }
}

export default App;
