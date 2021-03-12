const express = require("express");
const router = express.Router();
const Trip = require('../../models/Trip');
const passport = require('passport');
const validateTripInput = require('../../validation/trip');

router.get('/:id', (req, res) => {
  Trip.findById(req.params.id)
    .then(trip => res.json(trip))
    .catch(err =>
      res.status(404).json({ notripfound: 'No trip found with that ID' })
    );
});

router.get('/user/:user_id', (req, res) => {
  Trip.find({ user: req.params.user_id })
    .sort({ date: -1 })
    .then(trips => res.json(trips))
    .catch(err =>
      res.status(404).json({ notripsfound: 'No trips found for that user' }
      )
    );
});

router.post('/', (req, res) => {
    const { errors, isValid } = validateTripInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newTrip = new Trip({
      user: req.body.user,
      title: req.body.title,
      team: req.body.team,
      food: req.body.food,
      equipment: req.body.equipment,
      date: req.body.date,
      parkId: req.body.parkId,
      trailName: req.body.trailName
    });

    newTrip.save().then(trip => res.json(trip));
  }
);

router.put('/update/:id', (req, res) => {
    const { errors, isValid } = validateTripInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const updatedTrip = {
      user: req.user.id,
      title: req.body.title,
      // time: req.body.time,
      // location: req.body.location,
      team: req.body.team,
      food: req.body.food,
      equipment: req.body.equipment
    }

    Trip.findByIdAndUpdate(
      req.params.id,
      { $set: updatedTrip}
    ).then(trip => res.json(trip))
  }
);

router.delete('/delete/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Trip.findByIdAndDelete(req.params.id)
    .then(trip => res.json(trip))
  }
);

module.exports = router;