/**
 * Basic Validators for common inputs
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/;

function validateEmail(email) {
  return typeof email === 'string' && EMAIL_REGEX.test(email);
}

function validatePhone(phone) {
  return typeof phone === 'string' && PHONE_REGEX.test(phone);
}

module.exports = {
  validateEmail,
  validatePhone
};

