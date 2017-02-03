import React, { Component } from 'react';
import SongSelect from '../components/SongSelect';

class SongSelectContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      playlist: []
    };
    this.manualPlaylistSelect = this.manualPlaylistSelect.bind(this);
  }

  componentDidMount(){
    // document.getElementById('dropdown').addEventListener('change',manualPlaylistSelect()
  }


  manualPlaylistSelect () {
    let playlistId = this.state.playlist.id
    let fetchBody = { id: playlistId }
    fetch('/api/v1/playlists',
      { method: "POST",
      body: JSON.stringify(fetchBody),
      })
      .then((response) => {
        let playlist = response.json()
        return playlist
        console.log(playlist)
      }).then((response) => {
    //     let name = response.name
    //     let nextPicture;
    //     if (this.state.currentPicture < this.state.pictures.length - 1){
    //       nextPicture = this.state.currentPicture + 1
    //     } else {
    //       nextPicture = 0
    //     }
    //     this.setState({ alert: `You've been matched with ${name}, the Kyle of your dreams.`, currentPicture: nextPicture })
      })
  }

  render(){
    return(
      <SongSelect />
    );
  }
}

export default SongSelectContainer;
