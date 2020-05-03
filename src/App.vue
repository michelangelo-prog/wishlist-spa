<template>
  <div id="app">
    <Header />
    <b-container class="bv-example-row">
      <hr class="my-2" />

      <b-row>
        <b-col sm="6" offset="3">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style></style>
