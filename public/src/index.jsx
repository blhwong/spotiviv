import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Spotiviv</h1>
        <Search type="Artist"/>
        <Search type="Album"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
