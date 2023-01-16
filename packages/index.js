// 包入口
// 导出颜色选择器组件
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import Form from './form'
import FormItem from './form-item'
import './fonts/iconfont.css'

const components = [
  Button,
  Dialog,
  Input,
  Radio,
  RadioGroup,
  Switch,
  Form,
  FormItem
]
// 定义install方法
const install = function (Vue) {
  // 注册所有的组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
// 可以支持非模块化的开发，直接用script引入的时候就不用再调用Vue.use（）了
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法（使用use的时候会自动找到这里）
export default {
  install
}
