import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroView from '../views/HeroView'
import OurCoffeeView from '../views/OurCoffeeView'
import ThanksView from '../views/ThanksView'
import GoodsView from '../views/GoodsView'
import GoodsItemView from '../views/GoodsItemView'
import ContactsView from '../views/ContactsView'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: HeroView
		},
		{
			path: '/our-coffee',
			component: OurCoffeeView
		},
		{
			path: '/goods',
			component: GoodsView
		},
		{
			path: '/contacts',
			component: ContactsView
		},
		{
			path: '/thanks',
			component: ThanksView
		},
		{
			path: '/goods/:id',
			name: 'goods',
			component: GoodsItemView
		},
		{
			path: '/our-coffee/:id',
			name: 'coffee',
			component: GoodsItemView
		},
	]
})

export default router