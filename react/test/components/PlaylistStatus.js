import PlaylistStatus from 'app/components/PlaylistStatus';
import { shallow } from 'enzyme';
import React from 'react';

describe('PlaylistStatus', function() {
  let className,
      name,
      nextName,
      nextTime,
      wrapper;
//
  beforeEach(() => {
    wrapper = shallow(
      <PlaylistStatus
        name="Taking Care of Business"
        nextName="Americana"
        nextTime="16:00"
      />
    );
  });


  it('should render an h6 tag with the text "Taking Care of Business"', () => {
    expect(wrapper.find('h6').text()).toBe('Current Playlist: Taking Care of Business || Next Playlist: Americana || Scheduled Start Time: 16:00');
  });

  it('should render an h6 tag with the specific props', () => {
    expect(wrapper.find('h6').props()).toEqual({
      className: 'row text-center white-text',
      children: [ 'Current Playlist: ', 'Taking Care of Business', ' || Next Playlist: ', 'Americana', ' || Scheduled Start Time: ', '16:00' ]
    });
  });

});
