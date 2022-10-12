const bestsellers = {
	state: {
		bestsellers: [
			{
				id: 1,
				img: "coffee-1.jpg",
				text: "Solimo Coffee Beans 2kg",
				price: 10.73,
			},
			{
				id: 2,
				img: "coffee-2.jpg",
				text: "Presto Coffee Beans 1kg",
				price: 15.99,
			},
			{
				id: 3,
				img: "coffee-3.jpg",
				text: "AROMISTICO Coffee 1kg",
				price: 6.99,
			},
		],
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