(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{547:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"html水平居中布局与滚动条跳动的千年难题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html水平居中布局与滚动条跳动的千年难题"}},[s._v("#")]),s._v(" HTML水平居中布局与滚动条跳动的千年难题")]),s._v(" "),a("p",[s._v("目前大多数的页面间布局都是水平居中布局，主体定个宽度，然后margin: 0 auto的节奏，这种布局有一个存在一个影响用户体验的隐患。现代浏览器滚动条默认是overflow:auto类型的，也就是如果尺寸不足一屏，没有滚动条；超出，出现滚动条。于是，问题来了：")]),s._v(" "),a("ol",[a("li",[s._v("信息流页面，如新浪微博，是从上往下push渲染的。开始只有头部一些信息加载，此时页面高度有限，没有滚动条；然后，更多内容显示，滚动条出现，占据可用宽度，margin: 0 auto主体元素自然会做偏移——跳动产生。")]),s._v(" "),a("li",[s._v("JS交互，本来默认页面高度不足一屏，结果点击了个“加载更多”，内容超过一屏，滚动条出现，页面主体就会左侧跳动。")]),s._v(" "),a("li",[s._v("结构类似几个页面通过头部的水平导航刷新切换，结果有的页面有滚动条，有的没有。造成的结果就是，导航尼玛怎么跳来跳去！")])]),s._v(" "),a("p",[s._v("当前优化这种体验问题，一般有两种解决方法：")]),s._v(" "),a("p",[s._v("1.高度尺寸不确定的，例如，新浪微博，使用：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow-y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" scroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.高度确定的，例如淘宝网首页。使用CSS把页面尺寸布局骨架搭好，再在里面吐数据。于是，要么没有滚动条，要么滚动条直接出现。不会出现跳动。")]),s._v(" "),a("p",[s._v("然而，后面的策略只适合一些特殊的定制性很强的页面。你说像知乎这样子，高度随内容而定的页面，显然就无法驾驭；而第1种方法overflow-y: scroll，在页面高度较小的时候，依然会保留一个丑陋的灰色的滚动栏，这其实又回到了IE当道的旧社会时代。")]),s._v(" "),a("p",[s._v("两全其美的方式去实现：")]),s._v(" "),a("h3",{attrs:{id:"css3计算calc和vw单位巧妙实现滚动条出现页面不跳动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3计算calc和vw单位巧妙实现滚动条出现页面不跳动"}},[s._v("#")]),s._v(" CSS3计算calc和vw单位巧妙实现滚动条出现页面不跳动")]),s._v(" "),a("p",[s._v("很简单，只要一行代码就搞定了：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".wrap-outer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("100vw - 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".wrap-outer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("100vw - 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("首先")]),s._v("，"),a("code",[s._v(".wrap-outer")]),s._v("指的是居中定宽主体的父级，如果没有，创建一个（使用主体也是可以实现类似效果，不过本着宽度分离原则，不推荐）；\n"),a("strong",[s._v("然后")]),s._v("，"),a("code",[s._v("calc")]),s._v("是CSS3中的计算，IE10+浏览器支持，IE9浏览器基本支持(不能用在"),a("code",[s._v("background-position")]),s._v("上)；\n"),a("strong",[s._v("最后")]),s._v("，"),a("code",[s._v("100vw")]),s._v("相对于浏览器的"),a("code",[s._v("window.innerWidth")]),s._v("，是浏览器的内部宽度，注意，"),a("strong",[s._v("滚动条宽度也计算在内")]),s._v("！而"),a("code",[s._v("100%")]),s._v("是可用宽度，是不含滚动条的宽度。\n"),a("strong",[s._v("于是")]),s._v("，"),a("code",[s._v("calc(100vw - 100%)")]),s._v("就是浏览器滚动条的宽度大小（如果有，如果没有滚动条则是"),a("code",[s._v("0")]),s._v("）！左右都有一个滚动条宽度（或都是"),a("code",[s._v("0")]),s._v("）被占用，主体内容就可以永远居中浏览器啦，从而没有任何跳动！")]),s._v(" "),a("p",[a("strong",[s._v("窄屏幕宽度下的处理")]),s._v("\n上面CSS还是有一点瑕疵的，浏览器宽度比较小的时候，左侧留的白明显与右边多，说不定会显得有点傻。此时，可能需要做点响应式处理会更好一点：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@media")]),s._v(" screen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1150px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".wrap-outer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("100vw - 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("经过一些列项目实践，关于浏览器出现滚动条和消失页面不滚动有了更加终极的解决方案，经过大型项目实践已经验证相当具有可行性")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("html")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow-y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" scroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(":root")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow-y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow-x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(":root body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100vw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);