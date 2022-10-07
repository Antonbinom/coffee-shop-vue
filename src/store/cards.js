import {v4 as uuidv4} from "uuid";

const cards = {
	state: {
		goods: [
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "Solimo Coffee Beans 2kg",
				country: "Brazil",
				price: 10.73,
			},
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "Presto Coffee Beans 1kg",
				country: "Brazil",
				price: 15.99,
			},
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "AROMISTICO Coffee 1kg",
				country: "Brazil",
				price: 6.99,
			},
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "Solimo Coffee Beans 2kg",
				country: "Brazil",
				price: 10.73,
			},
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "Presto Coffee Beans 1kg",
				country: "Brazil",
				price: 15.99,
			},
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "AROMISTICO Coffee 1kg",
				country: "Brazil",
				price: 6.99,
			},
		],
		bestsellers: [
			{
				id: uuidv4(),
				img: "coffee-1.jpg",
				text: "Solimo Coffee Beans 2kg",
				price: 10.73,
			},
			{
				id: uuidv4(),
				img: "coffee-2.jpg",
				text: "Presto Coffee Beans 1kg",
				price: 15.99,
			},
			{
				id: uuidv4(),
				img: "coffee-3.jpg",
				text: "AROMISTICO Coffee 1kg",
				price: 6.99,
			},
		],
		coffee: [
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "Solimo Coffee Beans 2kg",
				country: "Brazil",
				price: 10.73,
			},
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "Presto Coffee Beans 1kg",
				country: "Brazil",
				price: 15.99,
			},
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "AROMISTICO Coffee 1kg",
				country: "Brazil",
				price: 6.99,
			},
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "Solimo Coffee Beans 2kg",
				country: "Brazil",
				price: 10.73,
			},
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "Presto Coffee Beans 1kg",
				country: "Brazil",
				price: 15.99,
			},
			{
				id: uuidv4(),
				img: "good-1.jpg",
				text: "AROMISTICO Coffee 1kg",
				country: "Brazil",
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
	}
}

export default cards