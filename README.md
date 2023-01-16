# samw-ui

## 简介
更新（加入了新拟态风格）：
一个持续更新的 Vue UI 组件
(因为本人特别喜欢视觉view和vue框架，所以即使已经有了view-ui项目（晚了一步），
我还是把我的组件使用view-ui的这个名字)

## 使用


1. 全局注册

```js
import ViewUI from 'view-ui'
Vue.use(ViewUI)
```

2. 按需导入

```js
import ViewUI, { Button, Form } from 'view-ui'
Vue.use(ViewUI, {
  components: [Button, Form]
})
```

3. 导入样式

```js
import 'view-ui-/dist/view-ui.css'
```


<br>

---

<br>

## 组件

### 按钮(Button)

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| type     | String           | 按钮类型：primary,info,success,warning,danger                        |
| plain    | Boolean          | 是否为朴素按钮，默认为 false                                         |
| mimicry  | Boolean          | 是否为拟态按钮，和 plain 不能同时设置，会被 plain 覆盖。默认为 false |
| disabled | Boolean          | 是否禁用按钮，默认为 false                                           |
| round    | Boolean          | 是否为圆角按钮，默认为 false                                         |
| circle   | Boolean          | 是否为圆形按钮，默认为 false                                         |
| icon     | String           | 默认为 空                                                           |

<br>

| 事件  | 值       | 描述     |
| ----- | -------- | -------- |
| click | Function | 点击事件 |

<br>

---

<br>

### 对话框(Dialog)

<br>

| 属性     | 值      | 描述                               |
| -------- | ------- | ---------------------------------- |
| title    | String  | 对话框头部提示，默认为"提示"       |
| visible | Boolean | 对话框可见状态，默认为 false       |
| mimicry  | Boolean | 对话框是否为拟态风格，默认为 false |
| width    | String  | 对话框宽度                        |
| top      | String  | 对话框距离顶部位置，默认为 15vh    |

<br>

| 插槽   | 描述                    |
| ------ | ----------------------- |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

<br>

---

<br>

### 输入框(Input)

<br>

| 属性         | 值      | 描述                               |
| ------------ | ------- | ---------------------------------- |
| placeholder  | String  | 占位符，默认为空字符串             |
| type         | String  | 表单类型，默认为'text'             |
| name         | String  | 表单命名，默认为空                 |
| value        | String  | 表单值，默认为空字符串             |
| disabled     | Boolean | 是否禁用，默认为 false             |
| clearable    | Boolean | 是否可清空，默认为 false           |
| showPassword | Boolean | 是否显示密码可见，默认为 false     |

<br>

### 切换(Switch)

<br>

| 属性          | 值      | 描述                               |
| ------------- | ------- | ---------------------------------- |
| mimicry       | Boolean | 对话框是否为拟态风格，默认为 false |
| name          | String  | 表单命名，默认为空                 |
| value         | String  | 表单值，默认为空字符串             |
| disabled      | Boolean | 是否禁用，默认为 false             |
| activeColor   | String  | 激活状态颜色，默认为#dcdfe6        |
| inactiveColor | String  | 未激化状态颜色，默认为#dcdfe6      |

<br>


---

<br>

### 单选框(Radio)

<br>

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| name    | String                    | 表单命名，默认为空                 |
| value   | String                    | 表单值，默认为空字符串             |
| color   | String                    | 单选框选择时的颜色                 |

<br>

### 单选框组(RadioGroup)

<br>

用于包裹 radio，通过 v-model 指定组内所有的 radio 的 v-model

<br>

---

<br>

### 表单项(Form-item)

<br>

| 属性  | 值     | 描述                            |
| ----- | ------ | ------------------------------- |
| label | String | 单选框 label 值，默认为空字符串 |

<br>

### 表单(Form)

<br>

| 属性        | 值     | 描述                 |
| ----------- | ------ | -------------------- |
| model       | Object | 表单对象，必须要传       |
| label-width | String | 标签宽度，默认"75px" |

<br>

---

<br>
