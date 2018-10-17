'use strict';

const Controller = require("../core/baseController")
class ProductController extends Controller {
  async index() {
     const {query} = this.ctx;
     const result = await this.request("/r/product_ProductList/getList",{
       method : "post",
       data : query
     })
     return result;
  }
}

module.exports = ProductController;
