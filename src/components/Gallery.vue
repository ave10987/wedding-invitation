<template>
  <div>
    <div @touchmove.stop>
      <LightBox :images="images" :showLightBox="false" :nThumbs="4"></LightBox>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="https://dummyimage.com/600x400/000000/ffffff&text=FADE+SWIPE1" alt="" style="width:100%; height:100%;">
      </swiper-slide>
      <swiper-slide>
        <img src="https://dummyimage.com/600x400/000000/ffffff&text=FADE+SWIPE2" alt="" style="width:100%; height:100%;">
      </swiper-slide>
      <swiper-slide>
        <img src="https://dummyimage.com/600x400/000000/ffffff&text=FADE+SWIPE3" alt="" style="width:100%; height:100%;">
      </swiper-slide>
      <swiper-slide>
        <img src="https://dummyimage.com/600x400/000000/ffffff&text=FADE+SWIPE4" alt="" style="width:100%; height:100%;">
      </swiper-slide>
      <swiper-slide>
        <img src="https://dummyimage.com/600x400/000000/ffffff&text=FADE+SWIPE5" alt="" style="width:100%; height:100%;">
      </swiper-slide>
    </swiper>
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
      v-for="(item, index) in layout"
      :key="index"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i">
        <img src="https://dummyimage.com/600x400/022/fff" alt="" style="width:100%; height:100%;" @click="test">
        <!-- <img :src="`../../static/img/${item.i}.jpg`" alt="" style="width:100%; height:100%;"> -->
    </grid-item>
    </grid-layout>
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
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
      },
      layout: [
        { x: 0, y: 0, w: 2, h: 4, i: '1' },
        { x: 2, y: 0, w: 2, h: 4, i: '2' },
        { x: 0, y: 4, w: 4, h: 5, i: '3' },
        { x: 0, y: 9, w: 2, h: 6, i: '5' },
        { x: 2, y: 9, w: 2, h: 6, i: '6' },
        // { x: 0, y: 6, w: 2, h: 6, i: '7' },
        // { x: 2, y: 7, w: 2, h: 4, i: '8' },
        // { x: 0, y: 6, w: 2, h: 5, i: '9' },
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
      // images: [
      //   'https://placekitten.com/801/800',
      //   'https://placekitten.com/802/800',
      //   'https://placekitten.com/803/800',
      //   'https://placekitten.com/804/800',
      //   'https://placekitten.com/805/800',
      //   'https://placekitten.com/806/800',
      //   'https://placekitten.com/807/800',
      //   'https://placekitten.com/808/800',
      //   'https://placekitten.com/809/800',
      //   'https://placekitten.com/810/800',
      // ],
      // index: 0,
    };
  },
  methods: {
    test(e) {
      console.log('CLICK : ', e);
    },
  },
  mounted() {
  },
};
</script>

