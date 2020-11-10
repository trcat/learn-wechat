// map.js

Page({
  data: {
    longitude: 0,
    latitude: 0,
    markers: []
  },
  onLoad() {
    this.getLocation();
  },
  getLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
        this.generateMarkers(res.longitude, res.latitude);
      }
    })
  },
  generateMarkers(longitude, latitude) {
    const markers = [];
    markers.push({
      id: 1,
      longitude,
      latitude,
      callout: {
        content: '当前位置',
        color: '#409EFF',
        bgColor: 'transparent',
        display: 'ALWAYS'
      }
    });
    this.setData({
      markers: markers
    });
  }
})