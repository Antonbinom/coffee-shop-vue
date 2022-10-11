<template>
  <div :class="`${className}__item`" @click="onEmit(card.id)">
    <img :src="require(`@/assets/img/${card.img}`)" :alt="card.name" />
    <div :class="`${className}__item-title`">
      {{ card.text }}
    </div>
    <div :class="`${className}__item-country`">{{ card.country }}</div>
    <div :class="`${className}__item-price`">
      {{ card.price | addCurrency }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      require: true,
    },
    className: {
      type: String,
      require: true,
    },
  },
  methods: {
    onEmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>