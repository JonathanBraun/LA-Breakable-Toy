import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

$(function() {
    if (document.getElementById('app')){
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  }
});

// $(function() {
//   document.getElementById('dropdown').addEventListener('change',function(){
//     alert('Hello');
//   });
// });
