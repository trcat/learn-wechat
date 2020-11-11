Component({
  externalClasses: ['class'],
  data: {
    style: {}
  },
  lifetimes: {
    attached() {
      const { top, height } = wx.getMenuButtonBoundingClientRect()
      const _height = top + height + 20
      const paddingTop = top
      this.setData({
        style: {
          height,
          paddingTop
        }
      })
    }
  }
})