<template>
	<header>
		<ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
			<li class="header__item">
				<router-link :to="links[0].path">
					<img :src="require(`@/assets/logo/${links[0].icon}`)" alt="logo">
				</router-link>
			</li>
			<li class="header__item">
				<router-link :to="links[1].path">
					{{links[1].text}}
				</router-link>
			</li>
			<li class="header__item">
				<router-link :to="links[2].path">
					{{links[2].text}}
				</router-link>
			</li>
			<li class="header__item">
				<router-link :to="links[3].path">
					{{links[3].text}}
				</router-link>
			</li>
		</ul>
	</header>
</template>

<script>
export default {
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