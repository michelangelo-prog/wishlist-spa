<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";
import { EventBus } from "@/utils";

export default {
  name: "Logout",
  components: {},
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
    this.logoutFromPage();
    EventBus.$on("successLogout", () => {
      this.redirectToLoginPage();
    });
  },
  beforeDestroy() {
    EventBus.$off("successLogout");
  }
};
</script>
