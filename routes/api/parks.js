const express = require("express");
const router = express.Router();
const Park = require('../../models/Park')

router.get('/', (req, res) => {
    Park.find()
        .then(parks => res.send(parks))
        .catch(() => res.send('Your backend failed!'))
});

router.get('/:park_id', (req, res) => {
    Park.findById(req.params.park_id)
        .then(park => res.send(park))
});

module.exports = router;