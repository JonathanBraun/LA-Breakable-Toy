import React, { Component } from 'react';
import Playlist from '../components/Playlist';
import PlaylistStatus from '../components/PlaylistStatus';
import SongSelect from '../components/SongSelect';

class PlaylistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      manual: false,
      requestedPlaylistName: "",
      currentPlaylist: {id: null, name: null, url: null, time: null},
      nextPlaylist: {id: null, name: null, url: null, time: null}
    };
    this.getPlaylistAuto = this.getPlaylistAuto.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getManualPlaylist = this.getManualPlaylist.bind(this);
  }

  componentDidMount(){
    if (this.state.manual) {
      this.getManualPlaylist();
      //  clearInterval();
    } else {
      this.getPlaylistAuto();
      setInterval(this.getPlaylistAuto, 600000 );
    }
  }

  //getManualPlaylist, makes the fetch call, gets new playlist, sets currentPlaylist = result of fetch
  //clearInterval

  handleClick(){
    this.setState(prevState => ({
      manual: !prevState.manual
    }));
  }

  handleSelect(){

  }

  getManualPlaylist(){
    console.log(event.target);
    let requestedPlaylistName = event.target.value;
    let fetchBody = { name: requestedPlaylistName };
    fetch('/api/v1/playlists',
      { method: "POST",
      body: JSON.stringify(fetchBody)
      })
      .then((response) => {
        let playlist = response.json();
        console.log(playlist);
        return playlist;
      }).then((response) => {
        // let currentPlaylist;
        // if (this.state.currentPlaylist != ){
        //   currentPlaylist = this.state.currentPicture + 1
        // }
        // this.setState({ alert: `You've been matched with ${name}, the Kyle of your dreams.`, currentPicture: nextPicture })
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
