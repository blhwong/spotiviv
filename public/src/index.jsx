import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import searchSpotify from './lib/searchSpotify.jsx';
import _ from 'lodash';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <h1>spotiviv</h1>
        <Search type="Artist" searchSpotify={this.props.searchSpotify}/>
        <Search type="Album" searchSpotify={this.props.searchSpotify}/>
      </div>
    );
  }
}

ReactDOM.render(<App searchSpotify={_.debounce(searchSpotify, 500)}/>, document.getElementById('app'));
