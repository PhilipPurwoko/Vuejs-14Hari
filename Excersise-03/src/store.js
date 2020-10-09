import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		jasa:[
			{nama:'Desain Poster',harga:50000,diskon:false},
			{nama:'Desain Vector',harga:80000,diskon:false},
			{nama:'Machine Learning',harga:200000,diskon:false},
			{nama:'Web Development',harga:100000,diskon:true},
			{nama:'Desain Poster 2',harga:50000,diskon:false},
			{nama:'Desain Vector 2',harga:80000,diskon:false},
			{nama:'Machine Learning 2',harga:200000,diskon:false},
			{nama:'Web Development 2',harga:100000,diskon:true}
		]
	},
	getters:{
		semuaJasa:state=>{
			return state.jasa;
		}
	}
})