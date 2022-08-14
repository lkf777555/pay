//封装API接口
import {HTTP} from "../utils/request"

class IndexModel extends HTTP{
  //扫码获取商品信息接口
  getProduction(qcode){
    return this.request({
      url : "/getProduct",
      data : {
        qcode
      }
    })
  }
}

export {IndexModel}
