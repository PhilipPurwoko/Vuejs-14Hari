import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	strict:true,
	state:{
		jasa:[
			{nama:'Desain Poster',harga:50000,diskon:false},
			{nama:'Desain Vector',harga:80000,diskon:false},
			{nama:'Machine Learning',harga:200000,diskon:false},
			{nama:'Web Development',harga:100000,diskon:true},
			{nama:'Service Laptop',harga:50000,diskon:false},
			{nama:'Desain Undangan',harga:80000,diskon:true},
			{nama:'Cetak Foto',harga:200000,diskon:true},
		],
		username:'Philip Purwoko',
		instagram:{
			username:'philippurwoko',
			link:`https://instagram.com/philippurwoko`,
			target:'_blank'
		}
	},
	getters:{
		getJasa:state=>{
			return state.jasa;
		},
		getUsername:state=>{
			return state.username;
		},
		getInsta:state=>{
			return state.instagram;
		}
	},
	mutations:{
		applyDiskon:state=>{
			state.jasa.filter(item=>item.diskon).forEach(item=>{item.harga = 80 / 100 * item.harga});
		}
	},
	actions:{
		applyDiskon:context=>{
			setTimeout(function(){
				context.commit('applyDiskon')
			},2000);
		}
	}
})