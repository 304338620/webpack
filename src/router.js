import VueRouter from 'vue-router'
import HomeContainer from './component/tabbar/HomeContainer.vue'
import Cart from './component/tabbar/Cart.vue'
import Setting from './component/tabbar/Setting.vue'
import UserContainer from './component/tabbar/UserContainer.vue'


var router =new VueRouter({
	routes:[
		{path:'/',redirect:'/home',component:HomeContainer},
		{path:'/home',component:HomeContainer},
		{path:'/cart',component:Cart},
		{path:'/user',component:UserContainer},
		{path:'/setting',component:Setting},
	],
	linkActiveClass:'mui-active'
})

export default router