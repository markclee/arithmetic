import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)
// store就是一个仓库
const store = new vuex.Store({
  // state 是存储数据的位置
  state: {
    dataone: '1当一个数据, 在项目中多个组件使用时候, 放在store中管理',
    dataone: '2当一个数据, 在项目中多个组件使用时候, 放在store中管理',
    datathree: '3当一个数据, 在项目中多个组件使用时候, 放在store中管理'
  },
  mutations: {
    changeone(state, type) {
      state.dataone = type
    }
  },
  // action方法不是直接去改变state
  // action去派遣mutation中的方法执行
  // 在这个位置执行, mutation中的changeone
  // 达到异步更改state中的数据
  actions: {
    changeoneaction(context, type) {
      setTimeout(() => {
        context.commit('changeone', type)
      }, 3000)
    }
  },
  getters: {
    // 相当于computed中属性
    dataOneGetter(state) {
      return state.dataone + '^__^'
    }
  }
})
export default store