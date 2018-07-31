<template>
  <div class="first">
    <!-- <button type="button" @click="share" id="kakao-link-btn" style="width:100px; height:100px;">test</button> -->
    <div class="top">
      <div class="title eng-font" data-swiper-parallax="-100">
        <span class="save"><strong id="save">Save</strong></span>
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
      <div class="text kor-font location" data-swiper-parallax="-400">
          양재역 브라이드밸리
        </div>
        <div class="name" data-swiper-parallax="-400">
          <div class="kor-font">최정민</div>
          <div>
            <img class="heart" :class="{ loaded: mainImageLoaded }" src="../../static/img/main-heart.png" />
          </div>
          <div class="kor-font">윤정현</div>
        </div>
    </div>
    <div class="bottom" data-swiper-parallax="-500">
      <img class="main-image" src="../../static/img/main.png" @load="mainImgLoadComplete">
    </div>
  </div>
</template>
<script>
export default {
  name: 'First',
  data() {
    return {
      mainImageLoaded: false,
    };
  },
  methods: {
    mainImgLoadComplete() {
      this.mainImageLoaded = true;
    },
  },
};
</script>

<style scoped>
  .first {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .first .title {
    /* height: 100px; */
  }

  .first .top {
    flex: 2;
    -webkit-flex: 2;
    overflow: hidden;
    text-align: center;
  }

  .first .middle {
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }

  .first .middle .location,
  .first .middle .name {
    flex: 1;
    -webkit-flex: 1;
  }

  .first .bottom {
    flex: 2;
    -webkit-flex: 2;
    overflow: hidden
  }

  .first .bottom img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .first .location {
    text-align: center;
    font-size: 22px;
    display: flex;
    -webkit-display: flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
  }

  .first .name {
    text-align: center;
    font-size: 20px;
  }

  .first .name div {
    display: inline-block;
  }

  .first .heart {
    width: 30px;
    margin: 0 40px;
    vertical-align: middle;
  }

  .first .heart.loaded {
    animation-duration: 2s;
    animation-name: bounceIn;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
  }
</style>
