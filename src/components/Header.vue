<template>
  <div id="nav">
    <b-nav tabs>
      <b-nav-item>
        <router-link to="/" v-if="isAuthenticated">Home</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/login" v-if="!isAuthenticated">Log In</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/register" v-if="!isAuthenticated"
          >Sign Up</router-link
        >
      </b-nav-item>
      <b-nav-item>
        <LogoutButton v-if="isAuthenticated" />
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LogoutButton from "@/components/LogoutButton.vue";

export default {
  components: {
    LogoutButton
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
};
</script>
