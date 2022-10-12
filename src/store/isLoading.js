const isLoading = {
	state: {
		isLoading: true
	},
	mutations: {
		setIsLoading(state, payload) {
			state.isLoading = payload
		}
	},
	actions: {
		setIsLoading({commit}, payload) {
			commit('setIsLoading', payload)
		}
	},
	getters: {
		getIsLoading(store) {
			return store.isLoading
		}
	}
}

export default isLoading