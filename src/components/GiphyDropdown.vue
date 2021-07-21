<template>
  <div class="giphySearch">
    <input
        class="giphySearch__inner"
        v-bind="$attrs"
        v-on="listeners"
        :value="value"
    />
    <transition name="fade">
      <div
          v-if="value.length > 2"
          class="giphySearch__options options"
          :class="[
              {'loading': isLoading, 'is-empty':!options.length },
              ]"
      >
        <div class="options__loading" v-if="isLoading">
          <PreLoader/>
        </div>
        <div v-else class="options__container">
          <template v-if="options.length">
            <div
                class="options__image"
                :style="{'backgroundImage': `url('${option.images.original.url}')`}"
                v-for="(option, key) in options"
                :key="key"
                @click="toCurrentUrl(option.url)"
            />
          </template>
          <template v-else>
            <div class="options__empty">
              По вашему запросу результатов не найдено
            </div>
          </template>
        </div>


      </div>
    </transition>
  </div>

</template>

<script>
import PreLoader from "../components/Loader";
export default {
  // endpoint: https://api.giphy.com/v1/gifs/search?q=<SEARCH TERM>&api_key=WxdyYLhMuub9clDtbglE0bJkSBExzePj
  name: "GiphyDropdown",
  components: {
    PreLoader,
  },
  props: {
    value: [String, Number, Object],
    options: {
      type: Array,
      default:() => []
    },
    isLoading: Boolean
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  },
  methods: {
    toCurrentUrl(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
.giphySearch {
  position: relative;
  &__inner {
    padding: 10px 25px;
    border: 1px solid rgb(236, 236, 236);
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }
  &__options {
    width: 100%;
    height: 700px;
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    border: 1px solid rgb(236, 236, 236);
    padding: 15px 25px 20px;
    box-sizing: border-box;
    overflow-y: auto;
    z-index: 2;
    transition: height .2s;
    &.loading {
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.is-empty {
      height: 150px;
      .options__container {
        grid-template-columns:  1fr;
      }
    }
  }
}
.options {
  margin-top: 10px;
  transition:.3s;
  &__loading {}
  &__container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    @media(max-width: 1600px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media(max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  &__image {
    width: 100%;
    height: 250px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    @media(max-width: 900px) {
      height: 200px;
    }
    @media(max-width: 600px) {
      height: 150px;
    }
  }
  &__empty {
    font-size: 25px;
    font-weight: normal;
    text-align: center;
  }
}

::-webkit {
  &-scrollbar {width: 5px;}
  &-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    opacity: .3;
    border-radius: 10px;
  }
  &-scrollbar-thumb {
    background: lighten(#2F80F3, 20%);
    border-radius: 10px;
    &:hover { background: #2F80F3;}
  }
}

.fade-enter-active, .fade-leave-active {
  transition:.3s;
}
.fade-enter, .fade-leave-to{
  transform: translateY(50px);
  opacity: 0;
}
</style>
