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
      entries: {}
    };
    this.setEntries = this.setEntries.bind(this);
  }

  setEntries(entries) {
    this.setState({
      entries: entries
    });
  }

  render () {
    return (
      <div>
        <h1>spotiviv</h1>
        <Search
          type="Artist"
          searchSpotify={this.props.searchSpotify}
          setEntries={this.setEntries}
        />
        <Search
          type="Album"
          searchSpotify={this.props.searchSpotify}
          setEntries={this.setEntries}
        />
        <Search
          type="Track"
          searchSpotify={this.props.searchSpotify}
          setEntries={this.setEntries}
        />
        <ResultList entries={this.state.entries}/>
      </div>
    );
  }
}

ReactDOM.render(<App searchSpotify={_.debounce(searchSpotify, 500)}/>, document.getElementById('app'));
