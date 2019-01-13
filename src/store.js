import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
	state: {
		searched_gifs: {},
		favourites_gifs: {},
		LOCAL_STORAGE_KEY: 'favourites-storage',
		API_KEY: 'EwQCHDTYU2onchg4pwYQmRFRcugz5ySa',
	}
});


export default store
