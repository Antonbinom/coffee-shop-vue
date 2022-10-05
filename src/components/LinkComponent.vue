<template>
  <li :class="className">
    <router-link :to="path">
      {{ text }}
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: false,
    },
    className: {
      type: String,
      require: true,
    },
  },
};
</script>