const routes = [
  {
    path: '/home',
    component: resolve => require(['components/home.vue'], resolve)
  },
  {
    path: '/home',
    component: resolve => require(['components/home.vue'], resolve)
  }, {
    path: '/news/out',
    component: resolve => require(['components/out.vue'], resolve),
    children: [
      {
        path: 'c1',
        component: resolve => require(['components/c1.vue'], resolve)
      }, {
        path: 'c2',
        component: resolve => require(['components/c2.vue'], resolve)
      }]
  }, {
    path: '/news/in',
    component: resolve => require(['components/in.vue'], resolve)
  }, {
    path: '/mesg',
    component: resolve => require(['components/mesg.vue'], resolve)
  }
]
export default routes
