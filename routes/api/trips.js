const express = require("express");
const router = express.Router();
const Trip = require('../../models/Trip');

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

module.exports = router;