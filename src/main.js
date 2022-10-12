import Vue from 'vue'
import App from './App.vue'
import '@/assets/scss/style.scss'
import router from './router'
import store from './store'
import '@/filters'
import loader from "vue-ui-preloader";

Vue.config.productionTip = false

Vue.use(loader);
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
