import React from 'react';

const Start = ({ clickAddItem }) => (
  <div>
    <h1>Plan you trip!</h1>
    <h2>Click below to begin planning your trip.</h2>
    <button onClick={clickAddItem}>Start planning</button>
  </div>
);

export default Start;