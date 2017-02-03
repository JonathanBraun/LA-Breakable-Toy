import React from 'react';

const SongSelect = props => {

  return(
    <form action="" method="">
      <label htmlFor="playlist">Switch Playlists:</label>
      <select id="dropdown">
        <option value="get_up_and_go">Get Up & Go</option>
        <option value="inspiration">Inspiration</option>
        <option value="relaxation">Relaxation</option>
        <option selected value="taking_care_of_business">Taking Care of Business</option>
        <option value="Americana">Americana</option>
        <option value="love_songs">Love Songs</option>
        <option value="heartache">Heartache</option>
        <option value="evening_wind_down">Evening Wind Down</option>
      </select>
    </form>
  )
}

export default SongSelect;
