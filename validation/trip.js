const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTripInput(data) {
  let errors = {};


  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 3, max: 50 })) {
    errors.title = 'Title must be between 3 and 50 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};