// Initializes the `Motorcycle` service on path `/motorcycle`
const { Motorcycle } = require('./motorcycle.class');
const createModel = require('../../models/motorcycle.model');
const hooks = require('./motorcycle.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/motorcycle', new Motorcycle(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('motorcycle');

  service.hooks(hooks);
};
