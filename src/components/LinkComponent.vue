<template>
		<router-link :to="path">
				{{text}}
				<img v-if="icon" :src="require(`@/assets/logo/${icon}`)" alt="logo"/>
			</router-link>
</template>

<script>
export default {

	props: {
		path: {
			type: String,
			require: false,
		},
		text: {
			type: String,
			require: true,
		},
		icon: {
			type: String,
			require: false,
		},
	}
}
</script>