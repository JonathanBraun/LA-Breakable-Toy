import React, { Component } from 'react';
import Playlist from '../components/Playlist';
import PlaylistStatus from '../components/PlaylistStatus';
import CustomDropDownSelect from '../components/CustomDropDownSelect';
import BeginTimeEndTime from '../components/BeginTimeEndTime';



class CustomSongSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      first_timeslots: [],
      second_timeslots: [],
      user_playlists: [],
      first_custom_playlist_timeslots: [],
      second_custom_playlist_timeslots: [],
      timeslots_array: [],
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
          first_timeslots: data.first_timeslots,
          second_timeslots: data.second_timeslots,
          user_playlists: data.user_playlists,
          first_custom_playlist_timeslots: data.first_custom_playlist_timeslots,
          second_custom_playlist_timeslots: data.second_custom_playlist_timeslots,
          timeslots_array: data.timeslots_array
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
          currentPlaylist: playlist[0]
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
  console.log(`I'm in a render`);
  console.log(this.state.currentPlaylist.url);
  let first_timeslots = this.state.timeslots_array.map(timeslot => {
      let timeFunction = (event) => this.setTimeslot(timeslot.id, event);
      return(
          <tr>
            <BeginTimeEndTime
              timeslot={timeslot}
            />
            <CustomDropDownSelect
            key={timeslot.id}
            user_playlist={this.state.user_playlists}
            setTimeslot={timeFunction}
            />
          </tr>
      );
    });
    let second_timeslots = this.state.second_timeslots.map(timeslot => {
        let timeFunction = (event) => this.setTimeslot(timeslot.id, event);
        return(
          <tr>
          <BeginTimeEndTime
            timeslot={timeslot}
          />
          <CustomDropDownSelect
            key={timeslot.id}
            timeslot={timeslot}
            user_playlist={this.state.user_playlists}
            setTimeslot={timeFunction}
           />
           </tr>
        );
      });

  return(
    <div>
      <div>
        <table className="one">
          <thead>
          <tr>
             <th>Military Time:</th>
             <th>Playlist</th>
          </tr>
          </thead>
          <tbody>
            {first_timeslots}
          </tbody>
        </table>
        <table className="two">
          <thead>
          <tr>
             <th>Military Time:</th>
             <th>Playlist</th>
          </tr>
          </thead>
          <tbody>
            {second_timeslots}
          </tbody>
        </table>
      </div>
      <Playlist
        url={this.state.currentPlaylist.url}
      />
    </div>
  );
  }
}

export default CustomSongSelect;
