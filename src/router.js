import VueRouter from 'vue-router'
import HomeContainer from './component/tabbar/HomeContainer.vue'
import Cart from './component/tabbar/Cart.vue'
import Setting from './component/tabbar/Setting.vue'
import UserContainer from './component/tabbar/UserContainer.vue'
import NewsList from './component/news/newsList.vue'
import NewsInfo from './component/news/newsInfo.vue'
import PhotoList from './component/photo/photolist.vue'
import PhotoInfo from './component/photo/photoInfo.vue'
import GoodList from './component/goods/goodLists.vue'
import GoodInfo from './component/goods/goodsInfo.vue'
import Info from './component/goods/info.vue'
import comments from './component/goods/comments.vue'
import description from './component/goods/goodsDescription.vue'

var router =new VueRouter({
	routes:[
		{path:'/',redirect:'/home',component:HomeContainer},
		{path:'/home',component:HomeContainer},
		{path:'/cart',component:Cart},
		{path:'/user',component:UserContainer},
		{path:'/setting',component:Setting},
		{path:'/home/newsList',component:NewsList},
		{path:'/home/newsinfo/:id',component:NewsInfo},
		{path:'/home/photolist',component:PhotoList},
		{path:'/home/photoinfo/:id',component:PhotoInfo},
		{path:'/home/goodslist/',component:GoodList},
		{path:'/home/goodsinfo',component:GoodInfo,children:[{path:'/home/goodsinfo/info',component:Info},{path:'/home/goodsinfo/comment',component:comments},{path:'/home/goodsinfo/description',component:description}]},
	],
	linkActiveClass:'mui-active'
})

export default router