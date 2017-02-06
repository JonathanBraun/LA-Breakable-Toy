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
      requestedPlaylistName: "",
      currentPlaylist: {id: null, name: null, url: null, time: null},
      nextPlaylist: {id: null, name: null, url: null, time: null}
    };
    this.getPlaylistAuto = this.getPlaylistAuto.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getManualPlaylist = this.getManualPlaylist.bind(this);
  }

  componentDidMount(){
    let interval = setInterval(this.getPlaylistAuto, 600000 );
    this.setState({interval: interval});
    if (this.state.manual) {
      this.getManualPlaylist();
    } else {
      this.getPlaylistAuto();
    }
  }

  // componentWillUnmount () {
  //    // use intervalId from the state to clear the interval
  //    clearInterval(this.state.interval);
  // }


  handleClick(){
    this.setState(prevState => ({
      manual: !prevState.manual
    }));
  }

  getManualPlaylist(event){
    clearInterval(this.state.interval);
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
          nextPlaylist: data[1]
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
          Manual &nbsp;
            <input onClick={this.handleClick} type="checkbox" name="checkgroup"/>
          </label>
          </form>
        </span>
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
      )} else {
        return(
          <div>
            <span>
              <form name="test">
                <label className="checkbox-inline">Automatic &nbsp;
                  <input onClick={this.handleClick} type="checkbox" name="checkgroup"/>
                </label>
              </form>
            </span>
            <Playlist
              key={this.state.currentPlaylist.id}
              name={this.state.currentPlaylist.name}
              url={this.state.currentPlaylist.url}
              time={this.state.currentPlaylist.time}
            />
            <PlaylistStatus
              name={this.state.currentPlaylist.name}
              nextName={this.state.nextPlaylist.name}
              nextTime={this.state.nextPlaylist.time}
             />
           </div>
        );
      }


  }
}

export default PlaylistContainer;
