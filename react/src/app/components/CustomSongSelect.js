import React, { Component } from 'react';
import Playlist from '../components/Playlist';
import PlaylistStatus from '../components/PlaylistStatus';
import CustomDropDownSelect from '../components/CustomDropDownSelect';

class CustomSongSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeslots: [],
      user_playlists: []
    };
  }

  componentDidMount(){
    $.ajax({
        method: "GET",
        url: "/api/v1/custom_playlists",
      })
      .done(data => {
        this.setState({
          timeslots: data.timeslots,
          user_playlists: data.user_playlists
        });
      });
  }

  setTimeslot(event){
    console.log(event.target);
      // let fetchBody = { playlist_id: event.target.playlist_id, timeslot_id: event.target.timeslot_id};
      //
      // fetch('/api/v1/customplaylists',
      //   { method: "POST",
      //   body: JSON.stringify(fetchBody)
      //   })
      //   .then((response) => {
      //     // alert("Playlist saved to selected timeslot!");
      //   });
  }

render() {
  let timeslots = this.state.timeslots.map(timeslot => {
      return(
        <CustomDropDownSelect
          key={timeslot.id}
          timeslot={timeslot}
          user_playlist={this.state.user_playlists}
          setTimeslot={setTimeslot()}
         />
      );
    });

  return(
    <div>
      <table>
        <thead>
        <tr>
           <th>Time: AM</th>
           <th>Playlist</th>

           <th>Time: PM</th>
           <th>Playlist</th>
        </tr>
        </thead>
        <tfoot>
          {timeslots}
        </tfoot>
      </table>
    </div>

  );
  }
}

export default CustomSongSelect;
