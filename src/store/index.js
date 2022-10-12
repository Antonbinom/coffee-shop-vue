import Vue from 'vue'
import Vuex from 'vuex'
import links from './links.js'
import coffee from './coffee.js'
import goods from './goods.js'
import bestsellers from './bestsellers.js'
import isLoading from './isLoading.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		links,
		coffee,
		goods,
		bestsellers,
		isLoading
	},
	getters: {
		getProductCard(store) {
			return (category, id) => {
				const parseData = JSON.parse(JSON.stringify(store[category][category]))
				return parseData.find(card => card.id === +id)
			}
		}
	}
})

export default store