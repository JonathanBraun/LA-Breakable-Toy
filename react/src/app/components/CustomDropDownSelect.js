import React from 'react';

const CustomDropDownSelect = props => {
  return(
    <tr>
        <td>{props.timeslot.begin_time}-{props.timeslot.end_time}</td>
        <td>
        <form action="" method="">
          <select id="dropdown" onChange={props.setTimeslot}>
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

    </tr>
  );
};

export default CustomDropDownSelect;
