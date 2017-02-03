import React from 'react';

const Playlist = props => {

  return(
    <div>
      <iframe src={props.url} width="400" height="300" frameBorder="0" allowTransparency="true"></iframe>
      <br/>
      <br/>
      <h6 className="row text-center white-text">Current Playlist: {props.name} || Next Playlist: {props.nextName} || Scheduled Start Time: {props.nextTime} </h6>
    </div>
  )
};

export default Playlist;
