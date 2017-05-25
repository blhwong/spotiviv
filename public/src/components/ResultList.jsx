import React, { Component } from 'react';
import ResultListEntry from './ResultListEntry.jsx';
import { Button } from 'react-bootstrap';
import './ResultList.css';

export default class ResultList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    this.props.sortEntries(type);
  }

  render() {
    let entries = this.props.entries.artists || this.props.entries.albums || this.props.entries.tracks || null;
    let type = this.props.entries.artists ? 'Artists' : (this.props.entries.albums ? 'Albums' : 'Tracks');
    return (
      <div>
        <h2>{entries && 'Result List'}</h2>
        <span>
          <h3>
            {entries && type}
            {entries && type !== 'Albums'
            &&
            <Button
              className="button"
              bsStyle="success"
              onClick={() => this.handleClick(type)}
            >
            Sort by popularity: {this.props.ascending ? 'Ascending' : 'Descending'}
            </Button>
            }
          </h3>
        </span>
        {entries && entries.items.map((entry, index) => {
          return (
            <ResultListEntry
              type={type}
              entry={entry}
              key={index}
            />
          );
        })}
      </div>
    );

  }
}
