import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
	state: {
	    serched_gifs: {},

		favourites_gifs: {},

        store_key: 'favourites-storage'
	}
});


export default store
