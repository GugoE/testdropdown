<template>
  <img src="../assets/loader.svg" alt="pre-loader" class="preloader-icon">
</template>

<script>

export default {
  name: 'Loader',
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.preloader-icon {
  width: 50px;
  height: 50px;
  animation: 2s ease spin infinite;
}
</style>
