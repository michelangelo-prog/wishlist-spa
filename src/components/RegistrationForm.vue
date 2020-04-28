<template>
  <div>
    <h2>Please register:</h2>
    <b-alert v-if="errorMsg" show variant="danger">{{ errorMsg }}</b-alert>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your username:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.username" required placeholder="Enter username"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Log In</b-button>
    </b-form>
  </div>
</template>>

<script>
// import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: ""
      },
      errorMsg: ""
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  }
};
</script>