<template>
  <div class="container">
    <swiper :options="swiperOption" class="swiper-wrapper">
      <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
      <swiper-slide class="first">
        <div class="top">
          <div class="title eng-font" data-swiper-parallax="-100">
            <span class="save"><strong>Save</strong></span>
            <span class="the"><strong>the</strong></span>
            <span class="date"><strong>Date</strong></span>
          </div>
          <div class="subtitle date eng-font" data-swiper-parallax="-200"><strong>10/28</strong></div>
          <div class="text time eng-font" data-swiper-parallax="-300">
            <strong>
              <span>2</span>
              <span class="pm">pm</span>
            </strong>
          </div>
        </div>
        <div class="middle">
          <div class="vertical-align">
            <div class="text location kor-font" data-swiper-parallax="-400">
              양재역 브라이드밸리
            </div>
            <div class="name" data-swiper-parallax="-400">
              <div class="kor-font">최정민</div>
              <div>
                <img class="heart" src="../../static/img/main-heart.png" />
              </div>
              <div class="kor-font">윤정현</div>
            </div>
          </div>
        </div>
        
        <div class="bottom" data-swiper-parallax="-500">
          <img class="main-image" src="../../static/img/main.png">
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
      verticalSwiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
      },
      swiperOption: {
        parallax: true,
        fade: true,
      },
    };
  },
};
</script>
