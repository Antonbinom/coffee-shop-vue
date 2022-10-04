<template>
	<header>
		<ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
			<li v-for="link in links" :key="link.id" class="header__item">
				<link-component
				:icon="link.icon"
				:path="link.path"
				:text="link.text" />
			</li>
		</ul>
	</header>
</template>

<script>
import LinkComponent from './LinkComponent.vue'
export default {
  components: { LinkComponent },
	data(){
		return {
			links: [
				{
					id: 0,
					path: '/',
					icon: 'Logo.svg'
				},
				{
					id: 1,
					path: '/our-coffee',
					text: 'Our coffee'
				},
				{
					id: 2,
					path: '/goods',
					text: 'For your pleasure'
				},
				{
					id: 3,
					path: '/contacts',
					text: 'Contact us'
				},
			]
		}
	}
}
</script>