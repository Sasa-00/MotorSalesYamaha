const assert = require('assert');
const app = require('../../src/app');

describe('\'Scooter\' service', () => {
  it('registered the service', () => {
    const service = app.service('scooter');

    assert.ok(service, 'Registered the service');
  });
});
