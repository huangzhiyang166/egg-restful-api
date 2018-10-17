'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539662085321_629';

  config.middleware = [];
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*']
  };
  config.cors = {
    origin:'*',
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  config.mysql = {
    client: {
      // host
      host: '192.168.20.138',
      // 端口号
      port: '3307',
      // 用户名
      user: 'develop',
      // 密码
      password: 'develop%',
      // 数据库名
      database: 'myuu',
    },
    app : true
  }

  config.jwt = {
    secret: 'pft-restful-api-jwt-secret',
    enable: false,
  }



  return config;
};
