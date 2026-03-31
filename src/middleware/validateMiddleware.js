/**
 * Express Validation Middleware Factory
 * Creates middleware for email/phone validation on req.body/query
 * Usage: app.post('/user', api.validateEmailMiddleware('body.email'), handler);
 */

const validator = require('../validator');
const response = require('../response');

function validateEmailMiddleware(fieldPath = 'body.email', errorMessage = 'Invalid email') {
  return function(req, res, next) {
    const value = fieldPath.split('.').reduce((o, k) => o?.[k], req);
    if (!validator.validateEmail(value)) {
      return res.status(400).json(response.error(errorMessage, 400));
    }
    next();
  };
}

function validatePhoneMiddleware(fieldPath = 'body.phone', errorMessage = 'Invalid phone') {
  return function(req, res, next) {
    const value = fieldPath.split('.').reduce((o, k) => o?.[k], req);
    if (!validator.validatePhone(value)) {
      return res.status(400).json(response.error(errorMessage, 400));
    }
    next();
  };
}

module.exports = {
  validateEmailMiddleware,
  validatePhoneMiddleware
};

