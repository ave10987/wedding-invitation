<template>
  <!-- <div @touchmove.stop>
    <LightBox :images="images" :showLightBox="true" :nThumbs="4"></LightBox>
  </div> -->
  <waterfall
    :align="'center'"
    :line-gap="200"
    :min-line-gap="100"
    :max-line-gap="220"
    :single-max-width="300"
    ref="waterfall">
    <waterfall-slot
      v-for="(item, index) in items"
      :width="item.width"
      :height="item.height"
      :order="index"
      :key="index"
    >
    </waterfall-slot>
  </waterfall>
</template>

<script>
import LightBox from 'vue-image-lightbox';
import Waterfall from 'vue-waterfall/lib/waterfall';
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot';

export default {
  name: 'Gallery',
  components: {
    LightBox,
    Waterfall,
    WaterfallSlot,
  },
  data() {
    return {
      items: [
        {
          width: 1000,
          height: 1000,
          index: 0,
          style: {
            background: 'rgba(245, 163, 59, 0.5)',
            // 'background-image': 'url("../../static/img/2.jpg")',
          },
        },
        {
          width: 100,
          height: 100,
          index: 0,
          style: {
            background: 'rgba(245,163,59,.5)',
            // 'background-image': 'url("../../static/img/2.jpg")',
          },
        },
        {
          width: 100,
          height: 100,
          index: 0,
          style: {
            background: 'rgba(245,163,59,.5)',
            // 'background-image': 'url("../../static/img/2.jpg")',
          },
        },
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
  mounted() {
    console.log(this.items);
  },
};
</script>

