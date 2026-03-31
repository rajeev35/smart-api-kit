/**
 * API Response Handler
 * Standardized success/error responses
 */

function success(data = null, message = 'Success', code = 200) {
  return {
    success: true,
    data,
    message,
    code
  };
}

function error(message = 'Internal Server Error', code = 500) {
  return {
    success: false,
    message,
    code
  };
}

module.exports = {
  success,
  error
};

