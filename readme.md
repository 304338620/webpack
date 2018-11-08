#这个项目是开始接触webpack构建工具所完成的项目，功能还不完整，有一些不该尚未解决，例如复选框在移动端不能点击，切换为排除端可以正常的工作，还有部分页面尚未万彩城，因为没有后台，所有数据
#均是由json数据模仿完成，所以缺少交互，仅仅是练习前端页面的布局和以及vue的使用，包括vue-router和vuex

##项目使用
1 下载后，打开cmd运行npm install安装所需要的相关依赖
2 运行npm run dev命令


##制作首页的App组件
1 完成header的区域，使用的是mint-UI中的header组件
2 完成底部tab栏的部分，使用的是mui中的tabbar.html
3 mui中的图标不全面，可以导入mui-icons-extra
4 将tabbar中的a标签改造为路由链接router-link
5 设置路由高亮显示，在路由的配置对象中，将默认的LinkActiveClass更换为mui-active

##点击tabbar中的路由链接，显示对应的路由组件
