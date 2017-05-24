import React, { Component } from 'react';

export default class Search extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name={this.props.type} placeholder={this.props.type}></input>
        </form>
      </div>
    );
  }
}
