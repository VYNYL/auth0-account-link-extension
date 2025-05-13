const apiCall = require('./api');

const findUsersByEmail = email =>
  apiCall({
    path: 'users-by-email',
    qs: { email: email.toLowerCase() }
  });

module.exports = findUsersByEmail;
