import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import searchSpotify from './lib/searchSpotify.jsx';
import _ from 'lodash';
import ResultList from './components/ResultList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: {},
      artist: '',
      album: '',
      track: '',
      ascending: false
    };
    this.setEntries = this.setEntries.bind(this);
    this.setValue = this.setValue.bind(this);
    this.sortEntries = this.sortEntries.bind(this);
  }

  setEntries(entries) {
    this.setState({
      entries: entries
    });
  }

  setValue(e, type, clear) {
    if (type === 'Artist') {
      if (clear) {
        this.setState({
          album: '',
          track: ''
        });
      } else {
        this.setState({
          artist: e.target.value,
        });
      }
    } else if (type === 'Album') {
      if (clear) {
        this.setState({
          artist: '',
          track: ''
        });
      } else {
        this.setState({
          album: e.target.value
        });
      }
    } else {
      if (clear) {
        this.setState({
          artist: '',
          album: ''
        });
      } else {
        this.setState({
          track: e.target.value
        });
      }
    }
  }

  sortEntries() {
    console.log('sorting...');
  }

  render () {
    return (
      <div>
        <h1>spotiviv</h1>
        <Search
          type="Artist"
          searchSpotify={this.props.searchSpotify}
          setEntries={this.setEntries}
          value={this.state.artist}
          setValue={this.setValue}
        />
        <Search
          type="Album"
          searchSpotify={this.props.searchSpotify}
          setEntries={this.setEntries}
          value={this.state.album}
          setValue={this.setValue}
        />
        <Search
          type="Track"
          searchSpotify={this.props.searchSpotify}
          setEntries={this.setEntries}
          value={this.state.track}
          setValue={this.setValue}
        />
        <ResultList
          entries={this.state.entries}
          ascending={this.state.ascending}
          sortEntries={this.sortEntries}
        />
      </div>
    );
  }
}

ReactDOM.render(<App searchSpotify={_.debounce(searchSpotify, 500)}/>, document.getElementById('app'));
