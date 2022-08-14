// pages/index/index.js

import {IndexModel} from "../../api/index";
const indexModel = new IndexModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerArr : [
      {
        id : 1,
        url : "https://huaxinwendeng.oss-cn-hangzhou.aliyuncs.com/uploads/image/2020d4n2XkWbQ41586332943.jpg?x-oss-process=image/resize,w_1920,h_575"
      },
      {
        id : 2,
        url : "https://huaxinwendeng.oss-cn-hangzhou.aliyuncs.com/uploads/image/2020lLJK0jy89y1586333534.jpg?x-oss-process=image/resize,w_1920,h_575"
      },
      {
        id : 3,
        url : "https://huaxinwendeng.oss-cn-hangzhou.aliyuncs.com/uploads/image/2020t2vrszZ5ib1586332927.jpg?x-oss-process=image/resize,w_1920,h_575"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */



  onLoad: function (options) {
    
    //获取轮播图
    indexModel.getBanner().then(response=>{
      console.log(response)
    }).catch(error=>{

    })

    //获取商品列表
    indexModel.getList().then(response=>{
      console.log(response)
    }).catch(error=>{

    })

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

/*

    整个小程序的生命周期    app.js (4个)
      属性	类型	默认值	必填	说明	最低版本
      onLaunch	function		否	生命周期回调——监听小程序初始化。	
      onShow	function		否	生命周期回调——监听小程序启动或切前台。	
      onHide	function		否	生命周期回调——监听小程序切后台。	
      onError	function		否	错误监听函数。	


      onPageNotFound	function		否	页面不存在监听函数。	1.9.90
      onUnhandledRejection	function		否	未处理的 Promise 拒绝事件监听函数。	2.10.0
      onThemeChange	function		否	监听系统主题变化


    页面的生命周期    页面.js (5个)

      属性	类型	默认值	必填	说明

      onLoad	function			生命周期回调—监听页面加载
      onShow	function			生命周期回调—监听页面显示
      onReady	function			生命周期回调—监听页面初次渲染完成
      onHide	function			生命周期回调—监听页面隐藏
      onUnload	function			生命周期回调—监听页面卸载


      onPullDownRefresh	function			监听用户下拉动作
      onReachBottom	function			页面上拉触底事件的处理函数
      onShareAppMessage	function			用户点击右上角转发
      onShareTimeline	function			用户点击右上角转发到朋友圈
      onAddToFavorites	function			用户点击右上角收藏
      onPageScroll	function			页面滚动触发事件的处理函数
      onResize	function			页面尺寸改变时触发，详见 响应显示区域变化
      onTabItemTap	function			当前是 tab 页时，点击 tab 时触发

    
    组件生命周期      组件.js  (5个)

      定义段	类型	是否必填	描述	最低版本
    
      created	Function	否	组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData )	
      attached	Function	否	组件生命周期函数-在组件实例进入页面节点树时执行)	
      ready	Function	否	组件生命周期函数-在组件布局完成后执行)	
      moved	Function	否	组件生命周期函数-在组件实例被移动到节点树另一个位置时执行)	
      detached	Function	否	组件生命周期函数-在组件实例被从页面节点树移除时执行)	

    
      lifetimes	Object	否	组件生命周期声明对象，参见 组件生命周期	2.2.3
      pageLifetimes	Object	否	组件所在页面的生命周期声明对象，参见 组件生命周期	2.2.3
      definitionFilter	Function	否	定义段过滤器，用于自定义组件扩展，参见 自定义组件扩展





      api接口:

        接口地址: 
        接口请求方式:
        请求的参数

      api方法:

        wx.request()





*/