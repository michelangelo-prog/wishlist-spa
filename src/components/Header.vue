<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Wishlists</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown>
            <template v-slot:button-content>
              <em>Friends</em>
            </template>
            <b-dropdown-item to="/friends" v-if="isAuthenticated"
              >Your friends</b-dropdown-item
            >
            <b-dropdown-item to="/friends/find" v-if="isAuthenticated"
              >Find friend</b-dropdown-item
            >
            <b-dropdown-item
              to="/friends/invitations/pending"
              v-if="isAuthenticated"
              >Pending invitations</b-dropdown-item
            >
            <b-dropdown-item
              to="/friends/invitations/sent"
              v-if="isAuthenticated"
              >Invitations sent</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <!-- <b-nav-item to="/friends" v-if="isAuthenticated">Friends</b-nav-item>
          <b-nav-item href="#" v-if="isAuthenticated" disabled
            >Disabled</b-nav-item
          > -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item to="/logout" v-if="isAuthenticated"
              >Sign out</b-dropdown-item
            >
            <b-dropdown-item to="/login" v-if="!isAuthenticated"
              >Sign in</b-dropdown-item
            >
            <b-dropdown-item to="/register" v-if="!isAuthenticated"
              >Sign Up</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
};
</script>
