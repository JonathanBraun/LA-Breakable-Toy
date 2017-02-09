import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import AppCustom from './app/AppCustom';

$(function() {
    if (document.getElementById('app')){
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  } else if (document.getElementById('app_custom')){
    ReactDOM.render(
      <AppCustom />,
      document.getElementById('app_custom')
    );
  }
});
