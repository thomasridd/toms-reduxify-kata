import React, { Component } from 'react';
import './styles.scss';
import TextInput from './components/TextInput';
import Textarea from './components/Textarea';
import Details from './components/Details';
import DateInput from './components/DateInput';
import BackLink from './components/BackLink';
import Breadcrumbs from './components/Breadcrumbs';
import Button from './components/Button';
import CharacterCount from './components/CharacterCount';
import Checkboxes from './components/Checkboxes';
import Header from './components/Header';
import PhaseBanner from './components/PhaseBanner';
import Radios from './components/Radios';
import Select from './components/Select';
import Warning from './components/Warning';

import { change } from './services/TextLabel/actions'
import { connect } from 'react-redux';

class Home extends Component {

  onChange(event) {
    this.props.change(event.target.value)
  }

  render() {
    const label = this.props.label === '' ? "type anything..." : this.props.label
    return (
      <div>
      <Header />
      
      <div className="govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <PhaseBanner text="This is a React service" />
          </div>
        
          <div className="govuk-grid-column-one-half">
          <Warning text="beware of dragons" />
            <h1 className="govuk-heading-xl">One half column</h1>
            <p className="govuk-body">This is a paragraph inside a two-thirds wide column</p>
            <h1>Home</h1>
            <Details summary="detail title" text="detail text goes here" />
            <h3>{label}</h3>
            <TextInput onChange={this.onChange.bind(this)} />
            <DateInput />
            <BackLink href="#" text="back" />
            <Breadcrumbs breadcrumbs={[{text:"john",href:"#"},{text:"snow", href:"potato"},{text:"or stark"}]}/>
            <Button text="button" />
            <CharacterCount maxlength="200" label="enter your details" text="enter details here" />
            <Checkboxes heading="checkboxes" items={[{label:"item 1"}, {label:"item 2"}]} />
            <Select label="my select" items={[{value:"direwolf", text:"stark"}, {value:"lion", text:"lanister"}, {value:"dragon", text:"targaryn"}]} />
            <Radios heading="Radio buttons" items={[{label:"Item 1", value:"item1"}, {label:"Item 2", value:"item2"}]} />
            <Textarea label="My text area" hint="text area should be filled here" error="" />
          </div>
        </div>

      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {label: state.label}
}

export default connect(mapStateToProps, { change })(Home);
