const goods = {
	state: {
		goods: [],
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