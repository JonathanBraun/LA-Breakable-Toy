import Playlist from 'app/components/Playlist';
import { shallow } from 'enzyme';
import React from 'react';

describe('Playlist', function() {
  let className,
      name,
      url,
      time,
      wrapper;
//
  beforeEach(() => {
    wrapper = shallow(
      <Playlist
        name="Taking Care of Business"
        url="https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:6XIs7oxG4KjWixZsI2F3t8"
        time="2000-01-01T16:00:00.000Z"
      />
    );
  });

  it('should render an iframe tag', () => {
  expect(wrapper.find('iframe').length).toEqual(1);
});


  it('should render an iframe tag with the specific props', () => {
    expect(wrapper.find('iframe').props()).toEqual({
      src: 'https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:6XIs7oxG4KjWixZsI2F3t8', width: '400', height: '300', frameBorder: '0', allowTransparency: 'true'
    });
  });

});
