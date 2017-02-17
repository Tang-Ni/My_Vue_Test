<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" :rules="rules">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
        <router-link to="/mesg" class="cbtn">取消</router-link>
      </el-form-item>
    </el-form>

    <div class="list-group">
      <ul v-for="(plan,index) in plans">
        <li>{{plan.name}}<span>{{plan.desc}}</span><el-button   icon="delete" size="mini" @click="deletePlan(index)"></el-button></li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      plans () {
        // 从store中取出数据
      //  return this.$store.state.list
        return this.$store.getters.getPlan
      }

    },
    methods: {
      onSubmit (form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            const plan = {
              name: this.form.name,
              desc: this.form.desc
            }
            this.$store.dispatch('savePlan', plan)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      deletePlan (idx) {
        console.log(idx)
        this.$store.dispatch('deletePlan', idx)
      }
    }
  }
</script>
<style>
  .cbtn{
    color: #fff;
    background-color: #20a0ff;
    border-color: #20a0ff;
    font-size:14px;
    white-space: nowrap;
    cursor: pointer;
    padding:  10px 20px;
    border-radius: 5px;
  }
</style>

