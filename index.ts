import * as path from 'path';
import * as egg from 'egg';

const EGG_PATH = Symbol.for('egg#eggPath');

class Application extends egg.Application {
  get [EGG_PATH] () {
    return path.dirname(__dirname);
  }
}

class Agent extends egg.Agent {
  get [EGG_PATH] () {
    return path.dirname(__dirname);
  }
}

export = Object.assign(egg, {
  Application,
  Agent,
});
