Component({
  externalClasses: ['class'],
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