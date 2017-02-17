<template>
  <div>
    <ul>
      <li v-for="topic in topics">{{ topic.title }}<span>{{topic.tab}}</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        topics: []
      }
    },
    created () {
      var vm = this
      this.$http.get('https://cnodejs.org/api/v1/topics')
        .then(function (res) {
          vm.topics = res.data.data
          console.log(res)
        })
        .catch(function (res) {
          console.log(res)
        })
    }
  }
</script>
<style>
  span{
    color:red;
    float: right;
  }
</style>
