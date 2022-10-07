import Vue from 'vue'
import Vuex from 'vuex'
import links from './links.js'
import cards from './cards.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		links,
		cards
	}
})

export default store