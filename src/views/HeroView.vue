<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <navbar-component />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <title-component :text="title" />
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <a @click.prevent="smoothScroll" href="#best" class="preview__btn"
              >More</a
            >
          </div>
        </div>
      </div>
    </div>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best" ref="best">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <card-component
                onEmit=""
                v-for="item in bestsellers"
                :key="item.id"
                :card="item"
                className="best"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";

import axios from "axios";
import { scrollIntoView } from "seamless-scroll-polyfill";
export default {
  components: { NavbarComponent, CardComponent, TitleComponent },
  data() {
    return {
      title: "Everything You Love About Coffee",
    };
  },
  computed: {
    bestsellers() {
      return this.$store.getters["getBestsellers"];
    },
  },
  methods: {
    smoothScroll() {
      scrollIntoView(this.$refs.best, {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/Antonbinom/coffee-shop-vue/bestsellers"
      )
      .then((response) => {
        this.$store.dispatch("setBestsellersData", response.data);
      });
  },
};
</script>