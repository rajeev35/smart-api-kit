/**
 * Express Logger Middleware
 * Logs incoming requests with timestamp, method, URL, status
 */

const apiLogger = require('../logger');

function loggerMiddleware(req, res, next) {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const timestamp = new Date().toISOString();
    apiLogger.info(`${req.method} ${req.url} ${res.statusCode} - ${duration}ms`);
  });
  
  next();
}

module.exports = loggerMiddleware;

