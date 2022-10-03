<template>
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 offset-lg-3">
						<ul class="footer d-flex flex-wrap">
							<li class=" footer__item">
								<router-link :to="links[0].path">
									<img :src="require(`@/assets/logo/${links[0].icon}`)" alt="logo">
								</router-link>
							</li>
							<li class="footer__item">
								<router-link :to="links[1].path">
									{{links[1].text}}
								</router-link>
							</li>
							<li class="footer__item">
								<router-link :to="links[1].path">
									{{links[2].text}}
								</router-link>
							</li>
							<li class="footer__item">
								<router-link :to="links[1].path">
									{{links[3].text}}
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
			</div>
		</footer>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					id: 0,
					path: '/',
					icon: 'Logo_black.svg'
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