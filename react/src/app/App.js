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
      // if on homepage
      <div>
        <PlaylistContainer />
      </div>
      // else on user show page
    );
  }
}

export default App;
