import React, { Component } from 'react';
import './styles.scss';
import TextEntry from './components/TextEntry';
import { connect } from 'react-redux';
import { change } from './services/LabelText/actions'

class Home extends Component {
  onChange(event) {
    this.props.change(event.target.value)
  }

  render() {
    const labelText = this.props.label === '' ? "type anything..." : this.props.label
    return (
      <div className="App">
        <header className="App-header">
          <h1>Home</h1>
          <h3>{labelText}</h3>
          <TextEntry onChange={this.onChange.bind(this)} />
        </header>
      </div>
    );
  }
}

function input(state) {
  return {label: state.label}
}

export default connect(input, { change })(Home);
