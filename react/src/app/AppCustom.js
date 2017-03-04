import React, { Component } from 'react';
import CustomPlaylistContainer from './containers/CustomPlaylistContainer';

class AppCustom extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return(
        <CustomPlaylistContainer />

    );
  }
}

export default AppCustom;
