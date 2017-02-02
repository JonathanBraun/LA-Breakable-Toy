import React from 'react';

const Playlist = props => {

  return(
    <iframe src={props.url} width="400" height="300" frameBorder="0" allowTransparency="true"></iframe>
  )
}

export default Playlist;
