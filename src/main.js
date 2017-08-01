import Vue from 'vue'
import App from './App'
import iView from 'iview';

import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
