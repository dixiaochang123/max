import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Highlight: sessionStorage.getItem('Highlight') ? sessionStorage.getItem('Highlight') : 1,
    once: sessionStorage.getItem('once') ? sessionStorage.getItem('once') : true,
    productseleted: JSON.parse(sessionStorage.getItem('productseleted')) ? JSON.parse(sessionStorage.getItem('productseleted')) : [
      '弹性云主机',
      '对象存储OOS',
      '对象存储信息',
      '对象存储OOS容量',
      '关系数据库MySQL'
    ],
    productAdd:JSON.parse(sessionStorage.getItem('productAdd')) ? JSON.parse(sessionStorage.getItem('productAdd')) : [],
    productSim:JSON.parse(sessionStorage.getItem('productSim')) ? JSON.parse(sessionStorage.getItem('productSim')) : [],
    websockData:JSON.parse(sessionStorage.getItem('websockData')) ? JSON.parse(sessionStorage.getItem('websockData')) : {},
  },
  getters: {
    Highlight: state => state.Highlight,
    once: state => state.once,
    productseleted: state => state.productseleted,
    productAdd: state => state.productAdd,
    productSim: state => state.productSim,
    websockData: state => state.websockData,
  },
  mutations: {
    SETHIGHLIGH(state, data) {
      sessionStorage.setItem('Highlight', JSON.stringify(data));
      state.Highlight = data
    },
    SETONCE(state, data) {
      sessionStorage.setItem('once', JSON.stringify(data));
      state.once = data
    },
    SEPRODUCTSELETED(state, data) {
      sessionStorage.setItem('productseleted', JSON.stringify(data));
      state.productseleted = data
    },
    SEPRODUCTADD(state, data) {
      sessionStorage.setItem('productAdd', JSON.stringify(data));
      state.productAdd = data
    },
    SEPRODUCTSIM(state, data) {
      sessionStorage.setItem('productSim', JSON.stringify(data));
      state.productSim = data
    },
    SETWEBSOCKDATA(state, data) {
      sessionStorage.setItem('websockData', JSON.stringify(data));
      state.websockData = data
    },
  },
  actions: {
    sethighligh({ commit }, data) {
      commit("SETHIGHLIGH", data)
    },
    setonce({ commit }, data) {
      commit("SETONCE", data)
    },
    setproductseleted({ commit }, data) {
      commit("SEPRODUCTSELETED", data)
    },
    setproductAdd({ commit }, data) {
      commit("SEPRODUCTADD", data)
    },
    setproductSim({ commit }, data) {
      commit("SEPRODUCTSIM", data)
    },
    setwebsockData({ commit }, data) {
      commit("SETWEBSOCKDATA", data)
    }
  },
  modules: {
  }
})
