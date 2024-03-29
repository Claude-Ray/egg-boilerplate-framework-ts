'use strict';

import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/date', controller.home.date);
};
