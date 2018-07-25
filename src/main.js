// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueLazyLoad from 'vue-lazyload';
import App from './App';
import router from './router';

Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyLoad);
Vue.config.productionTip = false;

Vue.prototype.$EventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
