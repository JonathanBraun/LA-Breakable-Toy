import React, { Component } from 'react';
import PlaylistContainer from './containers/PlaylistContainer';
import SongSelectContainer from './containers/SongSelectContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div>
        <SongSelectContainer />
        <PlaylistContainer />
      </div>
    );
  }
}

export default App;
