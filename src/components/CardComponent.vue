<template>
	<div :class="`${className}__item`">
		<img :src="require(`@/assets/img/${image}`)" alt="coffee">
		<div :class="`${className}__item-title`">
			{{text}}
		</div>
		<div :class="`${className}__item-country`">{{country}}</div>
		<div :class="`${className}__item-price`">{{price}}</div>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			require: true,
		},
		text: {
			type: String,
			require: true,
		},
		country: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			require: true,
		},
		className: {
			type: String,
			require: true,
		}
	}
}
</script>