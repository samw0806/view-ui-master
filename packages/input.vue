<template>
 <div class="view-input">
   <input
   class="view-input_inner"
   :class="{'is-disabled': disabled}"
   :placeholder="placeholder"
   :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
   :name="name"
   :value="value"
   @input="handleInput"
   :disabled=disabled>
   <span class="view-input_suffix">
    <i class="view-input_icon view-icon-circle-close" v-if="clearable && value" @click="clear"></i>
    <i class="view-input_icon view-icon-view" v-if="showPassword"></i>
   </span>
 </div>
</template>
<script>
export default {
  name: 'viewInput',
  components: {
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  watch: {},
  computed: {
  },
  data () {
    return {
      // 显示是否显示密码框
      passwordVisible: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>
<style lang="scss" scoped>
  .view-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .view-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;

      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // 禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
</style>
