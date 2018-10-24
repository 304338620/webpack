const path=require('path')
const webpack=require('webpack')
//插件都要放到插件点当中
const htmlWebpackPlugin= require('html-webpack-plugin')
const imgSize=1*1024*1024
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
	entry: path.join(__dirname,'src/main.js'),
	output:{
		path:path.join(__dirname,'dist'),
		filename:'bundle.js' 
	},
	//第二种配置方式
//	devServer:{
//		open:true,
//		port:3000,
//		hot:true,
//		mod:"development",
//	},
	plugins:[
	//创建一个在内存中生成HTML文件的插件
		new htmlWebpackPlugin({
			template:path.join(__dirname,'src/index.html'),//指定模板页面，将来会根据指定的页面路径去生成内存中的HTML文件
			filename:'index.html'//指定生成的页面的名称
		}),
		new VueLoaderPlugin()
//		new webpack.HotModuleReplacementPlugin()
	],
	module:{   //用于配置所有的第三方模块加载器
		rules:[   //所有的第三方模块的匹配规则
			{ test:/\.css$/, use:['style-loader' ,'css-loader'] }, //配置处理.css文件的第三方loader规则
			{ test:/\.(jpg|png|jpeg|gif|bmp)$/, use:'url-loader?limit='+imgSize+'&name=[hash:8]-[name].[ext]' }, //处理图片路径的loader, limit是给定的值
			//是指文件的大小，单位是B，如果我们引用的图片大于给定的大小，那么图片将不会转化为base64的格式，如果小于给定的大小，将会转换成base64的格式,
			{ test:/\.(ttf|woff|woff2|eot|svg)$/, use:'url-loader' },  //处理字体文件的配置选项
			{ test:/\.js$/, use:'babel-loader', exclude:/node_modules/ },  //处理js文件的配置选项,配置babel来解析es6的部分语法
			{ test:/\.vue$/, use:'vue-loader' }
		]
	},
	resolve:{
		alias:{
//			"vue$":"vue/dist/vue.js"
		}
	}
}
