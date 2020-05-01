<template>
  <div>
    <h2>Please log in:</h2>
    <b-alert v-if="errorMsg" show variant="danger">{{ errorMsg }}</b-alert>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="formData.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Log In</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { EventBus } from "@/utils";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: ""
      },
      errorMsg: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit() {
      this.login(this.formData);
    },
    redirectToHomePage() {
      this.$router.push({ name: "Home" });
    }
  },
  mounted() {
    EventBus.$on("failedAuthentication", error => {
      this.errorMsg = error.response.data.message;
    });
    EventBus.$on("successAuthentication", () => {
      this.redirectToHomePage();
    });
  },
  beforeDestroy() {
    EventBus.$off("failedAuthentication");
    EventBus.$off("successAuthentication");
  }
};
</script>
