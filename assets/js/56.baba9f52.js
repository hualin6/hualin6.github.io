(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{574:function(v,_,s){"use strict";s.r(_);var l=s(3),i=Object(l.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"前端优化点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端优化点"}},[v._v("#")]),v._v(" 前端优化点")]),v._v(" "),s("blockquote",[s("p",[v._v("前端性能主要体现在 加载速度 和 浏览流畅度 两个方面，关乎着用户体验度是否满意，好的优化提升产品体验感")])]),v._v(" "),s("p",[v._v("我们可以下方向进行前端的优化:")]),v._v(" "),s("h2",{attrs:{id:"js优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js优化"}},[v._v("#")]),v._v(" JS优化")]),v._v(" "),s("ul",[s("li",[s("p",[v._v('遵循严格模式：“user strict"')])]),v._v(" "),s("li",[s("p",[v._v("将js脚本放在页面底部，加快渲染页面")])]),v._v(" "),s("li",[s("p",[v._v("将js脚本成组进行打包，减少请求")])]),v._v(" "),s("li",[s("p",[v._v("使用非阻塞方式下载js脚本")])]),v._v(" "),s("li",[s("p",[v._v("尽量使用局部变量来保存全局变量")])]),v._v(" "),s("li",[s("p",[v._v("尽量减少使用闭包")])]),v._v(" "),s("li",[s("p",[v._v("最小化重绘（repaint）和回流（reflow）")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("如何最小化重绘和回流：")]),v._v(" "),s("blockquote",[s("p",[v._v("1、需要对元素进行浮躁的操作是，可以先隐藏（display:none）,操作完后再显示")]),v._v(" "),s("p",[v._v("2、需要创建多个DOM节点时，使用DocumentFragment创建完后一次性加入document")]),v._v(" "),s("p",[v._v("3、尽量使用css属性简写，如：用border代替border-width，border-style，border-color；批量修改元素样式：elem.className和elem.style.cssText代替elem.style.xxx")])])])])])]),v._v(" "),s("h2",{attrs:{id:"css优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css优化"}},[v._v("#")]),v._v(" CSS优化")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("多个CSS合并， 尽量减少HTTP请求")])]),v._v(" "),s("li",[s("p",[v._v("将css文件放在页面最上面")])]),v._v(" "),s("li",[s("p",[v._v("移除空的css规则")])]),v._v(" "),s("li",[s("p",[v._v("选择器优化嵌套，尽量避免层级过深")])]),v._v(" "),s("li",[s("p",[v._v("充分利用css继承属性，减少代码量")])]),v._v(" "),s("li",[s("p",[v._v("抽象提取公共样式，减少代码量")])]),v._v(" "),s("li",[s("p",[v._v("属性值为0时，不加单位")])]),v._v(" "),s("li",[s("p",[v._v("属性值为小于1的小数时，省略小数点前面的0")])]),v._v(" "),s("li",[s("p",[v._v("css 雪碧图： CSS Sprites 其实就是把网页中一些背景图片整合到一张图片文件中，再利用 CSS 的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position 可以用数字能精确的定位出背景图片的位置。")]),v._v(" "),s("ul",[s("li",[v._v("CSS Sprites为一些大型的网站节约了带宽，让提高了用户的加载速度和用户体验，不需要加载更多的图片。")])])])]),v._v(" "),s("h2",{attrs:{id:"前端性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化"}},[v._v("#")]),v._v(" 前端性能优化")]),v._v(" "),s("ol",[s("li",[v._v("尽可能的减少 HTTP 的请求数")]),v._v(" "),s("li",[v._v("使用 CDN加速")]),v._v(" "),s("li",[v._v("添加 Expires 头(或者 Cache-control )")]),v._v(" "),s("li",[v._v("Gzip 组件")]),v._v(" "),s("li",[v._v("将 CSS 样式放在页面的上方")]),v._v(" "),s("li",[v._v("将脚本移动到底部（包括内联的）")]),v._v(" "),s("li",[v._v("避免使用 CSS 中的 Expressions")]),v._v(" "),s("li",[v._v("将 JavaScript 和 CSS 独立成外部文件")]),v._v(" "),s("li",[v._v("减少 DNS 查询")]),v._v(" "),s("li",[v._v("压缩 JavaScript 和 CSS (包括内联的)")]),v._v(" "),s("li",[v._v("避免重定向")]),v._v(" "),s("li",[v._v("移除重复的脚本")]),v._v(" "),s("li",[v._v("配置实体标签（ETags）")]),v._v(" "),s("li",[v._v("使 AJAX 缓存")]),v._v(" "),s("li",[v._v("图片懒加载")])]),v._v(" "),s("h2",{attrs:{id:"利用webpack来优化前端性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用webpack来优化前端性能"}},[v._v("#")]),v._v(" 利用webpack来优化前端性能")]),v._v(" "),s("ol",[s("li",[v._v("压缩代码。删除多余的代码、注释、简化代码的写法等等方式")]),v._v(" "),s("li",[v._v("利用 CDN 加速。在构建过程中，将引用的静态资源路径修改为 CDN 上对应的路径")]),v._v(" "),s("li",[v._v("删除死代码 (Tree Shaking）。将代码中永远不会走到的片段删除掉")]),v._v(" "),s("li",[v._v("优化图片，对于小图可以使用 base64 的方式写入文件中")]),v._v(" "),s("li",[v._v("按照路由拆分代码，实现按需加载，提取公共代码")]),v._v(" "),s("li",[v._v("给打包出来的文件名添加哈希，实现浏览器缓存文件")])]),v._v(" "),s("p",[v._v("其实这是一个大话题，可以下手的地方还有很多，各个细节，能做到以上优化也已经已经差不多了。")])])}),[],!1,null,null,null);_.default=i.exports}}]);