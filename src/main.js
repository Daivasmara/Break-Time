import Vue from 'vue';
import App from './App.vue';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
