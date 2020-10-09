import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store = new Vuex.Store({
	state:{
		jasa:[
			{nama:'Desain Poster',harga:50000},
			{nama:'Desain Vector',harga:80000},
			{nama:'Machine Learning',harga:200000},
			{nama:'Web Development',harga:100000}
		]
	}
})