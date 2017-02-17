<template>
  <div>
    <el-menu router default-active="1" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          新闻
        </template>
        <el-menu-item index="/news/out">国际新闻</el-menu-item>
        <el-menu-item index="/news/in">国内新闻</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">关于</template>
        <el-menu-item index="/mesg">在线留言</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
