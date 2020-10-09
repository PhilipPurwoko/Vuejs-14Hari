import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

export const bus = new Vue();

new Vue({
	store:store,
	el: '#app',
	render: h => h(App)
})
