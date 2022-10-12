const productCard = {
	getters: {
		getProductCard(store) {
			return (category, id) => {
				console.log(JSON.parse(JSON.stringify(store)));
				const parseData = JSON.parse(JSON.stringify(store[category][category]))
				return parseData.find(card => card.id === +id)
			}
		}
	}
}

export default productCard