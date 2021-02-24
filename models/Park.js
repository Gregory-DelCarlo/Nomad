const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    trail_map: {
        type: String,
        required: true
    }
})