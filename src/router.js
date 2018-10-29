import VueRouter from 'vue-router'
import HomeContainer from './component/tabbar/HomeContainer.vue'
import Cart from './component/tabbar/Cart.vue'
import Setting from './component/tabbar/Setting.vue'
import UserContainer from './component/tabbar/UserContainer.vue'
import NewsList from './component/news/newsList.vue'
import NewsInfo from './component/news/newsInfo.vue'


var router =new VueRouter({
	routes:[
		{path:'/',redirect:'/home',component:HomeContainer},
		{path:'/home',component:HomeContainer},
		{path:'/cart',component:Cart},
		{path:'/user',component:UserContainer},
		{path:'/setting',component:Setting},
		{path:'/home/newsList',component:NewsList},
		{path:'/home/newsinfo/:id',component:NewsInfo},
	],
	linkActiveClass:'mui-active'
})

export default router