import path from 'path';
import egg from 'egg';

export * from 'egg';

const EGG_PATH = Symbol.for('egg#eggPath');

export class Application extends egg.Application {
  get [EGG_PATH]() {
    return path.dirname(__dirname);
  }
  get pkgName() {
    return this.name;
  }
}

export class Agent extends egg.Agent {
  get [EGG_PATH]() {
    return path.dirname(__dirname);
  }
}
