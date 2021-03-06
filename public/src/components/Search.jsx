import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    this.props.setValue(e, this.props.type);
    this.props.searchSpotify(this.props.type, e.target.value, this.props.setEntries);
  }

  handleClear(e) {
    this.props.setValue(null, this.props.type, true);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              name={this.props.type}
              placeholder={this.props.type}
              onChange={this.handleChange}
              value={this.props.value}
              onClick={this.handleClear}
            />
          </FormGroup>
        </form>
      </div>
    );
  }
}
