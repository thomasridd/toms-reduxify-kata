import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './scenes/Home'
import Page1 from './scenes/Page1'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/page1" component={Page1} />
        </div>
      </Router>
    );
  }
}

export default App;
