import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        fullname: "Esraa Hesham",
        phone: "010000000000",
        email: "esraa@gmail.com",
        password: "12345689",
      },
      {
        id: 2,
        fullname: "Ahmed Hesham",
        phone: "010000000000",
        email: "ahmed@gmail.com",
        password: "12345689",
      },
      {
        id: 3,
        fullname: "Amr Hesham",
        phone: "010000000000",
        email: "amr@gmail.com",
        password: "12345689",
      },
      {
        id: 4,
        fullname: "Eman Hesham",
        phone: "010000000000",
        email: "eman@gmail.com",
        password: "12345689",
      },
      {
        id: 5,
        fullname: "Omar Hesham",
        phone: "010000000000",
        email: "omar@gmail.com",
        password: "12345689",
      },
    ],
    loggedInUser: null,
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getLoggedInUser(state) {
      return state.loggedInUser;
    },
    newId(state) {
      return (
        Math.max.apply(
          Math,
          state.users.map(function (user) {
            return user.id;
          })
        ) + 1
      );
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setUser(state, payload) {
      state.users.forEach((user) => {
        if (user.id == payload.id) {
          Object.assign(user, payload);
        }
      });
    },
    login(state, payload) {
      state.loggedInUser = payload;
    },
  },
  actions: {},
  modules: {},
});
