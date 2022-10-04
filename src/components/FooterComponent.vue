<template>
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 offset-lg-3">
						<ul class="footer d-flex flex-wrap">

							<li v-for="link in links" :key="link.id" class="footer__item">
								<link-component
								:icon="link.icon"
								:path="link.path"
								:text="link.text"
								/>
							</li>

						</ul>
					</div>
				</div>
				<img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
			</div>
		</footer>
</template>

<script>
import LinkComponent from './LinkComponent.vue'
export default {
  components: { LinkComponent },
	data() {
		return {
			className: 'footer__item',
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