// Initializes the `Atv` service on path `/atv`
const { Atv } = require('./atv.class');
const createModel = require('../../models/atv.model');
const hooks = require('./atv.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/atv', new Atv(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('atv');

  service.hooks(hooks);
};
