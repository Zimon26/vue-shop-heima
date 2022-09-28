import '@/assets/css/global.css';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router.js';

Vue.config.productionTip = false

Vue.use(ElementUI);
axios.defaults.baseURL = '';
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
