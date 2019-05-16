// 初始化地图
let map = new BMap.Map('map')
map.centerAndZoom('108.953381,34.256922', 15)

// 添加定位功能
map.addControl(new BMap.GeolocationControl())
map.addControl(new BMap.ScaleControl())

// 地址解析
/* let geo = new BMap.Geocoder()
geo.getPoint('南门', point => {
  console.log('point', point)
  if (point) {
    map.centerAndZoom(point, 18)
    map.addOverlay(new BMap.Marker(point))
  }
}, '西安市') */