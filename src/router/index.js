import Vue from 'vue'
import Router from 'vue-router'
import routes from 'router/routes.js'
import NProgress from 'nprogress'// 页面顶部进度条
import 'nprogress/nprogress.css'
Vue.use(Router)
const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})

export default router
