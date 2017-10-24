// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/index.js'
import vuex from 'vuex'
import store from './store'
import VueRouter from 'vue-router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(VueRouter);
Vue.use(vuex);
Vue.config.productionTip = false
Vue.use(Mint);

const router=new VueRouter({
	routes
})
console.log(routes)
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})