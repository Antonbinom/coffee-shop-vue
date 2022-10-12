const goods = {
	state: {
		goods: [
			{
				id: 1,
				img: "good-1.jpg",
				text: "Solimo Coffee Beans 2kg",
				country: "Brazil",
				price: 10.73,
			},
			{
				id: 2,
				img: "good-1.jpg",
				text: "Presto Coffee Beans 1kg",
				country: "Brazil",
				price: 15.99,
			},
			{
				id: 3,
				img: "good-1.jpg",
				text: "AROMISTICO Coffee 1kg",
				country: "Brazil",
				price: 6.99,
			},
			{
				id: 4,
				img: "good-1.jpg",
				text: "Solimo Coffee Beans 2kg",
				country: "Brazil",
				price: 10.73,
			},
			{
				id: 5,
				img: "good-1.jpg",
				text: "Presto Coffee Beans 1kg",
				country: "Brazil",
				price: 15.99,
			},
			{
				id: 6,
				img: "good-1.jpg",
				text: "AROMISTICO Coffee 1kg",
				country: "Brazil",
				price: 6.99,
			},
		],
	},
	mutations: {},
	actions: {
		setCoffeData() {

		}
	},
	mutations: {
		setGoodsData(state, data) {
			state.goods = data
		}
	},
	actions: {
		setGoodsData({commit}, data) {
			commit('setGoodsData', data)
		}
	},
	getters: {
		getGoods(store) {
			return store.goods
		},
	}
}

export default goods