import React from 'react';

const SongSelect = props => {

  return(
    <form action="" method="" className="text-center">
      <label className="text-center" htmlFor="playlist">Switch Playlists:</label>
      <select id="dropdown" onChange={props.getManualPlaylist}>
        <option value="Get Up & Go">Get Up & Go</option>
        <option value="Inspiration">Inspiration</option>
        <option value="Relaxation">Relaxation</option>
        <option selected value="Taking Care of Business">Taking Care of Business</option>
        <option value="Americana">Americana</option>
        <option value="Love Songs">Love Songs</option>
        <option value="Heartache">Heartache</option>
        <option value="Evening Wind Down">Evening Wind Down</option>
      </select>
    </form>
  );
};

export default SongSelect;
