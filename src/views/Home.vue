<template>
  <div class="home">
    <GiphyDropdown
        v-model="giphySearch"
        @input="onInputQuerySearch"
        :options="giphyOptions"
        :is-loading="loading"
        @closeDropMenu="giphySearch = '' "
    />

    <Notification v-bind="notification"/>
  </div>
</template>

<script>
import GiphyDropdown from "../components/GiphyDropdown.vue";
import Notification from "../components/Notification";
import { mapActions, mapGetters } from "vuex"
export default {
  name: 'Home',
  components: {
    GiphyDropdown,
    Notification,
  },
  data() {
    return {
      awaitingSearch: false,
      loading: false,
      giphySearch: ""
    }
  },
  computed: {
    ...mapGetters({
      giphyOptions: "getGiphyItem",
      notification: "getNotificationOptions"
    }),
  },
  methods: {
    ...mapActions({
      search: "searchGiphy"
    }),
    async onInputQuerySearch() {
      if (this.giphySearch.length > 2) {
        this.loading = true;
        await this.search(this.giphySearch)
        this.loading = false;
      }
    }
  }
}
</script>
