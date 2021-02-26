
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rid: {
        type: Number,
        required: true
    }
})

const Park = new mongoose.model('parks', ParkSchema);
module.exports = Park;