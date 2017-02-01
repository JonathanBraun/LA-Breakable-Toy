import React, { Component } from 'react';
import PlaylistContainer from './containers/PlaylistContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <PlaylistContainer />
    );
  }
}

export default App;
