<template>
  <div id="app">
    <view-input v-model="title"></view-input>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  #app{
    width: 300px;
    background-color: #fff;
  }
</style>
