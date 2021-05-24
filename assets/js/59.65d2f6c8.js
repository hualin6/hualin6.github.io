(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{573:function(v,e,_){"use strict";_.r(e);var t=_(2),a=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"vue-常见面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue-常见面试题"}},[v._v("#")]),v._v(" Vue 常见面试题")]),v._v(" "),_("h3",{attrs:{id:"_1-vue优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue优点"}},[v._v("#")]),v._v(" 1.Vue优点？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("①轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十 kb ；")]),v._v(" "),_("p",[v._v("②简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；")]),v._v(" "),_("p",[v._v("③双向数据绑定：保留了 angular 的特点，在数据操作方面更为简单；")]),v._v(" "),_("p",[v._v("④组件化：保留了 react 的优点，实现了 html 的封装和重用，在构建单页面应用方面有着独特的优势；")]),v._v(" "),_("p",[v._v("⑤视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；")]),v._v(" "),_("p",[v._v("⑥虚拟DOM：dom 操作是非常耗费性能的， 不再使用原生的 dom 操作节点，极大解放 dom 操作，但具体操作的还是 dom 不过是换了另一种方式；")]),v._v(" "),_("p",[v._v("⑦运行速度更快：相比较于 react 而言，同样是操作虚拟 dom ，就性能而言， vue 存在很大的优势。")]),v._v(" "),_("h3",{attrs:{id:"_2-vue组件传参"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue组件传参"}},[v._v("#")]),v._v(" 2.Vue组件传参")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("父组件---\x3e子组件：通过"),_("code",[v._v("props")])]),v._v(" "),_("p",[v._v("子组件--\x3e父组件：通过"),_("code",[v._v("$emit")])]),v._v(" "),_("h3",{attrs:{id:"_3-v-show-和-v-if指令的共同点和不同点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-v-show-和-v-if指令的共同点和不同点"}},[v._v("#")]),v._v(" 3.v-show 和 v-if指令的共同点和不同点？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("共同点： 都能控制元素的显示和隐藏；")]),v._v(" "),_("p",[v._v("不同点： 实现本质方法不同，v-show 本质就是通过控制 css 中的 display 设置为 none，控制隐藏，只会编译一次；v-if 是动态的向 DOM 树内添加或者删除 DOM 元素，若初始值为 false ，就不会编译了。而且 v-if 不停的销毁和创建比较消耗性能。总结：如果要频繁切换某节点，使用 v-show (切换开销比较小，初始开销较大)。如果不需要频繁切换某节点使用 v-if（初始渲染开销较小，切换开销比较大）。")]),v._v(" "),_("h3",{attrs:{id:"_4-如何让css只在当前组件中起作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何让css只在当前组件中起作用"}},[v._v("#")]),v._v(" 4.如何让CSS只在当前组件中起作用?")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("在组件中的 style 前面加上 scoped")]),v._v(" "),_("h3",{attrs:{id:"_5-keep-alive-keep-alive-的作用是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-keep-alive-keep-alive-的作用是什么"}},[v._v("#")]),v._v(" 5."),_("code",[v._v("<keep-alive></keep-alive>")]),v._v("的作用是什么?")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("keep-alive")]),v._v(" 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。")]),v._v(" "),_("h3",{attrs:{id:"_6-如何获取dom"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-如何获取dom"}},[v._v("#")]),v._v(" 6.如何获取dom?")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v('ref="domName"')]),v._v(" 用法："),_("code",[v._v("this.$refs.domName")])]),v._v(" "),_("h3",{attrs:{id:"_7-说出几种vue当中的指令和它的用法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-说出几种vue当中的指令和它的用法"}},[v._v("#")]),v._v(" 7.说出几种Vue当中的指令和它的用法？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("(1). 如果元素的内容需要随变量自动变化:  {{}}")]),v._v(" "),_("p",[v._v("(2). 如果元素的属性值需要随变量自动变化:  :")]),v._v(" "),_("p",[v._v("(3). 控制一个元素显示隐藏: "),_("code",[v._v("v-show")])]),v._v(" "),_("p",[v._v("(4). 控制两个元素二选一显示:  "),_("code",[v._v("v-if")]),v._v(" "),_("code",[v._v("v-else")])]),v._v(" "),_("p",[v._v("(5). 多个元素多选一显示: "),_("code",[v._v("v-if")]),v._v(" "),_("code",[v._v("v-else-if")]),v._v(" "),_("code",[v._v("v-else")])]),v._v(" "),_("p",[v._v("(6). 只要反复生成多个相同结构的元素组成列表时: "),_("code",[v._v('v-for :key="唯一标识"')])]),v._v(" "),_("p",[v._v("(7). 只要绑定事件: "),_("code",[v._v("@ $event")])]),v._v(" "),_("p",[v._v("(8). 防止用户短暂看到{{}}:  "),_("code",[v._v("v-cloak")]),v._v("和"),_("code",[v._v("v-text")])]),v._v(" "),_("p",[v._v("(9). 只要绑定原始HTML代码片段内容:"),_("code",[v._v("v-html")])]),v._v(" "),_("p",[v._v("(10). 如果元素的内容只在首次加载时绑定一次，之后都不会改变:"),_("code",[v._v("v-once")])]),v._v(" "),_("p",[v._v("(11). 保护内容中的{{}}不被编译:"),_("code",[v._v("v-pre")])]),v._v(" "),_("p",[v._v("(12). 想获得表单元素的值或状态(双向数据绑定):"),_("code",[v._v("v-model")])]),v._v(" "),_("h3",{attrs:{id:"_8-vue-loader是什么-使用它的用途有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-vue-loader是什么-使用它的用途有哪些"}},[v._v("#")]),v._v(" 8. vue-loader是什么？使用它的用途有哪些？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("vue 文件的一个加载器，将 template/js/style 转换成 js 模块。")]),v._v(" "),_("p",[v._v("用途：js 可以写 es6 、 style样式可以 scss 或 less 、 template 可以加 jade等")]),v._v(" "),_("h3",{attrs:{id:"_9-为什么使用key"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-为什么使用key"}},[v._v("#")]),v._v(" 9.为什么使用key?")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("需要使用 key 来给每个节点做一个唯一标识， Diff 算法就可以正确的识别此节点。作用主要是为了高效的更新虚拟 DOM。")]),v._v(" "),_("h3",{attrs:{id:"_10-axios及安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-axios及安装"}},[v._v("#")]),v._v(" 10.axios及安装?")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("请求后台资源的模块。"),_("code",[v._v("npm install axios —save")]),v._v(" 装好， js中使用"),_("code",[v._v("import")]),v._v(" 进来，然后 "),_("code",[v._v(".get")]),v._v(" 或 "),_("code",[v._v(".post")]),v._v("。返回在"),_("code",[v._v(".then")]),v._v(" 函数中如果成功，失败则是在"),_("code",[v._v(".catch")]),v._v("函数中。")]),v._v(" "),_("h3",{attrs:{id:"_11-v-model的使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-v-model的使用"}},[v._v("#")]),v._v(" 11.v-model的使用")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("v-model")]),v._v(" 用于表单数据的双向绑定，其实它就是一个语法糖，这个背后就做了两个操作：v-bind 绑定一个 value 属性；v-on 指令给当前元素绑定 input 事件。")]),v._v(" "),_("h3",{attrs:{id:"_12-请说出vue-cli项目中src目录每个文件夹和文件的用法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-请说出vue-cli项目中src目录每个文件夹和文件的用法"}},[v._v("#")]),v._v(" 12.请说出vue.cli项目中src目录每个文件夹和文件的用法？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("assets　　　　 资源目录，这里的资源会被wabpack构建，放图片等信息")]),v._v(" "),_("p",[v._v("components     公共组件目录")]),v._v(" "),_("p",[v._v("routes                前端路由")]),v._v(" "),_("p",[v._v("App.vue　　     根组件")]),v._v(" "),_("p",[v._v("main.js　　　   入口js文件")]),v._v(" "),_("h3",{attrs:{id:"_13-分别简述computed和watch的使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-分别简述computed和watch的使用场景"}},[v._v("#")]),v._v(" 13.分别简述computed和watch的使用场景")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("computed")]),v._v(" : 当一个属性受多个属性影响的时候就需要用到 "),_("code",[v._v("computed")]),v._v(" ，最典型的栗子：购物车商品结算的时候")]),v._v(" "),_("p",[_("code",[v._v("watch")]),v._v(" : 当一条数据影响多条数据的时候就需要用 "),_("code",[v._v("watch")]),v._v(" ，栗子：搜索数据")]),v._v(" "),_("h3",{attrs:{id:"_14-v-on可以监听多个方法吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_14-v-on可以监听多个方法吗"}},[v._v("#")]),v._v(" 14.v-on可以监听多个方法吗？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("可以，栗子：")]),v._v(" "),_("div",{staticClass:"language-html line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-html"}},[_("code",[_("span",{pre:!0,attrs:{class:"token tag"}},[_("span",{pre:!0,attrs:{class:"token tag"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("input")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("type")]),_("span",{pre:!0,attrs:{class:"token attr-value"}},[_("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("text"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),v._v(" "),_("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("v-on")]),_("span",{pre:!0,attrs:{class:"token attr-value"}},[_("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("{ input:onInput,focus:onFocus,blur:onBlur, }"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("h3",{attrs:{id:"_15-nexttick的使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_15-nexttick的使用"}},[v._v("#")]),v._v(" 15.$nextTick的使用")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("当你修改了"),_("code",[v._v("data")]),v._v(" 的值然后马上获取这个 dom 元素的值，是不能获取到更新后的值， 你需要使用 "),_("code",[v._v("$nextTick")]),v._v(" 这个回调，让修改后的"),_("code",[v._v("data")]),v._v("值渲染更新到 dom 元素之后在获取，才能成功。")]),v._v(" "),_("h3",{attrs:{id:"_16-vue组件中data为什么必须是一个函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_16-vue组件中data为什么必须是一个函数"}},[v._v("#")]),v._v(" 16.vue组件中data为什么必须是一个函数？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("因为"),_("code",[v._v("JavaScript")]),v._v(" 的特性所导致，在 "),_("code",[v._v("component")]),v._v("中，"),_("code",[v._v("data")]),v._v("必须以函数的形式存在，不可以是对象。组建中的 "),_("code",[v._v("data")]),v._v(" 写成一个函数，数据以函数返回值的形式定义，这样每次复用组件的时候，都会返回一份新的"),_("code",[v._v("data")]),v._v(" ，相当于每个组件实例都有自己私有的数据空间，它们只负责各自维护的数据，不会造成混乱。而单纯的写成对象形式，就是所有的组件实例共用了一个"),_("code",[v._v("data")]),v._v(" ，这样改一个全都改了。")]),v._v(" "),_("h3",{attrs:{id:"_17-渐进式框架的理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_17-渐进式框架的理解"}},[v._v("#")]),v._v(" 17.渐进式框架的理解")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("主张最少；可以根据不同的需求选择不同的层级；")]),v._v(" "),_("h3",{attrs:{id:"_18-vue中双向数据绑定是如何实现的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_18-vue中双向数据绑定是如何实现的"}},[v._v("#")]),v._v(" 18.Vue中双向数据绑定是如何实现的？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；核心：关于VUE双向数据绑定，其核心是  "),_("code",[v._v("Object.defineProperty()")]),v._v(" 方法。")]),v._v(" "),_("h3",{attrs:{id:"_19-单页面应用和多页面应用区别及优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_19-单页面应用和多页面应用区别及优缺点"}},[v._v("#")]),v._v(" 19.单页面应用和多页面应用区别及优缺点")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("单页面应用（SPA），通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。所有的页面内容都包含在这个所谓的主页面中。但在写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，单页面的页面跳转，仅刷新局部资源。多应用于pc端。")]),v._v(" "),_("p",[v._v("多页面（MPA），就是指一个应用中有多个页面，页面跳转时是整页刷新\n单页面的优点：用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小；前后端分离；页面效果会比较炫酷（比如切换页面内容时的专场动画）。\n单页面缺点：不利于seo；导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）；初次加载时耗时多；页面复杂度提高很多。")]),v._v(" "),_("h3",{attrs:{id:"_20-v-if和v-for的优先级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_20-v-if和v-for的优先级"}},[v._v("#")]),v._v(" 20.v-if和v-for的优先级")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("当 "),_("code",[v._v("v-if")]),v._v(" 与 "),_("code",[v._v("v-for")]),v._v(" 一起使用时，"),_("code",[v._v("v-for")]),v._v(" 具有比"),_("code",[v._v("v-if")]),v._v(" 更高的优先级，这意味着"),_("code",[v._v("v-if")]),v._v("将分别重复运行于每个 "),_("code",[v._v("v-for")]),v._v("循环中。所以，不推荐"),_("code",[v._v("v-if")]),v._v(" 和"),_("code",[v._v("v-for")]),v._v(" 同时使用。如果"),_("code",[v._v("v-if")]),v._v(" 和 "),_("code",[v._v("v-for")]),v._v(" 一起用的话，vue中的的会自动提示 "),_("code",[v._v("v-if")]),v._v(" 应该放到外层去。")]),v._v(" "),_("h3",{attrs:{id:"_21-assets和static的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_21-assets和static的区别"}},[v._v("#")]),v._v(" 21.assets和static的区别")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("相同点："),_("code",[v._v("assets")]),v._v("和 "),_("code",[v._v("static")]),v._v(" 两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下")]),v._v(" "),_("p",[v._v("不相同点："),_("code",[v._v("assets")]),v._v(" 中存放的静态资源文件在项目打包时，也就是运行 "),_("code",[v._v("npm run build")]),v._v("时会将 "),_("code",[v._v("assets")]),v._v("中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在 "),_("code",[v._v("static")]),v._v(" 文件中跟着"),_("code",[v._v("index.html")]),v._v(" 一同上传至服务器。"),_("code",[v._v("static")]),v._v("中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是 static 中的资源文件由于没有进行压缩等操作，所以文件的体积也就相对于 assets 中打包后的文件提交较大点。在服务器中就会占据更大的空间。")]),v._v(" "),_("p",[v._v("建议： 将项目中 "),_("code",[v._v("template")]),v._v("需要的样式文件js文件等都可以放置在 "),_("code",[v._v("assets")]),v._v(" 中，走打包这一流程。减少体积。而项目中引入的第三方的资源文件如"),_("code",[v._v("iconfoont.css")]),v._v(" 等文件可以放置在"),_("code",[v._v("static")]),v._v("中，因为这些引入的第三方文件已经经过处理，我们不再需要处理，直接上传。")]),v._v(" "),_("h3",{attrs:{id:"_22-vue常用的修饰符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_22-vue常用的修饰符"}},[v._v("#")]),v._v(" 22.vue常用的修饰符")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v(".stop")]),v._v("：等同于"),_("code",[v._v("JavaScript")]),v._v(" 中的 "),_("code",[v._v("event.stopPropagation()")]),v._v(" ，防止事件冒泡；")]),v._v(" "),_("p",[_("code",[v._v(".prevent")]),v._v(" ：等同于 "),_("code",[v._v("JavaScrip")]),v._v("t 中的 "),_("code",[v._v("event.preventDefault()")]),v._v(" ，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）；")]),v._v(" "),_("p",[_("code",[v._v(".capture")]),v._v(" ：与事件冒泡的方向相反，事件捕获由外到内；")]),v._v(" "),_("p",[_("code",[v._v(".self")]),v._v("：只会触发自己范围内的事件，不包含子元素；")]),v._v(" "),_("p",[_("code",[v._v(".once")]),v._v(" ：只会触发一次。")]),v._v(" "),_("h3",{attrs:{id:"_23-vue的两个核心点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_23-vue的两个核心点"}},[v._v("#")]),v._v(" 23.vue的两个核心点")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("数据驱动、组件系统")]),v._v(" "),_("p",[v._v("数据驱动： "),_("code",[v._v("ViewModel")]),v._v("，保证数据和视图的一致性。")]),v._v(" "),_("p",[v._v("组件系统： 应用类UI可以看作全部是由组件树构成的。")]),v._v(" "),_("h3",{attrs:{id:"_24-vue和jquery的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_24-vue和jquery的区别"}},[v._v("#")]),v._v(" 24.vue和jQuery的区别")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("jQuery")]),v._v("是使用选择器"),_("code",[v._v("（ $ ）")]),v._v("选取DOM对象，对其进行赋值、取值、事件绑定等操作，其实和原生的HTML的区别只在于可以更方便的选取和操作DOM对象，而数据和界面是在一起的。比如需要获取"),_("code",[v._v("label")]),v._v("标签的内容："),_("code",[v._v('$("lable").val()')]),v._v("; ,它还是依赖DOM元素的值。")]),v._v(" "),_("p",[v._v("Vue则是通过Vue对象将数据和View完全分离开来了。对数据进行操作不再需要引用相应的DOM对象，可以说数据和View是分离的，他们通过Vue对象这个vm实现相互的绑定。这就是传说中的MVVM。")]),v._v(" "),_("h3",{attrs:{id:"_25-引进组件的步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_25-引进组件的步骤"}},[v._v("#")]),v._v(" 25.引进组件的步骤")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("在"),_("code",[v._v("template")]),v._v("中引入组件；在"),_("code",[v._v("script")]),v._v("的第一行用"),_("code",[v._v("import")]),v._v("引入路径；用"),_("code",[v._v("component")]),v._v("中写上组件名称。")]),v._v(" "),_("h3",{attrs:{id:"_26-delete和vue-delete删除数组的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_26-delete和vue-delete删除数组的区别"}},[v._v("#")]),v._v(" 26..delete和Vue.delete删除数组的区别")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("delete")]),v._v(" 只是被删除的元素变成了"),_("code",[v._v("empty/undefined")]),v._v("其他的元素的键值还是不变。"),_("code",[v._v("Vue.delete")]),v._v(" 直接删除了数组 改变了数组的键值。")]),v._v(" "),_("h3",{attrs:{id:"_27-spa首屏加载慢如何解决"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_27-spa首屏加载慢如何解决"}},[v._v("#")]),v._v(" 27.SPA首屏加载慢如何解决")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("安装动态懒加载所需插件；使用CDN资源。")]),v._v(" "),_("h3",{attrs:{id:"_28-vue-router跳转和location-href有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_28-vue-router跳转和location-href有什么区别"}},[v._v("#")]),v._v(" 28.Vue-router跳转和location.href有什么区别")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("使用"),_("code",[v._v("location.href= /url")]),v._v(" 来跳转，简单方便，但是刷新了页面；使用 "),_("code",[v._v("history.pushState( /url )")]),v._v(" ，无刷新页面，静态跳转；引进 "),_("code",[v._v("router")]),v._v(" ，然后使用"),_("code",[v._v("router.push( /url )")]),v._v(" 来跳转，使用了"),_("code",[v._v("diff")]),v._v("算法，实现了按需加载，减少了 "),_("code",[v._v("dom")]),v._v(" 的消耗。其实使用"),_("code",[v._v("router")]),v._v("跳转和使用 "),_("code",[v._v("history.pushState()")]),v._v("没什么差别的，因为"),_("code",[v._v("vue-router")]),v._v("就是用了"),_("code",[v._v("history.pushState()")]),v._v("，尤其是在"),_("code",[v._v("history")]),v._v("模式下。")]),v._v(" "),_("h3",{attrs:{id:"_29-vue-slot"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_29-vue-slot"}},[v._v("#")]),v._v(" 29.vue slot")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("简单来说，假如父组件需要在子组件内放一些DOM，那么这些DOM是显示、不显示、在哪个地方显示、如何显示，就是slot分发负责的活。")]),v._v(" "),_("h3",{attrs:{id:"_30-你们vue项目是打包了一个js文件-一个css文件-还是有多个文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_30-你们vue项目是打包了一个js文件-一个css文件-还是有多个文件"}},[v._v("#")]),v._v(" 30.你们vue项目是打包了一个js文件，一个css文件，还是有多个文件？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("根据vue-cli脚手架规范，一个js文件，一个CSS文件。")]),v._v(" "),_("h3",{attrs:{id:"_31-vue里面router-link在电脑上有用-在安卓上没反应怎么解决"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_31-vue里面router-link在电脑上有用-在安卓上没反应怎么解决"}},[v._v("#")]),v._v(" 31.Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("Vue路由在"),_("code",[v._v("Android")]),v._v("机上有问题，"),_("code",[v._v("babel")]),v._v("问题，安装"),_("code",[v._v("babel polypill")]),v._v("插件解决。")]),v._v(" "),_("h3",{attrs:{id:"_32-vue2中注册在router-link上事件无效解决方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_32-vue2中注册在router-link上事件无效解决方法"}},[v._v("#")]),v._v(" 32.Vue2中注册在router-link上事件无效解决方法")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("使用"),_("code",[v._v("@click.native")]),v._v(" 。原因："),_("code",[v._v("router-link")]),v._v("会阻止"),_("code",[v._v("click事件")]),v._v("，"),_("code",[v._v(".native")]),v._v("指直接监听一个原生事件。")]),v._v(" "),_("h3",{attrs:{id:"_33-routerlink在ie和firefox中不起作用-路由不跳转-的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_33-routerlink在ie和firefox中不起作用-路由不跳转-的问题"}},[v._v("#")]),v._v(" 33.RouterLink在IE和Firefox中不起作用（路由不跳转）的问题")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("方法一：只用a标签，不适用button标签；方法二：使用"),_("code",[v._v("button标签")]),v._v("和"),_("code",[v._v("Router.navigate")]),v._v("方法")]),v._v(" "),_("h3",{attrs:{id:"_34-axios的特点有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_34-axios的特点有哪些"}},[v._v("#")]),v._v(" 34.axios的特点有哪些")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("从浏览器中创建"),_("code",[v._v("XMLHttpRequest")]),v._v("；")]),v._v(" "),_("p",[v._v("node.js创建http请求；")]),v._v(" "),_("p",[v._v("支持"),_("code",[v._v("Promise API")]),v._v("；")]),v._v(" "),_("p",[v._v("拦截请求和响应；")]),v._v(" "),_("p",[v._v("转换请求数据和响应数据；")]),v._v(" "),_("p",[v._v("取消请求；")]),v._v(" "),_("p",[v._v("自动换成json。")]),v._v(" "),_("p",[v._v("axios中的发送字段的参数是"),_("code",[v._v("data")]),v._v("跟"),_("code",[v._v("params")]),v._v("两个，两者的区别在于"),_("code",[v._v("params")]),v._v("是跟请求地址一起发送的，"),_("code",[v._v("data")]),v._v("的作为一个请求体进行发送")]),v._v(" "),_("p",[_("code",[v._v("params")]),v._v("一般适用于"),_("code",[v._v("get请求")]),v._v("，"),_("code",[v._v("data")]),v._v("一般适用于"),_("code",[v._v("post put 请求")]),v._v("。")]),v._v(" "),_("h3",{attrs:{id:"_35-请说下封装-vue-组件的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_35-请说下封装-vue-组件的过程"}},[v._v("#")]),v._v(" 35.请说下封装 vue 组件的过程？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("1.建立组件的模板，先把架子搭起来，写写样式，考虑好组件的基本逻辑。(os：思考1小时，码码10分钟，程序猿的准则。)")]),v._v(" "),_("p",[v._v("2.准备好组件的数据输入。即分析好逻辑，定好 props 里面的数据、类型。")]),v._v(" "),_("p",[v._v("3.准备好组件的数据输出。即根据组件逻辑，做好要暴露出来的方法。")]),v._v(" "),_("p",[v._v("封装完毕了，直接调用即可")]),v._v(" "),_("h3",{attrs:{id:"_36-params和query的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_36-params和query的区别"}},[v._v("#")]),v._v(" 36.params和query的区别")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("用法：query要用path来引入，params要用name来引入，接收参数都是类似的，分别是 "),_("code",[v._v("this.$route.query.name")]),v._v("和 "),_("code",[v._v("this.$route.params.name")]),v._v("。url地址显示：query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示")]),v._v(" "),_("p",[v._v("注意点：query刷新不会丢失query里面的数据 params刷新 会 丢失 params里面的数据。")]),v._v(" "),_("h3",{attrs:{id:"_37-vue初始化页面闪动问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_37-vue初始化页面闪动问题"}},[v._v("#")]),v._v(" 37.vue初始化页面闪动问题")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("使用vue开发时，在vue初始化之前，由于 div 是不归 vue 管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于"),_("code",[v._v(v._s(v.message))]),v._v("的字样，虽然一般情况下这个时间很短暂，但是我们还是有必要让解决这个问题的。首先：在css里加上"),_("code",[v._v("[v-cloak] { display: none; }")]),v._v(" 。如果没有彻底解决问题，则在根元素加上 "),_("code",[v._v('style="display: none;" :style="{display: block }"')])]),v._v(" "),_("h3",{attrs:{id:"_38-vue更新数组时触发视图更新的方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_38-vue更新数组时触发视图更新的方法"}},[v._v("#")]),v._v(" 38.vue更新数组时触发视图更新的方法")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("push()")]),v._v("；"),_("code",[v._v("pop()")]),v._v("；"),_("code",[v._v("shift()")]),v._v("；"),_("code",[v._v("unshift()")]),v._v("；"),_("code",[v._v("splice()")]),v._v("；"),_("code",[v._v("sort()")]),v._v("；"),_("code",[v._v("reverse()")])]),v._v(" "),_("h3",{attrs:{id:"_39-vue常用的ui组件库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_39-vue常用的ui组件库"}},[v._v("#")]),v._v(" 39.vue常用的UI组件库")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("Mint UI，iview，VUX，element UI")]),v._v(" "),_("h3",{attrs:{id:"_40-vue修改打包后静态资源路径的修改"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_40-vue修改打包后静态资源路径的修改"}},[v._v("#")]),v._v(" 40.vue修改打包后静态资源路径的修改")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("cli2 版本：将"),_("code",[v._v("config/index.js")]),v._v(" 里的 "),_("code",[v._v("assetsPublicPath")]),v._v(" 的值改为"),_("code",[v._v("./")]),v._v(" 。")]),v._v(" "),_("div",{staticClass:"language-javascript line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[v._v("build"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v(" \n  "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// ... ")]),v._v("\n  assetsPublicPath"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v("  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" \n  "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// ...  ")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v(" \n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br")])]),_("p",[v._v("cli3版本：在根目录下新建"),_("code",[v._v("vue.config.js")]),v._v(" 文件，然后加上以下内容：（如果已经有此文件就直接修改）")]),v._v(" "),_("div",{staticClass:"language-javascript line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[v._v("module"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("exports "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v(" \n  publicPath"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 相对于 HTML 页面（目录相同）    ")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v(" \n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br")])]),_("h3",{attrs:{id:"_41-什么是-vue-生命周期-有什么作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_41-什么是-vue-生命周期-有什么作用"}},[v._v("#")]),v._v(" 41.什么是 vue 生命周期？有什么作用？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做 生命周期钩子 的函数，这给了用户在不同阶段添加自己的代码的机会。")]),v._v(" "),_("p",[v._v("（ps：生命周期钩子就是生命周期函数）例如，如果要通过某些插件操作DOM节点，如想在页面渲染完后弹出广告窗， 那我们最早可在"),_("code",[v._v("mounted")]),v._v(" 中进行。")]),v._v(" "),_("h3",{attrs:{id:"_42-第一次页面加载会触发哪几个钩子"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_42-第一次页面加载会触发哪几个钩子"}},[v._v("#")]),v._v(" 42.第一次页面加载会触发哪几个钩子？")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("beforeCreate")]),v._v("，"),_("code",[v._v("created")]),v._v("， "),_("code",[v._v("beforeMount")]),v._v("， "),_("code",[v._v("mounted")])]),v._v(" "),_("h3",{attrs:{id:"_43-简述每个周期具体适合哪些场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_43-简述每个周期具体适合哪些场景"}},[v._v("#")]),v._v(" 43.简述每个周期具体适合哪些场景")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("beforeCreate")]),v._v("： 在new一个vue实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建。在")]),v._v(" "),_("p",[_("code",[v._v("beforeCreate")]),v._v("生命周期执行的时候，"),_("code",[v._v("data")]),v._v("和"),_("code",[v._v("methods")]),v._v("中的数据都还没有初始化。不能在这个阶段使用"),_("code",[v._v("data")]),v._v("中的数据和"),_("code",[v._v("methods")]),v._v("中的方法")]),v._v(" "),_("p",[_("code",[v._v("create")]),v._v("："),_("code",[v._v("data")]),v._v("和"),_("code",[v._v("methods")]),v._v("都已经被初始化好了，如果要调用"),_("code",[v._v("methods")]),v._v("中的方法，或者操作"),_("code",[v._v("data")]),v._v(" 中的数据，最早可以在这个阶段中操作")]),v._v(" "),_("p",[_("code",[v._v("beforeMount")]),v._v("： 执行到这个钩子的时候，在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的")]),v._v(" "),_("p",[_("code",[v._v("mounted")]),v._v("： 执行到这个钩子的时候，就表示Vue实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。如果我们想要通过插件操作页面上的DOM节点，最早可以在和这个阶段中进行")]),v._v(" "),_("p",[_("code",[v._v("beforeUpdate")]),v._v("： 当执行这个钩子时，页面中的显示的数据还是旧的，"),_("code",[v._v("data")]),v._v("中的数据是更新后的， 页面还没有和最新的数据保持同步")]),v._v(" "),_("p",[_("code",[v._v("updated")]),v._v("： 页面显示的数据和"),_("code",[v._v("data")]),v._v("中的数据已经保持同步了，都是最新的")]),v._v(" "),_("p",[_("code",[v._v("beforeDestory")]),v._v("： Vue实例从运行阶段进入到了销毁阶段，这个时候上所有的"),_("code",[v._v("data")]),v._v(" 和 "),_("code",[v._v("methods")]),v._v(" ， 指令， 过滤器 ……都是处于可用状态。还没有真正被销毁\n"),_("code",[v._v("destroyed")]),v._v("： 这个时候上所有的 "),_("code",[v._v("data")]),v._v("和"),_("code",[v._v("methods")]),v._v(" ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了。")]),v._v(" "),_("h3",{attrs:{id:"_44-created和mounted的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_44-created和mounted的区别"}},[v._v("#")]),v._v(" 44.created和mounted的区别")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("created")]),v._v(":在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。")]),v._v(" "),_("p",[_("code",[v._v("mounted")]),v._v(":在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。")]),v._v(" "),_("h3",{attrs:{id:"_45-vue获取数据在哪个周期函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_45-vue获取数据在哪个周期函数"}},[v._v("#")]),v._v(" 45.vue获取数据在哪个周期函数")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("一般"),_("code",[v._v("created/beforeMount/mounted")]),v._v("皆可. 比如如果你要操作 DOM , 那肯定 "),_("code",[v._v("mounted")]),v._v("时候才能操作.")]),v._v(" "),_("h3",{attrs:{id:"_46-请详细说下你对vue生命周期的理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_46-请详细说下你对vue生命周期的理解"}},[v._v("#")]),v._v(" 46.请详细说下你对vue生命周期的理解？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。")]),v._v(" "),_("p",[v._v("创建前/后： 在beforeCreated阶段，vue实例的挂载元素 $el 和 数据对象 data 都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了， $el 还没有。")]),v._v(" "),_("p",[v._v("载入前/后： 在beforeMount阶段，vue实例的 $el 和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。")]),v._v(" "),_("p",[v._v("更新前/后： 当data变化时，会触发beforeUpdate和updated方法。")]),v._v(" "),_("p",[v._v("销毁前/后： 在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在。")]),v._v(" "),_("h3",{attrs:{id:"_47-mvvm-框架是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_47-mvvm-框架是什么"}},[v._v("#")]),v._v(" 47.mvvm 框架是什么？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("vue是实现了双向数据绑定的mvvm框架，当视图改变更新模型层，当模型层改变更新视图层。在vue中，使用了双向绑定技术，就是View的变化能实时让Model发生变化，而Model的变化也能实时更新到View。")]),v._v(" "),_("h3",{attrs:{id:"_48-vue-router-是什么-它有哪些组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_48-vue-router-是什么-它有哪些组件"}},[v._v("#")]),v._v(" 48.vue-router 是什么?它有哪些组件")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("vue用来写路由一个插件。"),_("code",[v._v("router-link")]),v._v("、"),_("code",[v._v("router-view")])]),v._v(" "),_("h3",{attrs:{id:"_49-active-class-是哪个组件的属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_49-active-class-是哪个组件的属性"}},[v._v("#")]),v._v(" 49.active-class 是哪个组件的属性？")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("vue-router")]),v._v("模块的"),_("code",[v._v("router-link")]),v._v("组件。"),_("code",[v._v("children")]),v._v("数组来定义子路由")]),v._v(" "),_("h3",{attrs:{id:"_50-怎么定义-vue-router-的动态路由-怎么获取传过来的值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_50-怎么定义-vue-router-的动态路由-怎么获取传过来的值"}},[v._v("#")]),v._v(" 50.怎么定义 vue-router 的动态路由? 怎么获取传过来的值？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("在router目录下的"),_("code",[v._v("index.js")]),v._v("文件中，对"),_("code",[v._v("path")]),v._v("属性加上"),_("code",[v._v("/:id")]),v._v("。使用router对象的"),_("code",[v._v("params.id")]),v._v("。")]),v._v(" "),_("h3",{attrs:{id:"_51-vue-router-有哪几种导航钩子"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_51-vue-router-有哪几种导航钩子"}},[v._v("#")]),v._v(" 51.vue-router 有哪几种导航钩子?")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("三种:")]),v._v(" "),_("p",[v._v("第一种： 是全局导航钩子："),_("code",[v._v("router.beforeEach(to,from,next)")]),v._v("，作用：跳转前进行判断拦截。")]),v._v(" "),_("p",[v._v("第二种： 组件内的钩子")]),v._v(" "),_("p",[v._v("第三种： 单独路由独享组件")]),v._v(" "),_("h3",{attrs:{id:"_52-route-和-router-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_52-route-和-router-的区别"}},[v._v("#")]),v._v(" 52. "),_("code",[v._v("$route")]),v._v(" 和 "),_("code",[v._v("$router")]),v._v(" 的区别")]),v._v(" "),_("hr"),v._v(" "),_("p",[_("code",[v._v("$router")]),v._v(" 是VueRouter的实例，在script标签中想要导航到不同的URL,使用"),_("code",[v._v("$router.push")]),v._v("方法。返回上一个历史history用"),_("code",[v._v("$router.to(-1)")])]),v._v(" "),_("p",[_("code",[v._v("$route")]),v._v(" 为当前router跳转对象。里面可以获取当前路由的"),_("code",[v._v("name,path,query,parmas")]),v._v("等。")]),v._v(" "),_("h3",{attrs:{id:"_53-vue-router的两种模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_53-vue-router的两种模式"}},[v._v("#")]),v._v(" 53.vue-router的两种模式")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("hash模式： 即地址栏 URL 中的 # 符号；")]),v._v(" "),_("p",[v._v("history模式： window.history对象打印出来可以看到里边提供的方法和记录长度。利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）。")]),v._v(" "),_("h3",{attrs:{id:"_54-vue-router实现路由懒加载-动态加载路由"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_54-vue-router实现路由懒加载-动态加载路由"}},[v._v("#")]),v._v(" 54.vue-router实现路由懒加载（ 动态加载路由 ）")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("三种方式")]),v._v(" "),_("p",[v._v("第一种： vue异步组件技术 ==== 异步加载，vue-router配置路由 , 使用vue的异步组件技术 , 可以实现按需加载 .但是,这种情况下一个组件生成一个js文件。")]),v._v(" "),_("p",[v._v("第二种： 路由懒加载(使用import)。")]),v._v(" "),_("p",[v._v("第三种： webpack提供的require.ensure()，vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。")]),v._v(" "),_("h3",{attrs:{id:"_55-vuex是什么-怎么使用-哪种功能场景使用它"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_55-vuex是什么-怎么使用-哪种功能场景使用它"}},[v._v("#")]),v._v(" 55.vuex是什么？怎么使用？哪种功能场景使用它？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("vue框架中状态管理。在main.js引入store，注入。")]),v._v(" "),_("p",[v._v("新建了一个目录store.js，….. export 。")]),v._v(" "),_("p",[v._v("场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车")]),v._v(" "),_("h3",{attrs:{id:"_56-vuex有哪几种属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_56-vuex有哪几种属性"}},[v._v("#")]),v._v(" 56.vuex有哪几种属性？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("有五种，分别是 State、 Getter、Mutation 、Action、 Module")]),v._v(" "),_("p",[v._v("state => 基本数据(数据源存放地)")]),v._v(" "),_("p",[v._v("getters => 从基本数据派生出来的数据")]),v._v(" "),_("p",[v._v("mutations => 提交更改数据的方法，同步！")]),v._v(" "),_("p",[v._v("actions => 像一个装饰器，包裹mutations，使之可以异步。")]),v._v(" "),_("p",[v._v("modules => 模块化Vuex")]),v._v(" "),_("h3",{attrs:{id:"_57-vue-js中ajax请求代码应该写在组件的methods中还是vuex的actions中"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_57-vue-js中ajax请求代码应该写在组件的methods中还是vuex的actions中"}},[v._v("#")]),v._v(" 57.Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。")]),v._v(" "),_("p",[v._v("如果被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用。")])])}),[],!1,null,null,null);e.default=a.exports}}]);