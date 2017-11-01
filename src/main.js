// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//importEA6语法，引入vue模块（第三方模块）
import App from './App'//引入组件
import router from './router'//引入路由

Vue.config.productionTip = false//配置是否显示代码提示

/* eslint-disable no-new */
new Vue({//根实例
  el: '#app',
  router,//路由
  template: '<App/>',//模板用的APP组件
  components: { App }//声明组件
})
