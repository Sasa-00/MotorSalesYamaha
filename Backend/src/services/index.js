const motorcycle = require('./motorcycle/motorcycle.service.js');
const scooter = require('./scooter/scooter.service.js');
const nautical = require('./nautical/nautical.service.js');
const atv = require('./atv/atv.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(motorcycle);
  app.configure(scooter);
  app.configure(nautical);
  app.configure(atv);
};
