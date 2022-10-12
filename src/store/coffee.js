const coffee = {
	state: {
		coffee: [
			{
				id: 1,
				img: "good-1.jpg",
				text: "Solimo Coffee Beans 2kg",
				country: "Africa",
				price: 10.73,
			},
			{
				id: 2,
				img: "good-1.jpg",
				text: "Presto Coffee Beans 1kg",
				country: "Africa",
				price: 15.99,
			},
			{
				id: 3,
				img: "good-1.jpg",
				text: "AROMISTICO Coffee 1kg",
				country: "Africa",
				price: 6.99,
			},
			{
				id: 4,
				img: "good-1.jpg",
				text: "Solimo Coffee Beans 2kg",
				country: "Africa",
				price: 10.73,
			},
			{
				id: 5,
				img: "good-1.jpg",
				text: "Presto Coffee Beans 1kg",
				country: "Africa",
				price: 15.99,
			},
			{
				id: 6,
				img: "good-1.jpg",
				text: "AROMISTICO Coffee 1kg",
				country: "Africa",
				price: 6.99,
			},
		],
	},
	mutations: {
		setCoffeeData(state, data) {
			state.coffee = data
		}
	},
	actions: {
		setCoffeeData({commit}, data) {
			commit('setCoffeeData', data)
		}
	},
	getters: {
		getCoffee(store) {
			return store.coffee
		},

	}
}

export default coffee