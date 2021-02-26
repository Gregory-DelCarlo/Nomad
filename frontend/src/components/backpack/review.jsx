import React from 'react';

const Review = ({ reviewBackpack }) => (
  <div className='review'>
    <div className='review-box'>
      <h1>Review</h1>
      <h2>{reviewBackpack.title}</h2>
      <div className='review-team'>
        <h3>Team</h3>
        <div className="team-list">
          {reviewBackpack.team.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </div>
      </div>
      <div className='review-supplies'>
        <h3>Supplies</h3>
        <div className='review-supplies-box'>
          <div className='food-list'>
            {reviewBackpack.food.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
          <div className='equipment-list'>
            {reviewBackpack.equipment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Review;