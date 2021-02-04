(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{564:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_1-web前端项目的结构是怎样的-文件有哪些命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-web前端项目的结构是怎样的-文件有哪些命名规范"}},[t._v("#")]),t._v(" 1.web前端项目的结构是怎样的？文件有哪些命名规范？")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"项目结构规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目结构规范"}},[t._v("#")]),t._v(" 项目结构规范")]),t._v(" "),s("p",[t._v("页面文件：以项目名命名，例如："),s("code",[t._v("shop")])]),t._v(" "),s("p",[t._v("js文件：命名为js")]),t._v(" "),s("p",[t._v("css文件：命名为css")]),t._v(" "),s("p",[t._v("图片文件：命名为images")]),t._v(" "),s("p",[t._v("数据文件：命名为data")]),t._v(" "),s("p",[t._v("文件存储规范：按项目模块分类存储，例如：用户信息管理")]),t._v(" "),s("p",[t._v("页面文件存放： "),s("code",[t._v("shop/userinfo/userlist.html")])]),t._v(" "),s("p",[t._v("js文件："),s("code",[t._v("js/userinfo/userlist.js")])]),t._v(" "),s("p",[t._v("css样式："),s("code",[t._v("css/userinfo/userlist.css")])]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：图片的分类一般按照功能作用划分，比如： 小图标、动画图片")]),t._v(" "),s("p",[t._v("动画图片："),s("code",[t._v("images/gif/…")])]),t._v(" "),s("p",[t._v("图标库："),s("code",[t._v("images/flags/…")])]),t._v(" "),s("p",[t._v("项目文件命名规范")]),t._v(" "),s("p",[t._v("页面/js/css文件规范：项目名称-模块名称-页面名称，例如："),s("code",[t._v("shop-user-index.html")]),t._v("用户模块的首页。")]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：js一般会包含 公共js 习惯命名"),s("code",[t._v("commo.js")]),t._v("；css样式会包含公共css，习惯命名为 "),s("code",[t._v("common.css")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_2-谈谈浏览器的兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-谈谈浏览器的兼容性"}},[t._v("#")]),t._v(" 2.谈谈浏览器的兼容性")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("这个问题是非常抽象的，越是抽象的问题越能表现出我们的表达能力，而面试官就喜欢根据你的回答来追问，不断地打断你的思路，这个时候不要慌，一定要坚信自己。\n"),s("strong",[t._v("回答思路")])]),t._v(" "),s("p",[t._v("我们在开发的时候会明确项目要兼容哪些浏览器的最低版本，我之前的项目要求兼容IE8.0以上的版本，Chrome 48以上，FireFox 44以上。有了这些最基本的要求，在开发中就是要考虑到CSS样式和JavaScript的在这些浏览器的兼容性了")]),t._v(" "),s("h4",{attrs:{id:"html部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html部分"}},[t._v("#")]),t._v(" "),s("strong",[t._v("html部分")])]),t._v(" "),s("h5",{attrs:{id:"_1-h5新标签在ie9以下的浏览器识别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-h5新标签在ie9以下的浏览器识别"}},[t._v("#")]),t._v(" 1.H5新标签在IE9以下的浏览器识别")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!--[if lt IE 9]>\n <script type="text/javascript" src="js/html5shiv.js"><\/script>\n <![endif]--\x3e')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h5",{attrs:{id:"_2-ul标签内外边距问题ul标签在ie6-ie7中-有个默认的外边距-但是在ie8以上及其他浏览器中有个默认的内边距。解决方法-统一设置ul的内外边距为0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-ul标签内外边距问题ul标签在ie6-ie7中-有个默认的外边距-但是在ie8以上及其他浏览器中有个默认的内边距。解决方法-统一设置ul的内外边距为0"}},[t._v("#")]),t._v(" 2.ul标签内外边距问题ul标签在IE6\\IE7中，有个默认的外边距，但是在IE8以上及其他浏览器中有个默认的内边距。解决方法：统一设置ul的内外边距为0")]),t._v(" "),s("h4",{attrs:{id:"css样式的兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css样式的兼容性"}},[t._v("#")]),t._v(" CSS样式的兼容性")]),t._v(" "),s("p",[t._v("1.css的hack问题：主要针对IE的不同版本，不同的浏览器的写法不同"),s("br"),t._v("\nIE的条件注释hack："),s("br"),t._v(" "),s("br")]),t._v(" "),s("p",[t._v("2.IE6双边距问题：IE6在浮动后，又有横向的margin，此时，该元素的外边距是其值的2倍"),s("br"),t._v("\n解决办法：display:block;")]),t._v(" "),s("p",[t._v("3.IE6下图片的下方有空隙"),s("br"),t._v("\n解决方法：给img设置"),s("code",[t._v("display:block")]),t._v(";")]),t._v(" "),s("p",[t._v("4.IE6下两个float之间会有个3px的bug"),s("br"),t._v("\n解决办法：给右边的元素也设置float:left;")]),t._v(" "),s("p",[t._v("5.IE6下没有"),s("code",[t._v("min-width")]),t._v("的概念，其默认的"),s("code",[t._v("width")]),t._v("就是"),s("code",[t._v("min-width")])]),t._v(" "),s("p",[t._v("6.IE6下在使用"),s("code",[t._v("margin:0 auto")]),t._v(";无法使其居中"),s("br"),t._v("\n解决办法：为其父容器设置"),s("code",[t._v("text-align:center")]),t._v(";\n7.被点击过后的超链接不再具有"),s("code",[t._v("hover")]),t._v("和"),s("code",[t._v("active")]),t._v("属性"),s("br"),t._v("\n解决办法:按lvha的顺序书写css样式，\n"),s("code",[t._v('":link": a标签还未被访问的状态；')]),t._v(" "),s("code",[t._v('":visited": a标签已被访问过的状态；')]),t._v(" "),s("code",[t._v('":hover": 鼠标悬停在a标签上的状态；')]),t._v(" "),s("code",[t._v('":active": a标签被鼠标按着时的状态；')]),t._v("\n8.在使用绝对定位或者相对定位后，IE中设置"),s("code",[t._v("z-index")]),t._v("失效，原因是因为其元素依赖于父元素的"),s("code",[t._v("z-index")]),t._v("，但是父元素默认为0， 子高父低，所以不会改变显示的顺序")]),t._v(" "),s("p",[t._v("9.IE6下无法设置1px的行高，原因是由其默认行高引起的"),s("br"),t._v("\n解决办法：为期设置"),s("code",[t._v("overflow:hidden")]),t._v(";或者"),s("code",[t._v("line-height:1px")]),t._v(";")]),t._v(" "),s("h4",{attrs:{id:"javascript的兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript的兼容性"}},[t._v("#")]),t._v(" JavaScript的兼容性")]),t._v(" "),s("p",[t._v("1.标准的事件绑定方法函数为"),s("code",[t._v("addEventListener")]),t._v("，但IE下是"),s("code",[t._v("attachEvent")]),t._v("；\n2.事件的捕获方式不一致，标准浏览器是由外至内，而IE是由内到外，但是最后的结果是将IE的标准定为标准\n3."),s("code",[t._v("window.event")]),t._v("获取的。并且获取目标元素的方法也不同，标准浏览器是"),s("code",[t._v("event.target")]),t._v("，而IE下是"),s("code",[t._v("event.srcElement")]),t._v("\n4.在低版本的IE中获取的日期处理函数的值不是与1900的差值，但是在高版本的IE中和标准浏览器保持了一致，获取的值也是与1900的差值。"),s("br"),t._v("\n比如："),s("code",[t._v("var year= new Date().getYear()")]),t._v(";\n5."),s("code",[t._v("ajax")]),t._v("的实现方式不同，这个我所理解的是获取"),s("code",[t._v("XMLHttpReques")]),t._v("的不同，IE下是"),s("code",[t._v("activeXObject")]),t._v("\n6.IE中不能操作tr的"),s("code",[t._v("innerHtml")]),t._v(".获得DOM节点的父节点、子节点的方式不同\n其他浏览器："),s("code",[t._v("parentNode parentNode.childNodes")]),s("br"),t._v("\nIE："),s("code",[t._v("parentElement parentElement.children")])]),t._v(" "),s("h3",{attrs:{id:"_3-页面优化有哪些方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-页面优化有哪些方法"}},[t._v("#")]),t._v(" 3.页面优化有哪些方法")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("页面优化的方法非常多，最好能够对这些优化方案进行分类，这些方案最好能够结合实际开发遇到的问题来表述。")]),t._v(" "),s("p",[t._v("优化的方案")]),t._v(" "),s("h4",{attrs:{id:"减少操作量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少操作量"}},[t._v("#")]),t._v(" 减少操作量")]),t._v(" "),s("ul",[s("li",[t._v("尽量减少 HTTP 请求\n"),s("ol",[s("li",[t._v("合并文件，比如把多个 CSS 文件合成一个；")]),t._v(" "),s("li",[t._v("CSS Sprites 利用 CSS background 相关元素进行背景图绝对定位；")])])]),t._v(" "),s("li",[t._v("不要在 HTML 中使用缩放图片\n缩放图片并没有减少图片的容量，只是控制了图片的大小。")]),t._v(" "),s("li",[t._v("Image压缩\n使用工具对图片进行压缩，保证质量的同时减少了图片的大小。")]),t._v(" "),s("li",[t._v("减少对DOM的操作\n减少对DOM的操作，减少页面的重绘。")])]),t._v(" "),s("h4",{attrs:{id:"提前做加载操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提前做加载操作"}},[t._v("#")]),t._v(" 提前做加载操作")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对域名进行预解析\n例如京东的做法")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//misc.360buyimg.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("  \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("预载入组件或延迟载入组件")])]),t._v(" "),s("li",[s("p",[t._v("把 CSS 放到代码页上端\nCSS 放到最顶部，浏览器能够有针对性的对 HTML 页面从顶到下进行解析和渲染。")])]),t._v(" "),s("li",[s("p",[t._v("使用 new Image对象，对图片进行缓存")])])]),t._v(" "),s("h4",{attrs:{id:"提升并行加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提升并行加载"}},[t._v("#")]),t._v(" 提升并行加载")]),t._v(" "),s("p",[t._v("切分组件到多个域 ，提升服务器的响应能力")]),t._v(" "),s("h4",{attrs:{id:"javascript和css优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript和css优化"}},[t._v("#")]),t._v(" JavaScript和CSS优化")]),t._v(" "),s("ul",[s("li",[t._v("从页面中剥离 JavaScript 与 CSS\n剥离后，能够有针对性的对其进行单独的处理策略，比如压缩或者缓存策略。")]),t._v(" "),s("li",[t._v("精简 JavaScript 与 CSS\n使用工具压缩JavaScript和CSS文件")]),t._v(" "),s("li",[t._v("脚本放到 HTML 代码页底部\n减少对页面的阻塞。")])]),t._v(" "),s("h4",{attrs:{id:"异步加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步加载"}},[t._v("#")]),t._v(" 异步加载")]),t._v(" "),s("p",[t._v("使用Ajax实现异步加载，例如，滚动页面加载后面的内容，这种也比较常见。")]),t._v(" "),s("h3",{attrs:{id:"_4-页面渲染原理是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-页面渲染原理是什么"}},[t._v("#")]),t._v(" 4.页面渲染原理是什么？")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("了解一下浏览器的渲染过程是怎样的，对于页面性能的提升是有帮助的。")]),t._v(" "),s("h4",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("渲染引擎是干什么的\n渲染引擎可以显示html、xml文档及图片，它也可以借助插件（一种浏览器扩展）显示其他类型数据，例如使用PDF阅读器插件可以显示PDF格式。")]),t._v(" "),s("h4",{attrs:{id:"渲染引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎"}},[t._v("#")]),t._v(" 渲染引擎")]),t._v(" "),s("p",[t._v("不同的浏览器有不同的渲染引擎，对于渲染引擎的使用总结如下：\nTrident(MSHTML)内核：IE,MaxThon,TT,The World,360,搜狗浏览器等\nGecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等\nPresto内核：Opera7及以上\nWebkit内核：Safari,Chrome等")]),t._v(" "),s("p",[t._v("解析html以构建dom树 -> 构建render树 -> 布局render树 -> 绘制render树\n"),s("strong",[t._v("步骤详细解释")]),t._v("\n第一步：渲染引擎开始解析html，根据标签构建DOM节点\n第二步：根据css样式构建渲染树，包括元素的大小、颜色，隐藏的元素不会被构建到该树中。\n第三步：根据css样式构建布局树，主要是确定元素要显示的位置。\n第四步：根据前面的信息，绘制渲染树。")]),t._v(" "),s("h3",{attrs:{id:"_5-什么是响应式开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-什么是响应式开发"}},[t._v("#")]),t._v(" 5.什么是响应式开发？")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("响应式开发是前端开发工作比较常见的工作内容，随着移动互联网的发展，移动端设计越来越重要，很多项目都是移动端项目先开发，而后是PC端的开发，为了降低运营成本和开发成本，同一个网站要能兼容PC端和移动端显示呼之欲出，进而响应式开发成了前端开发人员必备的技能，所以响应式开发的技术必须掌握。")]),t._v(" "),s("h4",{attrs:{id:"什么是响应式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是响应式"}},[t._v("#")]),t._v(" 什么是响应式")]),t._v(" "),s("p",[t._v("顾名思义，同一个网站兼容不同的大小的设备。如PC端、移动端（平板、横屏、竖排）的显示风格。")]),t._v(" "),s("h4",{attrs:{id:"需要用到的技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需要用到的技术"}},[t._v("#")]),t._v(" 需要用到的技术")]),t._v(" "),s("ol",[s("li",[t._v("Media Query（媒体查询）")])]),t._v(" "),s("blockquote",[s("p",[t._v("用于查询设备是否符合某一特定条件，这些特定条件包括屏幕尺寸，是否可触摸，屏幕精度，横屏竖屏等信息。")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("使用em或rem做尺寸单位")])]),t._v(" "),s("blockquote",[s("p",[t._v("用于文字大小的响应和弹性布局。")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("禁止页面缩放")])]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("屏幕尺寸响应")])]),t._v(" "),s("blockquote",[s("p",[t._v("a)  固定布局：页面居中，两边留白，他能适应大于某个值一定范围的宽度，但是如果太宽就会有很多留白，太窄会出现滚动条，在PC页面上很常见。")]),t._v(" "),s("p",[t._v("b)  流动布局：屏幕尺寸在一定范围内变化时，不改变模块布局，只改变模块尺寸比例。比固定布局更具响应能力，两边不留白，但是也只能适应有限的宽度变化范围，否则模块会被挤（拉）得不成样子。")]),t._v(" "),s("p",[t._v("c)  自定义布局：上面几种布局方式都无法跨域大尺寸变化，所以适当时候我们需要改变模块的位置排列或者隐藏一些次要元素。")]),t._v(" "),s("p",[t._v("d)  栅格布局：这种布局方式使得模块之间非常容易对齐，易于模块位置的改变用于辅助自定义布局。")])]),t._v(" "),s("h4",{attrs:{id:"响应式设计注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式设计注意事项"}},[t._v("#")]),t._v(" 响应式设计注意事项")]),t._v(" "),s("blockquote",[s("p",[t._v("1.宽度不固定，可以使用百分比")]),t._v(" "),s("p",[t._v("#head{width:100%;}")]),t._v(" "),s("p",[t._v("#content{width:50%;}")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("图片处理")])]),t._v(" "),s("p",[t._v("图片的宽度和高度设置等比缩放，可以设置图片的width为百分比，"),s("code",[t._v("height:auto")]),t._v(";")]),t._v(" "),s("p",[t._v("背景图片可以使用"),s("code",[t._v("background-size")]),t._v(" 指定背景图片的大小。")])]),t._v(" "),s("h3",{attrs:{id:"_6-html5有哪些新特性、移除了那些元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-html5有哪些新特性、移除了那些元素"}},[t._v("#")]),t._v(" 6.html5有哪些新特性、移除了那些元素？")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("题目涉及到范围非常的大，如果要面面俱到显然半天都答不完，可以先罗列出H5的一些新特性，不要回答那么具体，等面试官提具体的问题，所以在面试之前也要把这里的技术过一遍，至少每个技术也要做个小程序出来体验一下。")]),t._v(" "),s("h4",{attrs:{id:"h5新特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#h5新特性"}},[t._v("#")]),t._v(" H5新特性")]),t._v(" "),s("blockquote",[s("p",[t._v("增强了图形渲染、影音、数据存储、多任务处理等处理能力主要表现在")])]),t._v(" "),s("h4",{attrs:{id:"绘画-canvas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绘画-canvas"}},[t._v("#")]),t._v(" 绘画 "),s("code",[t._v("canvas")]),t._v(";")]),t._v(" "),s("blockquote",[s("p",[t._v("类似windows自带的画图板，可绘制线、框、路径、图……，"),s("code",[t._v("InternetExplorer 9、Firefox、Opera、Chrome")]),t._v(" 以及"),s("code",[t._v("Safari")]),t._v("支持"),s("code",[t._v("<canvas>")]),t._v("及其属性和方法。")]),t._v(" "),s("p",[t._v("画图需要的要素")]),t._v(" "),s("p",[t._v("a)  笔，用笔可以画线、圆、矩形、文本等")]),t._v(" "),s("p",[t._v("b)  颜色")]),t._v(" "),s("p",[t._v("c)  画板")]),t._v(" "),s("p",[t._v("由于画布案例比较多，代码比较复杂，可以在w3cschool上查看相关教程")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("本地离线存储"),s("code",[t._v("localStorage")])])]),t._v(" "),s("p",[t._v("长期存储数据，浏览器关闭后数据不丢失;")]),t._v(" "),s("p",[t._v("1.特点")]),t._v(" "),s("p",[t._v("数据永久存储，没有时间限制；大小限制5M(够用了)；只存储字符串。")]),t._v(" "),s("p",[t._v("2.数据存取方式")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//设置a为"3"  ')]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sfsf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//设置a为"sfsf"，覆盖上面的值  ')]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isaac"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//设置b为"isaac"  ')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取a的值  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取a的值  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取b的值  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取第一个key的内容  ")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//清除c的值  ")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//清除所有的数据")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("推荐使用：")]),t._v(" "),s("p",[s("code",[t._v("getItem()")])]),t._v(" "),s("p",[s("code",[t._v("setItem()")])]),t._v(" "),s("p",[s("code",[t._v("removeItem()")])]),t._v(" "),s("p",[t._v("3.事件监听")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"storage"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("handle_storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attachEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//兼容IE  ")]),t._v("\n window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onstorage"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("handle_storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_storage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("blockquote",[s("p",[t._v("对象e为"),s("code",[t._v("localStorage")]),t._v("对象，Chrome、Firefox支持差，IE支持较好。")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[s("code",[t._v("sessionStorage")]),t._v("的数据在浏览器关闭后自动删除;操作参考"),s("code",[t._v("localStorage")])])]),t._v(" "),s("li",[s("p",[t._v("用于媒介回放的"),s("code",[t._v("video")]),t._v("和 "),s("code",[t._v("audio")]),t._v("元素;")])]),t._v(" "),s("li",[s("p",[t._v("语意化更好的内容元素，比如"),s("code",[t._v("article、footer、header、nav、section")]),t._v(";")])]),t._v(" "),s("li",[s("p",[t._v("表单控件，"),s("code",[t._v("calendar、date、time、email、url、search")]),t._v(";")])]),t._v(" "),s("li",[s("p",[t._v("新的技术"),s("code",[t._v("webworker")]),t._v("(专用线程)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("websocket")]),t._v("通信")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Geolocation")]),t._v(" 地理定位")])])]),t._v(" "),s("h4",{attrs:{id:"移除的元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除的元素"}},[t._v("#")]),t._v(" 移除的元素")]),t._v(" "),s("blockquote",[s("p",[t._v("纯表现的元素")])]),t._v(" "),s("blockquote",[s("blockquote",[s("ul",[s("li",[s("code",[t._v("<basefont>")]),t._v(" 默认字体，不设置字体，以此渲染")]),t._v(" "),s("li",[s("code",[t._v("<font>")]),t._v("字体标签")]),t._v(" "),s("li",[s("code",[t._v("<center>")]),t._v("水平居中")]),t._v(" "),s("li",[s("code",[t._v("<u>")]),t._v(" 下划线")]),t._v(" "),s("li",[s("code",[t._v("<big>")]),t._v(" 大字体")]),t._v(" "),s("li",[s("code",[t._v("<strike>")]),t._v("中横线")]),t._v(" "),s("li",[s("code",[t._v("<tt>")]),t._v("文本等宽")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("框架集")])]),t._v(" "),s("blockquote",[s("blockquote",[s("ul",[s("li",[s("code",[t._v("<frameset>")])]),t._v(" "),s("li",[s("code",[t._v("<noframes>")])]),t._v(" "),s("li",[s("code",[t._v("<frame>")])])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);