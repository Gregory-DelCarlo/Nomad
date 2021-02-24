import React from 'react';

const Start = ({ clickFunction }) => (
  <div>
    <h1>Plan you trip!</h1>
    <h2>Click below to begin planning your trip.</h2>
    <button onClick={clickFunction}>Start planning</button>
  </div>
);

export default Start;