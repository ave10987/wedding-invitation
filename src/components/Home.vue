<template>
  <div class="container">
    <div class="dimmed" v-show="isGalleryOpen" @click.prevent.stop="closeGallery">
      <span @click.prevent="closeGallery" style="background-size: contain; background-image: url('../../static/img/close.png'); width: 30px; height: 30px; float: right; margin: 10px;"></span>
      <swiper :options="gallerySwiperOption" class="full-screen-swiper" :style="{ height: `${galleryHeight}px` }">
        <swiper-slide @click.prevent.stop>
          <div>
            <img data-src="../../static/img/1.jpg" alt="" class="swiper-lazy">
          </div>
        </swiper-slide>
        <swiper-slide @click.prevent.stop>
          <div>
            <img data-src="../../static/img/2.jpg" alt="" class="swiper-lazy">
          </div>
        </swiper-slide>
        <swiper-slide @click.prevent.stop>
          <div>
            <img data-src="../../static/img/3.jpg" alt="" class="swiper-lazy">
          </div>
        </swiper-slide>
        <swiper-slide @click.prevent.stop>
          <div>
            <img data-src="../../static/img/4.jpg" alt="" class="swiper-lazy">
          </div>
        </swiper-slide>
        <swiper-slide @click.prevent.stop>
          <div>
            <img data-src="../../static/img/5.jpg" alt="" class="swiper-lazy">
          </div>
        </swiper-slide>
        <swiper-slide @click.prevent.stop>
          <div>
            <img data-src="../../static/img/6.jpg" alt="" class="swiper-lazy">
          </div>
        </swiper-slide>
        <swiper-slide @click.prevent.stop>
          <div>
            <img data-src="../../static/img/7.jpg" alt="" class="swiper-lazy">
          </div>
        </swiper-slide>
        <swiper-slide @click.prevent.stop>
          <div>
            <img data-src="../../static/img/8.jpg" alt="" class="swiper-lazy">
          </div>
        </swiper-slide>
        <swiper-slide @click.prevent.stop>
          <div>
            <img data-src="../../static/img/9.jpg" alt="" class="swiper-lazy">
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <swiper :options="swiperOption" class="swiper-wrapper main-swiper">
      <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
      <swiper-slide class="first">
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
        <div class="bottom" data-swiper-parallax="-500">
          <div class="bottom-container">
            <div class="text kor-font location" data-swiper-parallax="-400">
              양재역 브라이드밸리
            </div>
            <div class="name" data-swiper-parallax="-400">
              <div class="kor-font">최정민</div>
              <div>
                <img class="heart" :class="{ loaded: mainImageLoaded}" src="../../static/img/main-heart.png" />
              </div>
              <div class="kor-font">윤정현</div>
            </div>
            <img class="main-image" src="../../static/img/main.png" @load="mainImgLoadComplete">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="second">
        <div class="title eng-font" data-swiper-parallax="-100"><strong>Invitation</strong></div>
        <div class="subtitle kor-font">
          <div class="subtitle-container">
            <div data-swiper-parallax="-200" id="text1"></div>
            <div data-swiper-parallax="-200" id="text2"></div>
          </div>
        </div>
        <div class="name kor-font">
          <div class="name-container">
            <div class="text" data-swiper-parallax="-300">
              <table>
                <tr>
                  <td>윤창혁</td>
                  <td rowspan="2" class="small">의 장남</td>
                  <td rowspan="2">윤정현</td>
                </tr>
                <tr>
                  <td>최승자</td>
                </tr>
              </table>
            </div>
            <div class="text" data-swiper-parallax="-300">
              <table class="name-table-margin">
                <tr>
                  <td class="font1">임명화</td>
                  <td rowspan="2" class="small">의 장녀</td>
                  <td class="font2" rowspan="2">최정민</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="location kor-font">
          <div class="location-container">
            <div class="text" data-swiper-parallax="-400">
              2018년 10월 28일 (일) 오후 2시
            </div>
            <div class="text" data-swiper-parallax="-400">
              양재역 브라이드 밸리
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="third">
        <div class="title eng-font" data-swiper-parallax="-100"><strong>Location</strong></div>
        <Map data-swiper-parallax="-200" />
        <div class="location kor-font" data-swiper-parallax="-300">
          <div class="address">
            <img class="address-icon swiper-lazy" data-src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTQuNzIgNDk0LjcyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTQuNzIgNDk0LjcyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPHBhdGggZD0iTTMyMy4xOTEsNC4yNjZMMTcxLjUyMiw0Ny4zOTRMNC44NiwwdjQ0My4wNjJsMTY2LjY2Miw0Ny4zOTRsMTUxLjY2OS00My4xMjhMNDg5Ljg2LDQ5NC43MlY1MS42NTlMMzIzLjE5MSw0LjI2NnogICAgTTM0Ljg2LDE3Ny4wMTFsMTIxLjY2MiwzNC41OTd2MTA2LjEwMkwzNC44NiwyODMuMTEzVjE3Ny4wMTF6IE0yNjAuMTI0LDIwNS4xMThsNDguMDY3LDYwLjQzNHYxNy41NkwxODYuNTIyLDMxNy43MVYyMTEuNjA4ICAgbDY1LjY3MS0xOC42NzRDMjU0LjQ1OSwxOTcuMjA5LDI1Ny4xMDEsMjAxLjI5NiwyNjAuMTI0LDIwNS4xMTh6IE0zMjMuMTkxLDIzNi4yMTdsLTM5LjU2My00OS43NDIgICBjLTcuMDk5LTguOTc1LTEwLjg1MS0xOS43NjQtMTAuODUxLTMxLjIwMmMwLTI3Ljc5OCwyMi42MTUtNTAuNDE0LDUwLjQxNC01MC40MTRzNTAuNDE0LDIyLjYxNSw1MC40MTQsNTAuNDE0ICAgYzAsMTEuNDM3LTMuNzUyLDIyLjIyNi0xMC44MjUsMzEuMTY5TDMyMy4xOTEsMjM2LjIxN3ogTTMwOC4xOTEsNzYuMjg1Yy0zNy4xOTQsNy4wNDktNjUuNDE0LDM5Ljc3Ni02NS40MTQsNzguOTg5ICAgYzAsMy4wMTQsMC4xODgsNi4wMTcsMC41MjcsOC45OTlsLTU2Ljc4MiwxNi4xNDZWNzQuMzE4TDMwOC4xOTEsMzkuNzJWNzYuMjg1eiBNMTg2LjUyMiwzNDguODk5bDEyMS42NjktMzQuNTk3djEwNi4xMDEgICBMMTg2LjUyMiw0NTVWMzQ4Ljg5OXogTTMzOC4xOTEsMjY1LjU1Mmw0OC4wOTQtNjAuNDY3YzMuMDEzLTMuODEsNS42NDctNy44ODUsNy45MDctMTIuMTVsNjUuNjY4LDE4LjY3M1YzMTcuNzFsLTEyMS42NjktMzQuNTk3ICAgVjI2NS41NTJ6IE00NTkuODYsMTgwLjQxOWwtNTYuNzgyLTE2LjE0NmMwLjM0LTIuOTgxLDAuNTI3LTUuOTg0LDAuNTI3LTguOTk5YzAtMzkuMjEzLTI4LjIyLTcxLjk0LTY1LjQxNC03OC45ODlWMzkuNzIgICBMNDU5Ljg2LDc0LjMxN1YxODAuNDE5eiBNMTU2LjUyMiw3NC4zMTd2MTA2LjEwMUwzNC44NiwxNDUuODIyVjM5LjcyMUwxNTYuNTIyLDc0LjMxN3ogTTM0Ljg2LDMxNC4zMDJsMTIxLjY2MiwzNC41OTdWNDU1ICAgTDM0Ljg2LDQyMC40MDNWMzE0LjMwMnogTTMzOC4xOTEsNDIwLjQwM1YzMTQuMzAybDEyMS42NjksMzQuNTk3VjQ1NUwzMzguMTkxLDQyMC40MDN6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8Y2lyY2xlIGN4PSIzMjMuMTkxIiBjeT0iMTU1LjI3NCIgcj0iMC41MjciIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0zMjMuMTkxLDEzOS43NDhjLTguNTYyLDAtMTUuNTI2LDYuOTY1LTE1LjUyNiwxNS41MjZzNi45NjUsMTUuNTI3LDE1LjUyNiwxNS41MjdzMTUuNTI2LTYuOTY1LDE1LjUyNi0xNS41MjcgICBTMzMxLjc1MywxMzkuNzQ4LDMyMy4xOTEsMTM5Ljc0OHoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
            <span class="desc">서울특별시 강남구 강남대로 262, 지하1층<br />(도곡동 캠코 양재타워)</span>
          </div>
          <div class="metro">
            <img class="metro-icon swiper-lazy" data-src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ4NC41IDQ4NC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODQuNSA0ODQuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJkaXJlY3Rpb25zLXN1YndheSI+CgkJPHBhdGggZD0iTTI0Mi4yNSwwYy0xMTIuMiwwLTIwNCwxMi43NS0yMDQsMTAydjI0Mi4yNWMwLDQ4LjQ1LDQwLjgsODkuMjUsODkuMjUsODkuMjVsLTM4LjI1LDM4LjI1djEyLjc1aDMwNnYtMTIuNzVMMzU3LDQzMy41ICAgIGM0OC40NSwwLDg5LjI1LTQwLjgsODkuMjUtODkuMjVWMTAyQzQ0Ni4yNSwxMi43NSwzNTQuNDUsMCwyNDIuMjUsMHogTTEyNy41LDM4Mi41Yy0yMC40LDAtMzguMjUtMTcuODUtMzguMjUtMzguMjUgICAgUzEwNy4xLDMwNiwxMjcuNSwzMDZzMzguMjUsMTcuODUsMzguMjUsMzguMjVTMTQ3LjksMzgyLjUsMTI3LjUsMzgyLjV6IE0yMTYuNzUsMjI5LjVIODkuMjVWMTAyaDEyNy41VjIyOS41eiBNMzU3LDM4Mi41ICAgIGMtMjAuNCwwLTM4LjI1LTE3Ljg1LTM4LjI1LTM4LjI1UzMzNi42LDMwNiwzNTcsMzA2czM4LjI1LDE3Ljg1LDM4LjI1LDM4LjI1UzM3Ny40LDM4Mi41LDM1NywzODIuNXogTTM5NS4yNSwyMjkuNWgtMTI3LjVWMTAyICAgIGgxMjcuNVYyMjkuNXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
            <span class="desc">양재역 3번출구에서 도보 2분거리</span>
          </div>
          <div class="bus">
            <img class="bus-icon swiper-lazy" data-src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1LjQzNyA0NS40MzciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQzNyA0NS40Mzc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDEuNDAzLDExLjExYy0wLjM3MS0zLjYyNy0wLjk2Mi02LjQ1MS0xLjg5Ny03LjU2MWMtMy44NTUtNC41NjQtMzAuODU5LTQuODk4LTMzLjkyNSwwICAgYy0wLjc1LDEuMi0xLjI3Niw0LjAxNC0xLjYyOSw3LjU2N2MtMS4xMzksMC4xMzQtMi4wMjYsMS4wOTMtMi4wMjYsMi4yNjd2NC40NDNjMCwwLjk4OCwwLjYyNiwxLjgyMSwxLjUsMi4xNDYgICBjLTAuMjA3LDYuOTk4LTAuMDM5LDE0LjI5OSwwLjI3MSwxNy45M2MwLDIuODAzLDEuODgzLDIuMzM4LDEuODgzLDIuMzM4aDEuNzY1djMuMDI2YzAsMS4yLDEuMjM3LDIuMTcxLDIuNzYxLDIuMTcxICAgYzEuNTI2LDAsMi43NjMtMC45NzEsMi43NjMtMi4xNzFWNDAuMjRoMjAuNTM0djMuMDI2YzAsMS4yLDEuMjM2LDIuMTcxLDIuNzYyLDIuMTcxYzEuNTI0LDAsMi43NjEtMC45NzEsMi43NjEtMi4xNzFWNDAuMjRoMC41OCAgIGMwLDAsMi4yMTYsMC4zMDQsMi4zNTgtMS4wMTZjMC0zLjYyMSwwLjIyOC0xMS42NDYsMC4wNC0xOS4yMjFjMC45MjktMC4yOTEsMS42MDctMS4xNDcsMS42MDctMi4xNzd2LTQuNDQzICAgQzQzLjUxMiwxMi4xODEsNDIuNTgyLDExLjIwNiw0MS40MDMsMTEuMTF6IE0xMi4xNzYsNC4yaDIwLjczNXYzLjEzN0gxMi4xNzZWNC4yeiBNMTIuNDcyLDM2LjY2N2MtMS42MjgsMC0yLjk0Ny0xLjMyLTIuOTQ3LTIuOTQ4ICAgYzAtMS42MjcsMS4zMTktMi45NDYsMi45NDctMi45NDZzMi45NDgsMS4zMTksMi45NDgsMi45NDZDMTUuNDIsMzUuMzQ3LDE0LjEwMSwzNi42NjcsMTIuNDcyLDM2LjY2N3ogTTMyLjgsMzYuNjY3ICAgYy0xLjYyNywwLTIuOTQ5LTEuMzItMi45NDktMi45NDhjMC0xLjYyNywxLjMyMS0yLjk0NiwyLjk0OS0yLjk0NnMyLjk0NywxLjMxOSwyLjk0NywyLjk0NiAgIEMzNS43NDgsMzUuMzQ3LDM0LjQyOCwzNi42NjcsMzIuOCwzNi42Njd6IE0zNi41NDcsMjMuNzY3SDguNTRWOS4wNzdoMjguMDA3VjIzLjc2N3oiIGZpbGw9IiMwMDAwMDAiLz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
            <span class="desc">간선 <span class="small">140, 400, 402, 407, 421, 440, 441, 462, 470</span><br />
            직행 <span class="small">1005-1, 1550, 1570, 3002, 3007, 9700</span></span>
          </div>
          <div class="car">
            <img class="car-icon swiper-lazy" data-src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDM5LjA1NSAzOS4wNTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM5LjA1NSAzOS4wNTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzguODMxLDE0LjI2Yy0wLjE5MS0wLjIzMy0wLjQ3Ni0wLjM2OS0wLjc3NS0wLjM2OWgtMy44MDFjLTAuOTM4LTIuNDc0LTIuMTYtNC44OTgtMy41NDktNS44MTMgICAgYy00LjgwNS0zLjE2MS0xNy41NS0zLjE2MS0yMi4zNTUsMGMtMS4zOSwwLjkxNi0yLjYwNywzLjM0My0zLjU1LDUuODEzSDFjLTAuMzAyLDAtMC41ODYsMC4xMzYtMC43NzUsMC4zNjkgICAgYy0wLjE5LDAuMjMyLTAuMjY2LDAuNTM5LTAuMjA0LDAuODM0bDAuNTYzLDIuNzI4YzAuMDk2LDAuNDY1LDAuNTA2LDAuNzk3LDAuOTc5LDAuNzk3aDEuMTI2ICAgIGMtMS4wODcsMS4yNTQtMS42MTQsMi44MzMtMS42MjEsNC40MTNjLTAuMDA3LDEuOTUyLDAuNzM0LDMuNzE2LDIuMDg5LDQuOTY0YzAuMDE1LDAuMDEzLDAuMDMsMC4wMjIsMC4wNDQsMC4wMzV2My44MTcgICAgYzAsMC44MjcsMC42NzIsMS41LDEuNSwxLjVoMy41MDZjMC44MjgsMCwxLjUtMC42NzMsMS41LTEuNXYtMS41MzRoMTkuNjQxdjEuNTM0YzAsMC44MjcsMC42NzIsMS41LDEuNSwxLjVoMy41MDYgICAgYzAuODI2LDAsMS41LTAuNjczLDEuNS0xLjV2LTMuNzQyYzEuNDM4LTEuMzE3LDIuMTI1LTMuMTI5LDIuMTM0LTQuOTM4YzAuMDA2LTEuNjM0LTAuNTQ1LTMuMjcxLTEuNjk2LTQuNTUxaDEuMjAxICAgIGMwLjQ3NSwwLDAuODg1LTAuMzMyLDAuOTc5LTAuNzk4bDAuNTY0LTIuNzI3QzM5LjA5NCwxNC43OTksMzkuMDIxLDE0LjQ5NCwzOC44MzEsMTQuMjZ6IE05Ljk5OCwxMC41ODMgICAgYzMuODMtMi41MjEsMTUuMjI5LTIuNTIxLDE5LjA1NywwYzAuNzQ0LDAuNDg4LDEuNzAxLDIuNDYxLDIuNTc4LDQuODc3SDcuNDIyQzguMjk3LDEzLjA0NSw5LjI1NCwxMS4wNzMsOS45OTgsMTAuNTgzeiAgICAgTTUuNTEyLDIzLjQwOGMwLTEuNjMsMS4zMjItMi45NSwyLjk1MS0yLjk1YzEuNjMxLDAsMi45NTEsMS4zMiwyLjk1MSwyLjk1cy0xLjMyLDIuOTUxLTIuOTUxLDIuOTUxICAgIEM2LjgzNCwyNi4zNTksNS41MTIsMjUuMDM4LDUuNTEyLDIzLjQwOHogTTMwLjYzMSwyNi4zNTljLTEuNjI5LDAtMi45NTEtMS4zMjEtMi45NTEtMi45NTFzMS4zMjItMi45NSwyLjk1MS0yLjk1ICAgIGMxLjYzMSwwLDIuOTUxLDEuMzIsMi45NTEsMi45NVMzMi4yNiwyNi4zNTksMzAuNjMxLDI2LjM1OXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
            <span class="desc">도곡동 캠코 양재타워 주차장<br />
            인포데스크에서 차량번호 등록 (무료주차 2시간)</span>
          </div>
        </div>
        <div class="buttons">
          <a href="tmap://?rGoName=브라이드밸리&rGoX=127.033433&rGoY=37.486922" class="tmap">
            <img data-src="../../static/img/tmap.png" alt="" class="swiper-lazy">
            <span class="kor-font">T map</span>
          </a>
          <a href="#" @click.prevent="goKakaoNavi()" class="kakao">
            <img data-src="../../static/img/kakaonavi.png" alt="" class="swiper-lazy">
           <span class="kor-font">Kakao</span>
          </a>
        </div>
      </swiper-slide>
      <swiper-slide class="fourth">
        <div class="title eng-font" data-swiper-parallax="-100"><strong>Gallery</strong></div>
        <Gallery data-swiper-parallax="-200" />
      </swiper-slide>
      <swiper-slide class="fifth kor-font">
        <div class="poem-wrapper">
          <p>너는 언제나 내 우주에 있고</p>
          <p>너에게도 우주가 있다면</p>
          <p>그곳에 나도 있었으면 좋겠다</p>
          <p>낮에는 티없이 푸른 하늘의 해가 되거나</p>
          <p>밤에는 부서질 듯 찬란한 별이 되거나</p>
          <p>아기 손처럼 보드라운 바람이 되어도 좋고</p>
          <p>향기 짙은 야생 들꽃이 되어</p>
          <p>우연히 너의 눈길이라도 끌면 좋겠다</p>
          <p>내 안의 우주가 언제나</p>
          <p>너로 인해 그렇게 아름답듯이</p>
          <p><br />/ 안재동, 내 안의 우주</p>
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
      mainImageLoaded: false,
      clientHeight: document.documentElement.clientHeight,
      gallerySwiperOption: {
        spaceBetween: 30,
        effect: 'coverflow',
        grabCursor: true,
        loop: true,
        zoom: false,
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 2,
        },
        centeredSlides: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      },
      verticalSwiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
      },
      swiperOption: {
        parallax: true,
        fade: true,
        lazy: {
          loadPrevNext: true,
        },
      },
      isGalleryOpen: false,
    };
  },
  methods: {
    goKakaoNavi() {
      window.Kakao.Navi.start({
        name: '브라이드밸리',
        x: 127.033433,
        y: 37.486922,
        coordType: 'wgs84',
      });
    },
    mainImgLoadComplete() {
      this.mainImageLoaded = true;
    },
    share() {

    },
    closeGallery() {
      this.isGalleryOpen = false;
    },
  },
  computed: {
    galleryHeight() {
      return this.clientHeight * 0.9;
    },
  },
  mounted() {
    this.$EventBus.$on('galleryOpen', (index) => {
      const fullScreenSwiper = document.querySelector('.full-screen-swiper').swiper;
      fullScreenSwiper.slideTo(parseInt(index, 10) + 1, 0);
      this.isGalleryOpen = true;
    });
    const mainSwiper = document.querySelector('.main-swiper.swiper-container').swiper;
    const gallerySwiper = document.querySelector('.full-screen-swiper.swiper-container').swiper;
    mainSwiper.once('reachEnd', () => {
      const poems = document.querySelectorAll('.fifth p');
      let i = 0;
      poems[i].classList.add('fadeup');
      i += 1;
      this.poemInterval = setInterval(() => {
        poems[i].classList.add('fadeup');
        i += 1;
        if (i === poems.length) {
          clearInterval(this.poemInterval);
        }
      }, 700);
    });

    mainSwiper.on('slideChange', () => {
      if (mainSwiper.activeIndex === 1) {
        let i = 0;
        let j = 0;
        const text1 = '이 사람이라고 생각했습니다.';
        const text2 = '그래서 결혼합니다.';
        const speed = 150;
        const typeWriter = () => {
          if (i < text1.length) {
            document.getElementById('text1').innerHTML += text1.charAt(i);
            i += 1;
            this.text1Timer = setTimeout(typeWriter, speed);
          } else if (j < text2.length) {
            document.getElementById('text2').innerHTML += text2.charAt(j);
            j += 1;
            this.text2Timer = setTimeout(typeWriter, speed);
          } else {
            mainSwiper.off('slideChange');
          }
        };
        typeWriter();
      } else if (this.text1Timer || this.text2Timer) {
        clearTimeout(this.text1Timer);
        clearTimeout(this.text2Timer);
        document.getElementById('text1').innerHTML = '';
        document.getElementById('text2').innerHTML = '';
      }
    });

    gallerySwiper.on('resize', () => {
      this.clientHeight = document.documentElement.clientHeight;
    });

  //   window.Kakao.Link.createDefaultButton({
  //     container: '#kakao-link-btn',
  //     objectType: 'feed',
  //     content: {
  //       title: '윤정현♥최정민의 모바일 초대장입니다.',
  //       imageUrl: 'https://lh5.googleusercontent.com/N-aij1Kbey5FEAEVTXZynM1A8cKdySt4WdZoNaopOERlpVy93nBTtvH1GG32yqyqmuwMlJVDybjvdrtn9EVQ=w1920-h960',
  //       link: {
  //         mobileWebUrl: 'https://invitation-ec422.firebaseapp.com',
  //         webUrl: 'https://invitation-ec422.firebaseapp.com',
  //       },
  //       imageWidth: 500,
  //       imageHeight: 357,
  //     },
  //     buttons: [
  //       {
  //         title: '웹으로 보기',
  //         link: {
  //           mobileWebUrl: 'https://invitation-ec422.firebaseapp.com',
  //           webUrl: 'https://invitation-ec422.firebaseapp.com',
  //         },
  //       },
  //       {
  //         title: '공유하기',
  //         link: {
  //           mobileWebUrl: 'https://invitation-ec422.firebaseapp.com/share',
  //           webUrl: 'https://invitation-ec422.firebaseapp.com/share',
  //         },
  //       },
  //     ],
  //   });
  },
};
</script>

<style>
.full-screen-swiper {
  width: 100%;
}
.full-screen-swiper .swiper-slide {
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
}

.full-screen-swiper div {
  position: relative;
  height: 100%;
}

.full-screen-swiper img {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
