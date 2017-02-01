import React, { Component } from 'react';
import Playlist from '../components/Playlist';

class PlaylistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      playlists: []
    };

  }

  componentDidMount(){
    $.ajax({
        method: "GET",
        url: "/api/v1/playlists",
      })
      .done(data => {
        this.setState({
          playlists: data
        });
      });
  }

  render(){
    let allPlaylists = this.state.playlists.map(playlist => {
      return(
        <Playlist
          name={playlist.name}
          url={playlist.url}
          time={playlist.time}
         />
      );
    });

    return(
      <div>
        {allPlaylists}
      </div>
    );
  }
}
