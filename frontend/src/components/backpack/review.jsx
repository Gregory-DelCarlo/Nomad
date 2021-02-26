import React from 'react';

const Review = ({ reviewBackpack }) => (
  <div className='review'>
    <div className='review-box'>
      <h1>Review {reviewBackpack.title}</h1>
      <div className='review-team'>
        <h2>Team:</h2>
        <ul className="team-list">
          {reviewBackpack.team.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
      <div className='review-supplies'>
        <h2>Supplies:</h2>
        <div className='review-supplies-box'>
          <div className='food-list'>
            <label>Food</label>
            <ul>
              {reviewBackpack.food.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='equipment-list'>
            <label>Equipment</label>
            <ul>
              {reviewBackpack.equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Review;