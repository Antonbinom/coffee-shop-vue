<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component />
          </div>
        </div>
        <title-component :text="title" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <card-component
                v-for="good in goods"
                :key="good.id"
                :card="good"
                className="shop"
                @onNavigate="navigate"
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
import { navigate } from "@/mixins/navigate";
import axios from "axios";

export default {
  components: { NavbarComponent, CardComponent, TitleComponent },
  data() {
    return {
      name: "goods",
      title: "For your pleasure",
    };
  },
  computed: {
    goods() {
      return this.$store.getters["getGoods"];
    },
  },
  mounted() {
    axios.get("http://localhost:3000/goods").then((response) => {
      this.$store.dispatch("setGoodsData", response.data);
    });
  },
  mixins: [navigate],
};
</script>