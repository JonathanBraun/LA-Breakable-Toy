import React, { Component } from 'react';
import Playlist from '../components/Playlist';
import PlaylistStatus from '../components/PlaylistStatus';
import SongSelect from '../components/SongSelect';

class CustomPlaylistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      requestedPlaylistName: "",
      timeslots: []
    };
    this.getPlaylistAuto = this.getPlaylistAuto.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getManualPlaylist = this.getManualPlaylist.bind(this);
  }

  componentDidMount(){
    let interval = setInterval(this.getPlaylistAuto, 5000 );
    this.setState({interval: interval});
    if (this.state.manual) {
      this.getManualPlaylist();
    } else {
      this.getPlaylistAuto();
    }
  }

  handleClick(){
    this.setState(prevState => ({
      manual: !prevState.manual
    }));
    if (document.getElementById("auto_man").checked) {
      clearInterval(this.state.interval);
      this.getManualPlaylist(event);
    } else {
      this.getPlaylistAuto();
      let interval = setInterval(this.getPlaylistAuto, 5000 );
      this.setState({interval: interval});
    }
  }

  getCustomPlaylist(event){
    let fetchBody = { playlist_id: , timeslot_id: };


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
        <span>
          <form name="test">
          <label className="checkbox-inline">
          Manual &nbsp;
            <input onClick={this.handleClick} type="checkbox" name="checkgroup" id="auto_man"/>
          </label>
          </form>
        </span>
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
          handleSelect={this.handleSelect}
        />
        <Playlist
          key={this.state.currentPlaylist.id}
          name={this.state.currentPlaylist.name}
          url={this.state.currentPlaylist.url}
          time={this.state.currentPlaylist.time}
        />
        </div>
      )
  }
}

export default CustomPlaylistContainer;
