const assert = require('assert');
const app = require('../../src/app');

describe('\'Motorcycle\' service', () => {
  it('registered the service', () => {
    const service = app.service('motorcycle');

    assert.ok(service, 'Registered the service');
  });
});
