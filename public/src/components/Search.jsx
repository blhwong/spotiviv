import React, { Component } from 'react';

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
    console.log(this.props);
    this.props.setValue(null, this.props.type, true);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name={this.props.type}
            placeholder={this.props.type}
            onChange={this.handleChange}
            value={this.props.value}
            onClick={this.handleClear}
          >
          </input>
        </form>
      </div>
    );
  }
}
