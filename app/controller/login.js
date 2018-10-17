'use strict';

const Controller = require("../core/baseController");

class LoginController extends Controller {
  async index(){
    const ctx = this.ctx;
    const {
      account,  //帐号
      pwd,      //密码
      vcode,    //验证码
    } = ctx.request.body;

    const info = await ctx.app.mysql.get("pft_member",{account : "123624"})
    console.log(info);

    // const result = await this.request("/dlogin.php",{
    //   method : "post",
    //   data : ctx.request.body
    // })
    // ctx.body = result;
  }
}

module.exports = LoginController;
