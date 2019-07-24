import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };

  return config;
};
