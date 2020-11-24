<template>
  <div class="hello">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      checked: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$axios({
      method: 'get',
      url: '/home',
      data: {}
    }).then((response) => { // 这里使用了ES6的语法
      console.log(response) // 请求成功返回的数据
    })
  }
}
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
