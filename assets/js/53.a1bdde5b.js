(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{573:function(e,t,r){"use strict";r.r(t);var s=r(3),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"使用vuepress-theme-reco-主题后打包报错"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用vuepress-theme-reco-主题后打包报错"}},[e._v("#")]),e._v(" 使用vuepress-theme-reco 主题后打包报错")]),e._v(" "),r("p",[e._v("使用VuePress搭建的个人博客有段时间了， 都是使用默认自带的样式，然后寻思着给换个样式.")]),e._v(" "),r("p",[e._v("于是一番寻找，发现"),r("strong",[e._v("vuepress-theme-reco")]),e._v("这个主题看着还行，于是就直接安装了一下，给换上了新的样式，在本地运行一切正常， 改好想要的样子后， 运行脚本打包发布到GitHub上，就在这时，与往常不一样，脚本运行一会儿后，闪一下关闭了，以为已经发布到GitHub上了， 结果打开GitHub一看，呀! 没推送记录!!! 进入仓库查看也确实没有更新，第一次遇到这样的问题，然后尝试不用脚本自动打包发布， 使用"),r("code",[e._v("npm run build")]),e._v("命令先打包一下看看 ，这下就发现问题了，看到一串串红码，知道是有问题了，报错如下:")]),e._v(" "),r("p",[e._v("最上方的报错，重复很多"),r("code",[e._v("---\x3e<PersonalInfo>")]),e._v("...")]),e._v(" "),r("p",[r("img",{attrs:{src:"/images/image-20200926130904947.png",alt:"image-20200926130904947"}})]),e._v(" "),r("p",[e._v("紧接着的错误是， 渲染错误???")]),e._v(" "),r("p",[r("img",{attrs:{src:"/images/image-20200926131122248.png",alt:"image-20200926131122248"}})]),e._v(" "),r("p",[e._v("还有")]),e._v(" "),r("p",[r("img",{attrs:{src:"/images/image-20200926131344630.png",alt:"image-20200926131344630"}})]),e._v(" "),r("p",[e._v("看完后发现重点")]),e._v(" "),r("p",[r("span",{staticStyle:{color:"red"}},[e._v("TypeError: Cannot read property 'list' of undefined")])]),e._v(" "),r("p",[e._v("这个报错有点眼熟啊，在异步请求数据还未返回时，渲染页面就会报这样错，因为数据没有返回到指定变量中，此时变量没有数据渲染就报错了，顺着提示找到"),r("code",[e._v("<Sidebar>")]),e._v("组件 添加一个v-if判断"),r("code",[e._v('v-if="!items"')]),e._v("，然后再打包就正常了。")])])}),[],!1,null,null,null);t.default=v.exports}}]);