import React, { Component } from 'react';
import Playlist from '../components/Playlist';
import PlaylistStatus from '../components/PlaylistStatus';
import SongSelect from '../components/SongSelect';

class PlaylistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      manual: false,
      interval: null,
      nextTime: "",
      currentPlaylist: {id: null, name: null, url: null, time: null},
      nextPlaylist: {id: null, name: null, url: null, time: null}
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

  getPlaylistAuto () {
    $.ajax({
        method: "GET",
        url: "/api/v1/playlists",
      })
      .done(data => {
        this.setState({
          currentPlaylist: data[0],
          nextPlaylist: data[1],
          nextTime: data[2]
        });
      });

  }

  render(){
    if (this.state.manual) {
      return(
        <div>
        <span>
          <form name="test">
          <label className="checkbox-inline">
          Deselect for Automatic &nbsp;
            <input onClick={this.handleClick} type="checkbox" name="checkgroup" id="auto_man"/>
          </label>
          </form>
        </span>
        <SongSelect
          getManualPlaylist={this.getManualPlaylist}
        />
        <Playlist
          url={this.state.currentPlaylist.url}
        />
        </div>
      )} else {
        return(
          <div>
            <span>
              <form name="test">
                <label className="checkbox-inline"> Select for Manual &nbsp;
                  <input onClick={this.handleClick} type="checkbox" name="checkgroup" id="auto_man"/>
                </label>
              </form>
            </span>
            <Playlist
              url={this.state.currentPlaylist.url}
            />
            <PlaylistStatus
              name={this.state.currentPlaylist.name}
              nextName={this.state.nextPlaylist.name}
              nextTime={this.state.nextTime}
             />
           </div>
        );
      }
  }
}

export default PlaylistContainer;
