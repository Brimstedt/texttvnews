import Vue from 'vue'
import Vuex from 'vuex'

import * as newsActions from './news/newsActions';
import newsMutations from './news/newsMutations';
import * as newsGetters from './news/newsGetters';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsItems: [],
  },
  mutations: {
    ...newsMutations,
  },
  actions: {
    ...newsActions,
  },
  getters: {
    ...newsGetters,
  }
})
