import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    notifications: {
      type: '',
      title: '',
      isOpen: false,
    },
  },
  mutations: {
    setSearchResult(state, payload) {
      state.items = payload;
    },
    setNotification(state, payload) {
      state.notifications.type = payload.type;
      state.notifications.title = payload.title;
      state.notifications.isOpen = true;
      setTimeout(() => {
        state.notifications.isOpen = false;
      }, 3000);
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
    getNotificationOptions: (state) => state.notifications,
  },
  modules: {
  }
})
