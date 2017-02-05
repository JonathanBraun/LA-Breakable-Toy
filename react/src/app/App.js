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
      <div>
        <PlaylistContainer />
      </div>
    );
  }
}

export default App;


// Move button to react and start with checkbox
// Have checkbox toggle back and forth between true and false
// Put event listener on checkbox
// In componentDidMount put if else logic; else is current method; if is manual method
// Use Setting playlistName to event.target.value in the PlaylistContainer state
