const response = require('./src/response');
const logger = require('./src/logger');
const validator = require('./src/validator');
const loggerMiddleware = require('./src/middleware/loggerMiddleware');
const validateMiddleware = require('./src/middleware/validateMiddleware');

module.exports = {
  // Response handlers
  ...response,
  
  // Logger
  logger,
  
  // Validators
  ...validator,
  
  // Middleware
  middleware: {
    loggerMiddleware,
    ...validateMiddleware
  }
};

