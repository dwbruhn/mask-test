import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreditCardDetailsOrig from './CreditCardDetailsOrig';
import CreditCardDetailsFixed from './CreditCardDetailsFixed';

const forms = {
  original: (<div><h2>Original</h2><CreditCardDetailsOrig /></div>),
  fixed: (<div><h2>Fixed</h2><CreditCardDetailsFixed /></div>)
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'original'
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <br />
        <div>
          <a href="" onClick={e => { e.preventDefault(); this.setState({ form: 'original' }); }}>
            Original
          </a>
          &nbsp;|&nbsp;
          <a href="" onClick={e => { e.preventDefault(); this.setState({ form: 'fixed' }); }}>
            Fixed
          </a>
        </div>
        {forms[this.state.form]}
      </div>
    );
  }
}

export default App;
