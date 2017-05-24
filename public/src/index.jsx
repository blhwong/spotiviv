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
        <div>Hello World!</div>
        <Search type="Artist"/>
        <Search type="Album"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
