'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const v1 = "/api/v1";

module.exports = app => {
  const { router, controller } = app;
  // router.resources("product",`${v1}/product`,controller.product);
  router.post(`${v1}/login`,controller.login.index);
  router.post(`${v1}/prodList`,controller.product.index);
};
