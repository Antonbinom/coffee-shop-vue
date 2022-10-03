import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroView from '../views/HeroView'
import OurCoffeeView from '../views/OurCoffeeView'
import ThanksView from '../views/ThanksView'
import GoodsView from '../views/GoodsView'
import ContactsView from '../views/ContactsView'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'hero',
			component: HeroView
		},
		{
			path: '/our-coffee',
			name: 'ourCoffee',
			component: OurCoffeeView
		},
		{
			path: '/goods',
			name: 'goods',
			component: GoodsView
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: ContactsView
		},
		{
			path: '/thanks',
			name: 'thanks',
			component: ThanksView
		},
	]
})

export default router