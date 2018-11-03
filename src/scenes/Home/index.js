import React, { Component } from 'react';
import './styles.scss';
import TextEntry from './components/TextEntry';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({'label':event.target.value})
  }

  render() {
    const label = this.state.label === '' ? "type anything..." : this.state.label
    return (
      <div className="App">
        <header className="App-header">
          <h1>Home</h1>
          <h3>{label}</h3>
          <TextEntry onChange={this.onChange} />
        </header>
      </div>
    );
  }
}

export default Home;
