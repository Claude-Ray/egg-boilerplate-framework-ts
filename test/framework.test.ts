'use strict';

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
});
