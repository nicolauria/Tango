const Validator = require('validator');
const isEmpty = require('./is-empty');
// const isBoolean = require('./is-boolean');

module.exports = function validateTaskInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.time = !isEmpty(data.time) ? data.time : '';
    data.teamMemberId = !isEmpty(data.teamMemberId) ? data.teamMemberId : '';
    data.projectId = !isEmpty(data.projectId) ? data.projectId : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title is required';
    }

    if (Validator.isEmpty(data.time)) {
        errors.time = 'Estimated time of completion is required';
    }

    if (Validator.isEmpty(data.teamMemberId)) {
        errors.teamMemberId = 'Team Member ID is required';
    }

    if (Validator.isEmpty(data.projectId)) {
        errors.projectId = 'Project ID is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
