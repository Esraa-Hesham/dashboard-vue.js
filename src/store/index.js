import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        fullname: "Esraa Hesham",
        phone: "010000000000",
        email: "esraa@gmail.com",
        password: "12345689",
      },
      {
        fullname: "Ahmed Hesham",
        phone: "010000000000",
        email: "ahmed@gmail.com",
        password: "12345689",
      },
      {
        fullname: "Amr Hesham",
        phone: "010000000000",
        email: "amr@gmail.com",
        password: "12345689",
      },
      {
        fullname: "Eman Hesham",
        phone: "010000000000",
        email: "eman@gmail.com",
        password: "12345689",
      },
      {
        fullname: "Omar Hesham",
        phone: "010000000000",
        email: "omar@gmail.com",
        password: "12345689",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
