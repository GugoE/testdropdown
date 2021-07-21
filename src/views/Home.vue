<template>
  <div class="home">
    <GiphyDropdown
        v-model="giphySearch"
        @input="onInputQuerySearch"
        :options="giphyOptions"
        :is-loading="loading"
    />
  </div>
</template>

<script>
import GiphyDropdown from "../components/GiphyDropdown.vue";
import { mapActions, mapGetters } from "vuex"
export default {
  name: 'Home',
  components: {
    GiphyDropdown,
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
      giphyOptions : "getGiphyItem"
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
