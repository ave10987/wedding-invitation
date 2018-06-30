<template>
  <div class="container">
    <swiper :options="swiperOption" class="swiper-wrapper">
      <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
      <swiper-slide>
        <div class="title" data-swiper-parallax="-100">Slide 3</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle3</div>
        <div class="text" data-swiper-parallax="-300">
          <p>TEST3</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="title" data-swiper-parallax="-100">Slide 3</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle3</div>
        <div class="text" data-swiper-parallax="-300">
          <p>TEST3</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <Map />
      </swiper-slide>
      <swiper-slide>
        <Gallery data-swiper-parallax="-200" />
      </swiper-slide>
      <swiper-slide>
        <div class="title" data-swiper-parallax="-100">Slide 4</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle4</div>
        <div class="text" data-swiper-parallax="-300">
          <p>TEST4</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="title" data-swiper-parallax="-100">Slide 5</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle5</div>
        <div class="text" data-swiper-parallax="-300">
          <p>TEST5</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Map from './Map';
import Gallery from './Gallery';

export default {
  name: 'Home',
  components: {
    Map,
    Gallery,
  },
  data() {
    return {
      swiperOption: {
        // slidesPerView: 1,
        // spaceBetween: 30,
        // loop: true,
        parallax: true,
        fade: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
      },
    };
  },
};
</script>

<style scoped>
  .container {
    height: 100%;
  }

  .swiper-wrapper {
    height: 100%;
  }

  .main_image {
    width: 100%;
  }

  .swiper-slide {
    font-size: 18px;
    color:#fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 0;
    background-color: transparent!important;
    justify-content: space-around!important;
    overflow: auto;
  }

  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    /* width: 130%; */
    width: 300%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-image: url(/static/img/1-1.jpg);
    opacity: .4;
  }
</style>
