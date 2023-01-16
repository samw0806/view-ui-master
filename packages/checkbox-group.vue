<template>
  <div class="view-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'viewCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
