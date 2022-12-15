const assert = require('assert');
const app = require('../../src/app');

describe('\'email-sender\' service', () => {
  it('registered the service', () => {
    const service = app.service('email-sender');

    assert.ok(service, 'Registered the service');
  });
});
