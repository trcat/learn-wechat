// map.js

Page({
  data: {
    longitude: 0,
    latitude: 0
  },
  onLoad() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  }
})