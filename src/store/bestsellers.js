const bestsellers = {
	state: {
		bestsellers: [],
	},
	mutations: {
		setBestsellersData(state, data) {
			state.bestsellers = data
		}
	},
	actions: {
		setBestsellersData({commit}, data) {
			commit('setBestsellersData', data)
		}
	},
	getters: {
		getBestsellers(store) {
			return store.bestsellers
		},
	}
}

export default bestsellers