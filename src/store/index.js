// src/store/index.js 完整代码

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  list: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})
