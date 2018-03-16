//index.js
//获取应用实例
const app = getApp()
var comm=require('../../utils/common.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  // bindViewTap: function () {
  
  // },
  bindViewTap:()=>{
    let s = Symbol();
    let obj = {
      [s]: (arg) => (console.log(arg))
    }
    obj[s](2000);
    comm.a('模块一')
    comm.b('模块2222')
    let arr = [1, 2, 3, 4, 5];
    //forEach  s数组遍历 可传值
    // arr.forEach(function (value, index) {
    //   console.log(value);
    //   console.log(index)
    // })
    arr.forEach((value, index) => {
      console.log(value);
      console.log(index)
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
