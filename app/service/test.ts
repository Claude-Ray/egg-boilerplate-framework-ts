'use strict';

import { Service } from 'egg';

/**
 * Test Service
 */
class Test extends Service {
  constructor (ctx) {
    super(ctx);
    this.config = this.app.config.test;
  }

  async get (id) {
    return { id, name: this.config.key };
  }
}

export default Test;
