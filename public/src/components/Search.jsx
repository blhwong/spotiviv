import React, { Component } from 'react';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log('hi');
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
