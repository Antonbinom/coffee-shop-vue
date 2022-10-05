<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <link-component :path="links.header.path" className="footer__item">
              <img
                :src="require(`@/assets/logo/${links.header.icon}`)"
                alt="logo"
              />
            </link-component>

            <link-component
              v-for="link in links.other"
              :key="link.id"
              :icon="link.icon"
              :path="link.path"
              :text="link.text"
              class="footer__item"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
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
          icon: "Logo_black.svg",
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