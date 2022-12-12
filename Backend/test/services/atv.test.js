const assert = require('assert');
const app = require('../../src/app');

describe('\'Atv\' service', () => {
  it('registered the service', () => {
    const service = app.service('atv');

    assert.ok(service, 'Registered the service');
  });
});
