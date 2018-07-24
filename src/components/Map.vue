<template>
  <div id="map" style="width:100%;height:40%"></div>
</template>
<script>
export default {
  name: 'Map',
  mounted() {
    const center = new window.naver.maps.LatLng(37.486922, 127.033433);
    const map = new window.naver.maps.Map('map', {
      center,
      zoom: 10,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: window.naver.maps.ZoomControlStyle.SMALL,
        position: window.naver.maps.Position.RIGHT_TOP,
      },
    });

    const mapElement = map.getElement();
    window.naver.maps.Event.addDOMListener(mapElement, 'touchstart', (e) => {
      e.stopPropagation();
    });

    const markerOptions = {
      position: center,
      map,
      icon: {
        url: '../../static/img/heart_icon.png',
        size: new window.naver.maps.Size(22, 35),
        origin: new window.naver.maps.Point(0, 0),
        anchor: new window.naver.maps.Point(11, 35),
      },
    };
    const marker = new window.naver.maps.Marker(markerOptions);
    console.log(marker);
  },
};
</script>

