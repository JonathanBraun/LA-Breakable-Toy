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
    this.getCustomPlaylist = this.getCustomPlaylist.bind(this);
    this.getManualPlaylist = this.getManualPlaylist.bind(this);
  }

  componentDidMount(){
    $(document).foundation('accordion', 'reflow');
    this.getCustomPlaylist();
    setInterval(this.getCustomPlaylist, 3000);
  }

  // handleClick(){
  //   this.setState(prevState => ({
  //     manual: !prevState.manual
  //   }));
  //   if (document.getElementById("auto_man").checked) {
  //     clearInterval(this.state.interval);
  //     this.getManualPlaylist(event);
  //   } else {
  //     this.getPlaylistAuto();
  //     let interval = setInterval(this.getPlaylistAuto, 5000 );
  //     this.setState({interval: interval});
  //   }
  // }

  getManualPlaylist(event){
    let fetchBody = { name: event.target.value };
    fetch('/api/v1/playlists',
      { method: "POST",
      body: JSON.stringify(fetchBody)
      })
      .then((response) => {
        let playlist = response.json();
        return playlist;
      }).then((response) => {
        this.setState({
          currentPlaylist: response
        });
      });
  }


  getCustomPlaylist(event){
    // let fetchBody = { playlist_id: , timeslot_id: };
    let fetchBody = { name: event.target.value, time };

    fetch('/api/v1/customplaylists',
      { method: "POST",
      body: JSON.stringify(fetchBody)
      })
      .then((response) => {
        alert("Playlist saved to selected timeslot!");
      });
  }

  render(){
      return(
        <div>
        <CustomSongSelect
          getCustomPlaylist={this.getCustomPlaylist}
        />
        <Playlist
          key={this.state.currentPlaylist.id}
          name={this.state.currentPlaylist.name}
          url={this.state.currentPlaylist.url}
          time={this.state.currentPlaylist.time}
        />
        </div>
      );
  }
}

export default CustomPlaylistContainer;
