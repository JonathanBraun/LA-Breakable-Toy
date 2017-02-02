import React, { Component } from 'react';
import Playlist from '../components/Playlist';

class PlaylistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      playlist: []
    };
    this.getPlaylist = this.getPlaylist.bind(this);
  }

  componentDidMount(){
    this.getPlaylist();
    setInterval(this.getPlaylist, 600000 );
  }


  getPlaylist () {
    $.ajax({
        method: "GET",
        url: "/api/v1/playlists",
      })
      .done(data => {
        this.setState({
          playlist: data
        });
      });
  }

  render(){
    return(
      <Playlist
        key={this.state.playlist.id}
        name={this.state.playlist.name}
        url={this.state.playlist.url}
        time={this.state.playlist.time}
      />
    );
  }
}

export default PlaylistContainer;
