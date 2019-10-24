<template>
  <div>
    <p>我是 comOne 组件内容区域</p>
    {{ msg }}
    <p>{{dataonecomputed}}</p>
    {{dataone}}
    {{datatwo}}
    <br />
    <input type="text" v-model="test" />
    <!-- <button @click="changeDataOne">点击</button> -->
    <button @click="changeone(test)">点击</button>
  </div>
</template>

<script>
// 映射语法, 映射state中的数据
import { mapState, mapMutations } from "vuex";

export default {
  name: "comOne",
  data() {
    return {
      msg: "我是 comOne 组件里面的数据",
      // 不建议把数据写在data中
      test: ""
    };
  },
  methods: {
    // changeDataOne() {
    // 同步改变state中的数据
    // this.$store.commit("changeone", this.test);
    // 异步改变state中的数据, 使用dispatch, 着急件
    // this.$store.dispatch("changeoneaction", this.test);
    // }
    // 使用映射语法, 映射changeone
    // ...mapMutations(["changeone"])
    // 等价于
    // changeone() {
    //   this.$store.commit("changeone", "type");
    // }
  },
  // computed: {
  // dataonecomputed: function() {
  //   // return this.$store.state.dataone;
  //   // 获取getter中dataone的数据
  //   // 相当于计算属性, 当dataOneGetter变化时候, 会重新计算
  //   return this.$store.getters.dataOneGetter;
  // }
  // 映射state的第一种形式, 使用... 展开运算符
  //
  // ...mapState(["dataone", "datatwo", "datathree"])
  // 映射state的第二种形式, key:value
  // ...mapState({
  //   key: value
  //   key 是本组件中使用的名称
  //   value 是vuex中state里边数据的名称
  //    - 相当于把vuex中state中使用的数据, 在本组件中取一个别名
  // })
  // ...mapState({
  //   one: "dataone",
  //   two: "datatwo",
  //   three: "datathree"
  // })
  // }
  // 映射state的第三种形式, 可以是数组, 对象
  // computed 里边不能写其它内容了
  // computed: mapState(["dataone", "datatwo", "datathree"])

  computed: {
    dataonecomputed: function() {
      return this.$store.state.dataone;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
