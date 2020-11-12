Component({
  externalClasses: ['class'],
  properties: {
    title: { // 导航栏标题
      type: String,
      value: ''
    }
  },
  data: {
    height: 0,
    paddingTop: 0,
    textLineHeight: 0
  },
  lifetimes: {
    attached() {
      const { top, height } = wx.getMenuButtonBoundingClientRect()
      
      this.setData({
        height: top + height + 20,
        paddingTop: top,
        textLineHeight: height
      })
    }
  }
})