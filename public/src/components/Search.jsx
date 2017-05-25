import React, { Component } from 'react';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.searchSpotify(this.props.type, e.target.value, this.props.setEntries);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name={this.props.type} placeholder={this.props.type} onChange={this.handleChange}></input>
        </form>
      </div>
    );
  }
}
