import CustomSongSelect from 'app/components/CustomSongSelect';
import { shallow } from 'enzyme';
import React from 'react';


describe('CustomSongSelect', function() {
  let className,
      name,
      url,
      time,
      wrapper;
//
  beforeEach(() => {
    wrapper = shallow(
      <CustomSongSelect
      />
    );
  });

  it('should render an table tag', () => {
  expect(wrapper.find('table').length).toEqual(1);
});



});
