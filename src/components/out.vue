<template>
  <div class="con">
    <el-row>
      <el-col :span="4"> <div><navmenus></navmenus></div></el-col>
      <el-col :span="14"><div><router-view></router-view></div></el-col>
    </el-row>
  </div>
</template>
<script>
  import navmenus from 'components/navigation.vue'
  export default {
    components: {
      navmenus
    }
  }
</script>
<style>


</style>
