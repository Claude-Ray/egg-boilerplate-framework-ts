'use strict';

import { Controller } from 'egg';

class HomeController extends Controller {
  async index () {
    const data = await this.service.test.get(123);
    this.ctx.body = data.name;
  }

  async date() {
    const date: Date = this.ctx.currentDate;
    this.ctx.body = date.toDateString();
  }
}

export default HomeController;
