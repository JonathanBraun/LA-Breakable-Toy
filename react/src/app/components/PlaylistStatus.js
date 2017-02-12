import React from 'react';

const PlaylistStatus = props => {

  return(
    <div>
      <br/>
      <br/>
      <h6 className="row text-center white-text">Current Playlist: {props.name} 	&#47;&#47; Next Playlist: {props.nextName} 	&#47;&#47; Scheduled Start Time: {props.nextTime}</h6>
    </div>
  );
};

export default PlaylistStatus;
