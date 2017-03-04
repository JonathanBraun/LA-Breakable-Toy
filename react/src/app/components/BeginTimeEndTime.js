import React from 'react';

const BeginTimeEndTime = props => {
  return(
        <td>{props.timeslot.begin_time}-{props.timeslot.end_time}</td>
  );
};

export default BeginTimeEndTime;
