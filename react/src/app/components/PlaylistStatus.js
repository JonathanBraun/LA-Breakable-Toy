import React from 'react';

const PlaylistStatus = props => {

  return(
    <br/>
    <br/>
    <h6 className="row text-center white-text">Current Playlist: {props.name} || Next Playlist: {props.nextName} || Scheduled Start Time: {props.nextTime} </h6>

  )
};

export default PlaylistStatus;
