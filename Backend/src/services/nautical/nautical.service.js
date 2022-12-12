// Initializes the `Nautical` service on path `/nautical`
const { Nautical } = require('./nautical.class');
const createModel = require('../../models/nautical.model');
const hooks = require('./nautical.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/nautical', new Nautical(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('nautical');

  service.hooks(hooks);
};
