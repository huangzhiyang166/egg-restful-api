const { Controller } = require('egg');
class BaseController extends Controller {
    constructor(ctx){
        super(ctx);
        // this._PHPSESSID = "";
    }
    async request(url, opts){
        const ctx = this.ctx;
        const baseURL = "http://my.12301.local";
        const headers = {
            "Referer" : baseURL
        };
        const _PHPSESSID = this.ctx.cookies.get("PHPSESSID",{
            httpOnly : false,
            path : "/",
            domain : ".127.0.0.1",
            signed: false
        });
        console.log("_PHPSESSID",_PHPSESSID)
        if(_PHPSESSID) headers["set-cookies"] = [
            `PHPSESSID=${_PHPSESSID}; path=/`
        ];
        opts = Object.assign({
          timeout: [ '30s', '30s' ],
          dataType: 'json',
          headers : headers
        }, opts);
        const result = await this.ctx.curl(`${baseURL}${url}`, opts);
        const newHeaders = result.res.headers;
        const cookies = newHeaders["set-cookie"][0].split("; ")[0];
        const val = cookies.split("=")[1];
        this.ctx.cookies.set("PHPSESSID",val,{
            httpOnly : false,
            path : "/",
            domain : ".127.0.0.1",
            signed: false
        });
        return result.data;
    }
}
module.exports = BaseController;