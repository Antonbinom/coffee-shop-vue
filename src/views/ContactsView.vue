<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component />
          </div>
        </div>
        <title-component text="Contact us" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submitForm" action="#" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.name.$model"
                    type="text"
                    class="form-control"
                    id="name-input"
                  />
                  <span v-for="error in v$.name.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.email.$model"
                    type="email"
                    class="form-control"
                    id="email-input"
                  />
                  <span v-for="error in v$.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.phone.$model"
                    type="tel"
                    class="form-control"
                    id="phone-input"
                  />
                  <span v-for="error in v$.phone.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-center">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    v-model="v$.message.$model"
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                  ></textarea>
                  <span v-for="error in v$.message.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                  <div class="d-flex align-items-center">
                    <input
                      v-model="v$.agree.$model"
                      type="checkbox"
                      class="mr-1"
                    />
                    <span>Согласен с договором оферты</span>
                  </div>
                  <span v-for="error in v$.agree.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-outline-dark send-btn">
                    Send us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";

import { helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  maxLength,
  minLength,
  numeric,
  sameAs,
} from "@vuelidate/validators";
// import { agreement } from "@/validators/agreement.js";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: true,
    };
  },
  components: { NavbarComponent, TitleComponent },
  validations() {
    return {
      name: { required, minLength: minLength(3) },
      email: { required, email },
      phone: { numeric },
      message: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(100),
      },
      agree: {
        sameAs: sameAs(true),
      },
    };
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      console.log([this.name, this.phone, this.email, this.message]);
    },
  },
};
</script>