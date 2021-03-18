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
  startDate: {
    type: String
  },
  endDate: {
    type: String
  },
  trailName: {
    type: String
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

const Trip = mongoose.model('Trip', TripSchema);
module.exports = Trip;