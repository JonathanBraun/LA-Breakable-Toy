import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   monsters: []
    // };
    this.clickButton = this.clickButton.bind(this)
  }


  componentDidMount() {
    debugger;
     this.clickButton();
   }

 clickButton () {
   let document;
   document.getElementById('play-button').click();
   document.getElementById('play-button').click();
   debugger;
 }

$(function() {
  ReactDOM.render(
      <iframe src="https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:02fNngUe73Gf95yUc6Kw00" width="400" height="300" frameborder="0" allowTransparency="true" ></iframe>,
    document.getElementById('app')
  );
});
