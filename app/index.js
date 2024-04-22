require("bootstrap/dist/css/bootstrap.min.css");
require("./css/main.css");

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import User from "./components/User.vue";
import Home from "./components/Home.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    columns: [
      { name: "New", users: [] },
      { name: "In Progress", users: [] },
      { name: "Done", users: [] },
    ],
  },
  mutations: {
    addNewUser(state, userData) {
      state.columns[0].users.push(userData);
    },
  },
  actions: {
    fetchUser({ commit }) {
      fetch("https://randomuser.me/api")
        .then((response) => response.json())
        .then((data) => {
          commit("addNewUser", data.results[0]);
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    },
  },
});

const routes = [
  { path: "/", component: Home },
  { path: "/user/:email", component: User },
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: "#app",
  router,
  store,
  data: {
    message: "Hello There",
  },
});
