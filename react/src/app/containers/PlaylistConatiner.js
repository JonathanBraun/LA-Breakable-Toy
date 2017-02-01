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
    // let playlist_url
    // if (this.state.pictures[this.state.currentPicture]){
    //   playlist_url = this.state.pictures[this.state.currentPicture].image_url
    // } else {
    //   playlist_url = ""
    // }

    // let notice;
    // if (this.state.alert){
    //   notice = "flash";
    // } else {
    //   notice = "placeholder";
    // }

    return(
      <div>
        <Playlist />
      </div>
    );
  }
}
