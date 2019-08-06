'use strict';

import assert from 'assert';
import { mock } from 'egg-mock/bootstrap';

describe('test/framework.test.ts', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'example',
      framework: process.cwd(),
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('framework-ts-example_123456')
      .expect(200);
  });

  it('should GET /date', () => {
    return app.httpRequest()
      .get('/date')
      .expect(new Date().toDateString())
      .expect(200);
  });

  it('should have pkgName', () => {
    assert.equal(app.pkgName, app.name);
  });
});
