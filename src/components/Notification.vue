<template>
  <div :class="[
      'notification',
      notificationType,
       {'left': isOpen}
       ]"
  >
    <p :class="['notification__title', type]"> {{ title }} </p>
  </div>
</template>

<script>
const notificationType = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};
export default {
  name: "Notification",
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    isOpen: Boolean
  },
  computed: {
    notificationType() {
      return this.type
          ? `notification__${ notificationType[this.type] }`
          : '';
    },
  }
}
</script>

<style lang="scss" scoped>
.notification{
  position: fixed;
  bottom: 5px;
  right: 0;
  min-width: 200px;
  border-radius: 3px;
  padding:15px 50px;
  transition: .4s all;
  border: 1px solid #EBEEF5;
  background-color: #edf2fc;
  transform: translateX(101%);
  box-sizing: border-box;
  z-index: 2;
  &.left{
    transform: translateX(0);
  }
  &__success {background-color: #e1f3d8; border-color: #e1f3d8;}
  &__error {background-color: #fef0f0; border-color: #fde2e2;}
  &__warning {background-color: #fdf6ec; border-color: #faecd8;}
  &__title {
    text-align: center;
    margin: 0;
    color: #FFFFFF;
    font-size: 21px;
    font-weight: normal;
    &.success {color: #67C23A;}
    &.error {color: #F56C6C;}

  }
}

</style>