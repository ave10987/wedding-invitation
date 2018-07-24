<template>
  <div>
    <div id="map" style="width:100%;height:200px;"></div>
    <a href="tmap://?rGoName=브라이드밸리&rGoX=127.033433&rGoY=37.486922">T Map으로 경로안내</a>
    <a href="#" @click="goKakaoNavi()">KAKAO NAVI로 경로안내</a>
  </div>
</template>
<script>
export default {
  name: 'Map',
  methods: {
    goKakaoNavi() {
      Kakao.Navi.start({
        name: "브라이드밸리",
        x: 127.033433,
        y: 37.486922,
        coordType: 'wgs84'
     });
    }
  },
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

