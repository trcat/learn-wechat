//index.js
//获取应用实例
const app = getApp()
const buttonText = {
  show: '显示',
  hide: '隐藏'
}

Page({
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    buttonText: `点我${buttonText.show}`
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickMe: function () {
    this.setData({
      motto: this.data.motto ? '' : `${this.data.userInfo.nickName} 你好呀~`,
      buttonText: this.data.buttonText.includes(buttonText.show) ? `点我${buttonText.hide}` : `点我${buttonText.show}`
    })
  },
  handleSAOYISAO() {
    wx.scanCode({
      success: (res) => {
        wx.showModal({
          title: '二维码内容',
          content: res.result
        })
      },
      fail: () =>{
        wx.showToast({
          title: '扫码失败',
        })
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLoad: function () {
    // 测试 onLoad
    console.log('index onLoad')

    // 更新用户信息
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
  onShow() {
    // 测试 onShow
    console.log('index onShow')
  },
  onReady() {
    // 测试 onReady
    console.log('index onReady')
  },
  onHide() {
    // 测试 onHide
    console.log('index onHide')
  },
  onUnload() {
    // 测试 onUnload
    console.log('index onUnload')
  },
  onShareAppMessage() {
    return {
      title: 'DayDay的工坊',
      path: '/pages/index/index'
    }
  },
  onShareTimeline() {
    return {
      title: 'DayDay的工坊',
      path: '/pages/index/index'
    }
  }
})
