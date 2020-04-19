<template>
  <div>
    <h2>Please log in:</h2>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address or username:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="formData.login"
          type="text"
          required
          placeholder="Enter email or username"
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
export default {
  data() {
    return {
      formData: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.formData));
    },
  },
};
</script>
