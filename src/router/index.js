import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Logout from "../views/Logout.vue";
import Friends from "../views/Friends.vue";
import FriendsFind from "../views/FriendsFind.vue";
import InvitationsPending from "../views/InvitationsPending.vue";
import InvitationsSent from "../views/InvitationsSent.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/friends/find",
    name: "FriendsFind",
    component: FriendsFind,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/friends/find",
    name: "FriendsFind",
    component: FriendsFind,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/friends/invitations/pending",
    name: "FriendsInvitationsPending",
    component: InvitationsPending,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/friends/invitations/sent",
    name: "FriendsInvitationsSent",
    component: InvitationsSent,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (isAuthenticated) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  }
});

export default router;
