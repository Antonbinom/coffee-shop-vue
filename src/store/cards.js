const cards = {
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
	getters: {
		getGoods(store) {
			return store.goods
		},
		getBestsellers(store) {
			return store.bestsellers
		},
		getCoffee(store) {
			return store.coffee
		},
		getProductCard(store) {
			return (category, id) => {
				return store[category].find(card => card.id === +id)
			}
		}
	}
}

export default cards