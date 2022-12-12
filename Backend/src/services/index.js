const motorcycle = require('./motorcycle/motorcycle.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(motorcycle);
};
