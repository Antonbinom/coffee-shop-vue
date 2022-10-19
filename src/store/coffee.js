const coffee = {
	state: {
		searchValue: '',
		sortValue: '',
		coffee: [],
	},
	mutations: {
		setCoffeeData(state, data) {
			state.coffee = data
		},
		setSearchValue(state, value) {
			state.searchValue = value
		},
		setSortValue(state, value) {
			state.sortValue = value
		},
	},
	actions: {
		setCoffeeData({commit}, data) {
			commit('setCoffeeData', data)
		},
		setSearchValue({commit}, value) {
			commit('setSearchValue', value)
		},
		setSortValue({commit}, value) {
			commit('setSortValue', value)
		},
	},
	getters: {
		getCoffee(state) {
			return state.coffee
		},
		getSearchValue(state) {
			return state.searchValue
		},
	}
}

export default coffee