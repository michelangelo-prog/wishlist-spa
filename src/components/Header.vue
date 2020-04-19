<template>
  <div id="nav">
    <b-nav tabs>
      <b-nav-item
        ><router-link to="/" v-if="isAuthenticated"
          >Home</router-link
        ></b-nav-item
      >
      <b-nav-item
        ><router-link to="/login" v-if="!isAuthenticated"
          >Log In</router-link
        > </b-nav-item
      >
      <b-nav-item
        ><router-link to="/register" v-if="!isAuthenticated"
          >Sign Up</router-link
        ></b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>
