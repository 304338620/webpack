//import Vue from 'vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './app.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {Header,Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './css/index.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
import router from './router.js'
import { Swipe, SwipeItem } from 'mint-ui';
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import moment from 'moment' 
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);


var store =new Vuex.Store({
	state:{  //可以通过this.$store.state.属性名来获取需要的数据
		cart:JSON.parse(localStorage.getItem('vueCart')||'[]')
	},
	mutations:{  //通过this.$store.commit('方法名')来调用mutation中的方法
		addToCart(state,goodsInfo){
			//点击加入购物车，将商品信息保存到store的state属性的cart数组里面
			//两种情况，如果购物车中存在该商品，修改该商品数量，如果没有则添加新的商品
			var flag=false
			state.cart.some(item=>{
				if (item.id==goodsInfo.id) {
					item.count+=parseInt(goodsInfo.count)
					flag=true
					return true
				}
			})
			if(flag===false){
				state.cart.push(goodsInfo)
			}
			//更新cart数组中的数据之后，保存到本地存储中
			localStorage.setItem('vueCart',JSON.stringify(state.cart))
		},
		updateCount(state,obj){
			state.cart.forEach(item=>{
				if (item.id==obj.id) {
					item.count=obj.count
					return true
				}
			})
			localStorage.setItem('vueCart',JSON.stringify(state.cart))
		}
	},
	getters:{  //通过this.$store.getters.属性名来获取getters中的数据
		
	}
})
Vue.filter('dateFormate',function(dateStr,pattren='YYYY-MM-DD hh:mm:ss'){
	return moment(dateStr).format(pattren)
})
var App = new Vue({
	el:'#app',
	render(createElement){
		return createElement(app)
	},
	router:router,
	store:store
})