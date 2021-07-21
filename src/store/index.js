import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    setSearchResult(state, payload) {
      state.items = payload;
    }
  },
  actions: {
    searchGiphy(context, payload) {
      axios.get(`https://api.giphy.com/v1/gifs/search?q=${payload}&api_key=WxdyYLhMuub9clDtbglE0bJkSBExzePj`)
          .then((response) => {
            context.commit("setSearchResult", response.data.data)
          })
          .catch((error) => {
            console.log(error);
          })
    }
  },
  getters: {
    getGiphyItem: (state) => state.items,
  },
  modules: {
  }
})
