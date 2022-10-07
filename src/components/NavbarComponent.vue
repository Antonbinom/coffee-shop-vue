<template>
  <header>
    <ul
      class="
        header
        d-flex
        justify-content-center justify-content-md-start
        flex-wrap
      "
    >
      <link-component :path="links.header.path" className="header__item">
        <img :src="require(`@/assets/logo/${links.header.icon}`)" alt="logo" />
      </link-component>

      <link-component
        v-for="link in links.other"
        :key="link.id"
        :icon="link.icon"
        :path="link.path"
        :text="link.text"
        className="header__item"
      />
    </ul>
  </header>
</template>

<script>
import LinkComponent from "./LinkComponent.vue";
export default {
  components: { LinkComponent },
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"];
    },
  },
};
</script>