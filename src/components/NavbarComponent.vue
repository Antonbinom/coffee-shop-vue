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
import { v4 as uuidv4 } from "uuid";
export default {
  components: { LinkComponent },
  data() {
    return {
      links: {
        header: {
          id: uuidv4(),
          path: "/",
          icon: "Logo.svg",
        },
        other: [
          {
            id: uuidv4(),
            path: "/our-coffee",
            text: "Our coffee",
          },
          {
            id: uuidv4(),
            path: "/goods",
            text: "For your pleasure",
          },
          {
            id: uuidv4(),
            path: "/contacts",
            text: "Contact us",
          },
        ],
      },
    };
  },
};
</script>