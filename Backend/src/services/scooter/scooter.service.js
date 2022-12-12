// Initializes the `Scooter` service on path `/scooter`
const { Scooter } = require('./scooter.class');
const createModel = require('../../models/scooter.model');
const hooks = require('./scooter.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/scooter', new Scooter(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('scooter');

  service.hooks(hooks);
};
