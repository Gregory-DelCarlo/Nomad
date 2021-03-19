import React from 'react';

const Review = ({ reviewBackpack, saveTrip, changeView }) => (
  <div className='review'>
    <div className='review-box'>
      <h1>{reviewBackpack.title}</h1>
      <div className='review-date-location'>
        <h2>Date and Location:</h2>

        <div className="test">
          <ul>
            <li>Start Date: {reviewBackpack.startDate}</li>
            <li>End Date: {reviewBackpack.endDate}</li>
            <li>Location: {reviewBackpack.trailName}</li>
          </ul>
          <div onClick={() => changeView("time and location form")}>
            <i className='fas fa-pencil-alt' id="review"/>
          </div>
        </div>

      </div>
      <div className='review-team'>
        <h2>Team:</h2>

        <div className="test">
          <ul className="team-list">
            {reviewBackpack.team.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
          <div onClick={() => changeView("team form")}>
            <i className='fas fa-pencil-alt' id="review" />
          </div>
        </div>
      </div>

      <div className='review-supplies'>
        <h2>Supplies:</h2>
          <div className="supply-lists">
            <div className='food-list'>

              <label>Food</label>
              <div className="test">

                <ul>
                  {reviewBackpack.food.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div onClick={() => changeView("supplies form")}>
                  <i className='fas fa-pencil-alt' id="review"/>
                </div>
              </div>

            </div>


            <div className='equipment-list'>
              <label>Equipment</label>

              <div className="test">
                <ul>
                  {reviewBackpack.equipment.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div onClick={() => changeView("supplies form")}>
                  <i className='fas fa-pencil-alt' id="review"/>
                </div>
              </div>

            </div>
          </div>
      </div>
      <button onClick={() => saveTrip()}>Save Trip</button>
    </div>
  </div>
);

export default Review;