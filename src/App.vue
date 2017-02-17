<template>
  <div>
    <navmenu></navmenu>
    <p>当前路径：{{$route.fullPath}}</p>
    <div class="view">
           <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import navmenu from 'components/Navmenu.vue'
  export default {
    components: {
      navmenu
    }

  }
</script>
<style>
  a {
    text-decoration: none;
  }
  .view{
    margin: 10px 0;
    height:500px;
    background-color:ivory;
  }
</style>

