<template>
  <div>
    <div style="margin-bottom: 20px;">
      <el-button size="small" @click="add">add tab</el-button>
    </div>
    <el-tabs type="card" closable >
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
       <el-tab-pane v-for="(item, index) in tabs" :label="item.title" :name="item.name">{{item.content}}</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeName: 'first',
        tabs: [],
        tabIndex: 1
      }
    },
    methods: {

      add () {
        console.log(this.$router.length)
        if (this.tabs.length >= 0 && this.tabs.length < this.$routes.length) {
          this.tabs.push({ name: 'Tab ' + ++this.tabIndex, title: 'new Tab', content: 'new Tab content' })
        } else {
          alert('error')
        }
      }
    }

  }
</script>
