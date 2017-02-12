import React, { Component } from 'react';
import Playlist from '../components/Playlist';
import PlaylistStatus from '../components/PlaylistStatus';
import CustomSongSelect from '../components/CustomSongSelect';

class CustomPlaylistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      requestedPlaylistName: "",
      timeslots: [],
      currentPlaylist: {id: null, name: null, url: null, time: null}
    };
  }

  render(){
      return(
        <div className="schedule">
          <div>
            <CustomSongSelect
            />
          </div>
          <div>
            <Playlist
              key={this.state.currentPlaylist.id}
              name={this.state.currentPlaylist.name}
              url={this.state.currentPlaylist.url}
              time={this.state.currentPlaylist.time}
            />
          </div>
        </div>
      );
  }
}

export default CustomPlaylistContainer;
