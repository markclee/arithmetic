<template>
  <div>
    <p>我是 comTwo 组件内容区域</p>
    {{ msg }}
    <!-- {{dataonecomputed}} -->
    <p></p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "comOne",
  data() {
    return {
      msg: "我是 comTwo 组件里面的数据"
    };
  },
  computed: {
    // dataonecomputed: function() {
    //   return this.$store.getters.dataOneGetter;
    // }
    // ...mapGetters(["dataOneGetter"])
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
