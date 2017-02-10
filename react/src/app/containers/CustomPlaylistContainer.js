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
    // this.getCustomPlaylist = this.getCustomPlaylist.bind(this);
    // this.getManualPlaylist = this.getManualPlaylist.bind(this);
  }

  // componentDidMount(){
  //   this.getPlaylistAuto();
  //   setInterval(this.getPlaylistAuto, 3000);
  // }

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
  //
  // getManualPlaylist(event){
  //   let fetchBody = { name: event.target.value };
  //   fetch('/api/v1/playlists',
  //     { method: "POST",
  //     body: JSON.stringify(fetchBody)
  //     })
  //     .then((response) => {
  //       let playlist = response.json();
  //       return playlist;
  //     }).then((response) => {
  //       this.setState({
  //         currentPlaylist: response
  //       });
  //     });
  // }
  //
  // getPlaylistAuto () {
  //   $.ajax({
  //       method: "GET",
  //       url: "/api/v1/playlists",
  //     })
  //     .done(data => {
  //       let time = data[1].time;
  //       let timeString = time.toString();
  //       this.setState({
  //         currentPlaylist: data[0],
  //         nextPlaylist: data[1],
  //         nextTime: data[2]
  //       });
  //     });
  //
  // }
  //
  //
  // getCustomPlaylist(){
  //   let fetchBody = { playlist_id: 1, timeslot_id: 1};
  //
  //   fetch('/api/v1/customplaylists',
  //     { method: "POST",
  //     body: JSON.stringify(fetchBody)
  //     })
  //     .then((response) => {
  //       // alert("Playlist saved to selected timeslot!");
  //     });
  // }

  render(){
      return(
        <div>
        <CustomSongSelect
        />
        <br/>
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
