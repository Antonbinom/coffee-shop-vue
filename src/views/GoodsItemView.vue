<template>
  <main>
    <div
      class="banner"
      :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component />
          </div>
        </div>
        <h1 v-if="product" class="title-big">{{ product.name }}</h1>
      </div>
    </div>
    <section v-if="product" class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1 shop-image">
            <img class="shop__girl" :src="product.image" :alt="product.name" />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div v-if="product.country" class="shop__point">
              <span>Country:</span>
              {{ product.country }}
            </div>
            <div v-if="product.description" class="shop__point">
              <span>Description:</span>
              {{ product.description }}
            </div>
            <div
              v-if="!product.description && !product.country"
              class="shop__point"
            >
              <span>Name:</span>
              {{ product.name }}
            </div>
            <div class="shop__point">
              <span>Price: </span>
              <span class="shop__point-price">{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <spinner-component v-if="loading" />
  </main>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import axios from "axios";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
export default {
  components: { NavbarComponent, SpinnerComponent },
  data() {
    return {
      product: null,
      isLoading: false,
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    },
    loading() {
      return this.$store.getters["getIsLoading"];
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/${this.$route.name}/${this.$route.params.id}`)
      .then((response) => {
        this.product = response.data;
        if (response.statusText === "OK") {
          this.$store.dispatch("setIsLoading", false);
        }
      });
  },
  destroyed() {
    this.product = null;
  },
};
</script>
