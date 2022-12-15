// Initializes the `email-sender` service on path `/email-sender`
const { EmailSender } = require('./email-sender.class');
const hooks = require('./email-sender.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/email-sender', new EmailSender(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('email-sender');

  service.hooks(hooks);
};
