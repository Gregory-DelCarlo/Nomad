const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "parks"
    // possibly change later 
  },
  team: {
    type: Array
  },
  food: {
    type: Array
  },
  equipment: {
    type: Array
  }
})

module.exports = Trip = mongoose.model('Trip', TripSchema);