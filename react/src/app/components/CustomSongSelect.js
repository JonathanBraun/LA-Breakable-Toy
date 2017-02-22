import React, { Component } from 'react';
import Playlist from '../components/Playlist';
import PlaylistStatus from '../components/PlaylistStatus';
import CustomDropDownSelect from '../components/CustomDropDownSelect';

class CustomSongSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeslots: [],
      user_playlists: [],
      custom_playlist_timeslots: [],
      currentPlaylist: {id: null, name: null, url: null, time: null}
    };
    this.setTimeslot = this.setTimeslot.bind(this);
    this.getPlaylistAuto = this.getPlaylistAuto.bind(this);
  }

  componentDidMount(){
    $.ajax({
        method: "GET",
        url: "/api/v1/custom_playlists",
      })
      .done(data => {
        this.setState({
          timeslots: data.timeslots,
          user_playlists: data.user_playlists,
          custom_playlist_timeslots: data.custom_playlist_timeslots
        });
      });
      let interval = setInterval(this.getPlaylistAuto, 5000 );
      this.getPlaylistAuto();
  }

  getPlaylistAuto () {
    fetch("/api/v1/custom_playlists/0",
      { credentials: "include"})
      .then((response) => {
        let playlist = response.json();
        return playlist;
      }).then(playlist => {
        this.setState({
          currentPlaylist: playlist
        });
      });
  }

  setTimeslot(timeslotId, event){
      let fetchBody = { playlist: event.target.value, timeslot_id: timeslotId};

      fetch('/api/v1/custom_playlists',
        { method: "POST",
        body: JSON.stringify(fetchBody),
        credentials: 'include'
        })
        .then((response) => {
          let message = response.json();
          return message;
        })
        .then((message) => {
          alert(`${message.message}`);
          this.getPlaylistAuto();
        });
  }

render() {
  let timeslots = this.state.timeslots.map(timeslot => {
      let timeFunction = (event) => this.setTimeslot(timeslot.id, event);
      return(
        <CustomDropDownSelect
          key={timeslot.id}
          timeslot={timeslot}
          user_playlist={this.state.user_playlists}
          setTimeslot={timeFunction}
         />
      );
    });

  return(
    <div>
      <table>
        <thead>
        <tr>
           <th>Military Time:</th>
           <th>Playlist</th>
        </tr>
        </thead>
        <tfoot>
          {timeslots}
        </tfoot>
      </table>
      <Playlist
        url={this.state.currentPlaylist.url}
      />
    </div>


  );
  }
}

export default CustomSongSelect;
