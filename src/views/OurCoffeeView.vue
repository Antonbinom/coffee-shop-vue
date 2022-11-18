<template>
  <main>
    <div class="banner coffepage-banner">
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
              src="@/assets/img/coffee_girl.jpg"
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
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                @input="onSearch($event)"
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
                v-model="value"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div @click="resetSearch" class="shop__filter-label">
                Or filter
              </div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn" @click="onSort('Brazil')">
                  Brazil
                </button>
                <button class="shop__filter-btn" @click="onSort('Kenya')">
                  Kenya
                </button>
                <button class="shop__filter-btn" @click="onSort('Columbia')">
                  Columbia
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <card-component
                v-for="item in coffee"
                :key="item.id"
                :card="item"
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
import { debounce } from "debounce";

export default {
  components: { NavbarComponent, CardComponent, TitleComponent },
  data() {
    return {
      name: "coffee",
      title: "Our Coffee",
      value: "",
    };
  },
  computed: {
    coffee() {
      return this.$store.getters["getCoffee"];
    },
    searchValue: {
      set(value) {
        this.$store.dispatch("setSearchValue", value);
      },
      get() {
        return this.$store.getters["getSearchValue"];
      },
    },
  },
  mounted() {
    axios
      .get("https://coffee-shop-vue-nfya.vercel.app/coffee")
      .then((response) => {
        this.$store.dispatch("setCoffeeData", response.data);
      });
  },
  methods: {
    resetSearch() {
      this.value = "";
      this.onSort("");
    },
    onSearch: debounce(function (event) {
      this.onSort(event.target.value);
    }, 500),
    onSort(value) {
      axios.get(`http://localhost:3000/coffee?q=${value}`).then((response) => {
        this.$store.dispatch("setCoffeeData", response.data);
      });
    },
  },
  mixins: [navigate],
};
</script>