import path from 'path';
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  currentDate: {
    enable: false,
    path: path.join(__dirname, '../lib/plugin/egg-current-date'),
  },
};

export default plugin;
