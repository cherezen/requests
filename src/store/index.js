import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    key: null,
  },
  getters: {
    KEY: (state) => {
      return state.key;
    },
  },
  mutations: {
    SET_KEY: (state, payload) => {
      state.key = payload;
    },
  },
  actions: {},
});
