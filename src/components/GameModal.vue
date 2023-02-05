<template>
  <div class="modal fixed flex items-center justify-center inset-0" v-if="show">
    <div class="modal-content bg-white rounded-xl pt-20 pb-20 pr-32 pl-32 text-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
