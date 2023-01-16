<template>
  <div class="view-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'viewForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '75px'
    }
  }
}
</script>
