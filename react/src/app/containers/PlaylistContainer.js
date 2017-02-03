import React, { Component } from 'react';
import Playlist from '../components/Playlist';

class PlaylistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      playlist: []
    };
    this.getPlaylistAuto = this.getPlaylistAuto.bind(this)
  }

  componentDidMount(){
    this.getPlaylistAuto();
    setInterval(this.getPlaylistAuto, 600000 );
  }


  getPlaylistAuto () {
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

  // manualPlaylistSelect () {
  //   $.ajax({
  //       method: "POST",
  //       url: "/api/v1/playlists",
  //     })
  //     .done(data => {
  //       this.setState({
  //         playlist: data
  //       });
  //     });
  // }

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
