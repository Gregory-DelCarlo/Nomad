import React from 'react';

const Trip = ({ trip }) => (
  <div className='trip-show'>
    <div className='trip-show-box'>
      <h1>{trip.title}</h1>
      <div className='trip-show-date-location'>
        <h2>Date and Location:</h2>
        <ul>
          <li>Start Date: {trip.startDate}</li>
          <li>End Date: {trip.endDate}</li>
          <li>Location: {trip.trailName}</li>
        </ul>
      </div>
      <div className='trip-show-team'>
        <h2>Team:</h2>
        <ul className="team-list">
          {trip.team.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
      <div className='trip-show-supplies'>
        <h2>Supplies:</h2>
        <div className="supply-lists">
          <div className='food-list'>
            <label>Food</label>
            <ul>
              {trip.food.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='equipment-list'>
            <label>Equipment</label>
            <ul>
              {trip.equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Trip;