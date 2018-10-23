const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProjectInput(data) {
  let errors = {};
  
  data.title = !isEmpty(data.title) ? data.title : '';
  data.managerId = !isEmpty(data.managerId) ? data.managerId : '';
  data.idealProjectLength = !isEmpty(data.idealProjectLength) ? data.idealProjectLength : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title is required';
  }

  if (Validator.isEmpty(data.managerId)) {
    errors.managerId = 'Manager id is required';
  }

  if (Validator.isEmpty(data.idealProjectLength)) {
    errors.idealProjectLength = 'Ideal project length is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
