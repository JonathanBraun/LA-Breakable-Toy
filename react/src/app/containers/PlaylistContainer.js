import React, { Component } from 'react';
import Playlist from '../components/Playlist';
import SongSelect from '../components/SongSelect';

class PlaylistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      playlist: [],
      nextPlaylist: []
    };
    this.getPlaylistAuto = this.getPlaylistAuto.bind(this);
    // this.manualPlaylistSelect = this.manualPlaylistSelect.bind(this);
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
          playlist: data,
        });
        console.log(this.state.playlist[0]);
        console.log(this.state.playlist[0].name);
        console.log(this.state.playlist[1]);
        // let firstPlaylist = this.state.playlist[0];
        // let nextPlaylist = this.state.playlist[1];
      });
  }

  render(){
    let firstPlaylist = this.state.playlist[0];
    let nextPlaylist = this.state.playlist[1];
    console.log(firstPlaylist);
    console.log(nextPlaylist);
    return(
      <Playlist
        key={this.state.playlist.id}
        name={this.state.playlist.name}
        url={this.state.playlist.url}
        time={this.state.playlist.time}
        // key={firstPlaylist.id}
        // name={firstPlaylist.name}
        // url={firstPlaylist.url}
        // time={firstPlaylist.time}
        // nextKey={nextPlaylist.key}
        // nextName={nextPlaylist.name}
        // nextTime={nextPlaylist.time}
      />
    );
  }
}

export default PlaylistContainer;
