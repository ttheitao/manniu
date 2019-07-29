import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.component('public-nav',require('./components/Nav.vue'));

const app = new Vue({
    el: '#app'
});
