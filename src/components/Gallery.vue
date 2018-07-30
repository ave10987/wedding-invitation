<template>
  <div>
    <swiper :options="verticalSwiperOption" class="gallery-vertical-swiper" :style="{height: `${swiperHeight}px`}">
      <swiper-slide style="box-sizing: border-box; -webkit-box-sizing: border-box; height: auto;">
        <grid-layout
          :layout="layout"
          :col-num="4"
          :row-height="30"
          :is-draggable="false"
          :is-resizable="false"
          :is-mirrored="false"
          :vertical-compact="true"
          :margin="[10, 10]"
        >
          <grid-item
            style="overflow: hidden;"
            v-for="(item, index) in layout"
            :key="index"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i">
              <img :data-src="item.src" alt="" style="width:100%; position: absolute; top: 0; bottom: 0; margin: auto;" @click="onClickImage" :data-index="index" class="swiper-lazy">
          </grid-item>
        </grid-layout>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import LightBox from 'vue-image-lightbox';
import { GridLayout, GridItem } from 'vue-grid-layout';

export default {
  name: 'Gallery',
  components: {
    LightBox,
    GridLayout,
    GridItem,
  },
  data() {
    return {
      clientHeight: document.documentElement.clientHeight,
      verticalSwiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
      },
      layout: [
        { x: 0, y: 0, w: 2, h: 3, i: '1', src: '../../static/img/1.jpg' },
        { x: 2, y: 0, w: 2, h: 6, i: '2', src: '../../static/img/2.jpg' },
        { x: 0, y: 3, w: 2, h: 6, i: '3', src: '../../static/img/3.jpg' },
        { x: 2, y: 6, w: 2, h: 6, i: '4', src: '../../static/img/4.jpg' },
        { x: 0, y: 9, w: 2, h: 6, i: '5', src: '../../static/img/5.jpg' },
        { x: 2, y: 12, w: 2, h: 3, i: '6', src: '../../static/img/6.jpg' },
        { x: 0, y: 15, w: 2, h: 6, i: '7', src: '../../static/img/7.jpg' },
        { x: 2, y: 15, w: 2, h: 6, i: '8', src: '../../static/img/8.jpg' },
        { x: 0, y: 21, w: 4, h: 6, i: '9', src: '../../static/img/9.jpg' },
      ],
      images: [
        {
          thumb: 'https://placekitten.com/801/800',
          src: 'https://placekitten.com/801/800',
        },
        {
          thumb: 'https://placekitten.com/802/800',
          src: 'https://placekitten.com/802/800',
        },
        {
          thumb: 'https://placekitten.com/803/800',
          src: 'https://placekitten.com/803/800',
        },
        {
          thumb: 'https://placekitten.com/804/800',
          src: 'https://placekitten.com/804/800',
        },
        {
          thumb: 'https://placekitten.com/805/800',
          src: 'https://placekitten.com/805/800',
        },
        {
          thumb: 'https://placekitten.com/806/800',
          src: 'https://placekitten.com/806/800',
        },
        {
          thumb: 'https://placekitten.com/807/800',
          src: 'https://placekitten.com/807/800',
        },
        {
          thumb: 'https://placekitten.com/808/800',
          src: 'https://placekitten.com/808/800',
        },
        {
          thumb: 'https://placekitten.com/809/800',
          src: 'https://placekitten.com/809/800',
        },
        {
          thumb: 'https://placekitten.com/810/800',
          src: 'https://placekitten.com/810/800',
        },
      ],
    };
  },
  computed: {
    swiperHeight() {
      return this.clientHeight * 0.75;
    },
  },
  methods: {
    onClickImage(e) {
      this.$EventBus.$emit('galleryOpen', e.target.getAttribute('data-index'));
    },
  },
  mounted() {
    const gallerySwiper = document.querySelector('.gallery-vertical-swiper.swiper-container').swiper;
    gallerySwiper.on('resize', () => {
      this.clientHeight = document.documentElement.clientHeight;
    });
  },
};
</script>
