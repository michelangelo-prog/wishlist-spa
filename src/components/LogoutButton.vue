<template>
  <div>
    <b-button squared variant="outline-secondary" @click="logoutFromPage"
      >Logout</b-button
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { EventBus } from "@/utils";

export default {
  methods: {
    ...mapActions(["logout"]),
    redirectToLoginPage() {
      this.$router.push({ name: "Login" });
    },
    logoutFromPage() {
      this.logout();
    }
  },
  mounted() {
    EventBus.$on("successLogout", () => {
      this.redirectToLoginPage();
    });
  },
  beforeDestroy() {
    EventBus.$off("successLogout");
  }
};
</script>
