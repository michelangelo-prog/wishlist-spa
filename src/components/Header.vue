<template>
  <div v-if="isAuthenticated" id="nav">
    <router-link to="/">Home</router-link> |
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>
