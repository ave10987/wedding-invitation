<template>
  <div id="map" style="width:100%;height:400px;"></div>
</template>
<script>
export default {
  name: 'Map',
  mounted() {
    const center = new naver.maps.LatLng(37.486922, 127.033433);
    const map = new naver.maps.Map('map', {
      center,
      zoom: 10,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.RIGHT_TOP
      },
    });

    const mapElement = map.getElement();
    naver.maps.Event.addDOMListener(mapElement, 'touchstart', (e) => {
      e.stopPropagation();
      console.log('TOUCHSTART');
    });

    const markerOptions = {
      position: center,
      map: map,
      icon: {
          url: '../../static/img/heart_icon.png',
          size: new naver.maps.Size(22, 35),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(11, 35)
      }
    }
    const marker = new naver.maps.Marker(markerOptions);
  }
}
</script>

