<template>
	<div :class="`${className}__item`">
		<img :src="require(`@/assets/img/${card.img}`)" alt="coffee">
		<div :class="`${className}__item-title`">
			{{card.text}}
		</div>
		<div :class="`${className}__item-country`">{{card.country}}</div>
		<div :class="`${className}__item-price`">{{card.price}}</div>
	</div>
</template>

<script>
export default {
	props: {
		card: {
			type: Object,
		},
		className: {
			type: String,
			require: true,
		}
	}
}
</script>