import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// $(function() {
//   if (document.getElementById('app')) {
//     ReactDOM.render(
//       <iframe src="https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:6XIs7oxG4KjWixZsI2F3t8" width="400" height="300" frameBorder="0" allowTransparency="true"></iframe>,
//       document.getElementById('app')
//     );
//   }
// });

$(function() {
    if (document.getElementById('app')){
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  }
});
