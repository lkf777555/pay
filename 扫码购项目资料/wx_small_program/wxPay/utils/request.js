import {config} from "../config"

const tips = {
  1 : "抱歉,出现了一个错误",
  301 : "永久重定向",
  400 : "请求包含不支持的参数",
  401 : "未授权",
  403 : "被禁止访问",
  404 : "请求的资源不存在",
  413 : "上传的File体积太大",
  500 : "内部错误",
  1000 : "输入参数错误",
  1001 : "输入的json格式不正确",
  1002 : "找不到资源",
  1003 : "未知错误",
  1004 : "禁止访问",
  1005 : "不正确的开发者key",
  1006 : "服务器内部错误",
  2000 :  "你已经点过赞了",
  2001 :  "你还没点过赞",
  3000 : "该期内容不存在"
}

//对wx.request进行二次封装
class HTTP {

  request({url, method = "GET",data = {}}){
    return new Promise((resolve,reject)=>{
      this._request(url,resolve, reject,method, data, )
    })
  }

  _request(url,resolve,reject,method = "GET", data = {}){
    wx.request({
      url:config.api_base_url + url,
      method : method,
      data : data,
      success : function(response){
        const code = response.statusCode.toString();
        if(code.startsWith('2') == 200){
          resolve(response)
        }else{
          reject()

          const error_code = response.statusCode;
          this._show_error(error_code)
        }
        
      },
      fail : function(error){
        reject(error)
      }
    })
  }


  _show_error(error_code){

    if(!error_code){
      error_code = 1;
    }
              
    const tip = tips[error_code]

    wx.showToast({
      title: tip ? tip : tips[1],
      icon : "none",
      duration : 2000
    })
  }
}


export {HTTP}





