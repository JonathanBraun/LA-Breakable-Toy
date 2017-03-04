import React from 'react';

const CustomDropDownSelect = props => {
  return(
      <td>
        <form action="" method="">
          <select className='transparent' onChange={props.setTimeslot}>
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
      </td>
  );
};

export default CustomDropDownSelect;
