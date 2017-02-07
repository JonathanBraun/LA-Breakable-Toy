import React from 'react';

const PlaylistStatus = props => {

  return(
    <div>
      <br/>
      <br/>
      <h6 className="row text-center white-text">Current Playlist: {props.name} || Next Playlist: {props.nextName} || Scheduled Start Time: {props.nextTime} </h6>
    </div>
  )
};

export default PlaylistStatus;
