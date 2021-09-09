(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{613:function(t,r,a){"use strict";a.r(r);var s=a(3),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iis10-前端服务器-设置代理实现跨域请求后端接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iis10-前端服务器-设置代理实现跨域请求后端接口"}},[t._v("#")]),t._v(" IIS10 前端服务器，设置代理实现跨域请求后端接口")]),t._v(" "),a("p",[t._v("前端服务器，大多数使用Nginx，但也有使用IIS的需求，这里就写一下使用IIS作为web服务器时，项目有多个后端接口地址，并非同IIS在一台服务器上，反向代理到后端接口地址实现请求。")]),t._v(" "),a("h3",{attrs:{id:"需求示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求示例"}},[t._v("#")]),t._v(" 需求示例：")]),t._v(" "),a("p",[t._v("访问 http://localhost:8001/api/list ，匹配 "),a("code",[t._v("/api/list")]),t._v(" ，将带有"),a("code",[t._v("/api/list")]),t._v("的地址代理到 http://localhost:8002/api/list")]),t._v(" "),a("div",{staticClass:"language-apl line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-apl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 原请求地址")]),t._v("\nhttp"),a("span",{pre:!0,attrs:{class:"token dfn builtin"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[t._v("/")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token dfn builtin"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8001")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[t._v("/")]),t._v("list  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实际访问地址")]),t._v("\nhttp"),a("span",{pre:!0,attrs:{class:"token dfn builtin"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[t._v("/")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token dfn builtin"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8002")]),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token monadic-operator operator"}},[t._v("/")]),t._v("list\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"一、安装arr-application-request-routing-、url-rewriter组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装arr-application-request-routing-、url-rewriter组件"}},[t._v("#")]),t._v(" 一、安装ARR（Application Request Routing）、URL Rewriter组件")]),t._v(" "),a("p",[t._v("访问 IIS 官方网站："),a("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fwww.iis.net%2Fdownloads%2Fmicrosoft%2Fapplication-request-routing",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.iis.net/downloads/microsoft/application-request-routing"),a("OutboundLink")],1),t._v(" ，下载包安装或者通过 IIS管理器的Web 平台安装程序（Web Platform Installer）：直接点击 “"),a("strong",[t._v("Install this extension")]),t._v("” 按钮即可。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hOMlT0",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hOMlT0.png",alt:"hOMlT0.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hOM8YT",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hOM8YT.png",alt:"hOM8YT.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hOMmlQ",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hOMmlQ.png",alt:"hOMmlQ.png"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"二、配置arr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、配置arr"}},[t._v("#")]),t._v(" 二、配置ARR")]),t._v(" "),a("p",[t._v("安装成功后，回到IIS管理器主页，双击"),a("code",[t._v("Application Request Routing Cache")]),t._v(" 进入配置")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hOKgZq",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hOKgZq.png",alt:"hOKgZq.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("点击右侧服务器代理设置")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hOKLo6",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hOKLo6.png",alt:"hOKLo6.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("勾选启用代理，然后应用")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hOKXFK",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hOKXFK.png",alt:"hOKXFK.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("配置 URL重写，对URL进行过滤，将不同的访问请求（根据URL（DNS中的配置）进行过滤）定向到相应的站点")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hOMbcQ",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hOMbcQ.png",alt:"hOMbcQ.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("进入 URL 重写(URL Rewrite)，点击“"),a("strong",[t._v("添加规则")]),t._v("”。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hOQu9O",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hOQu9O.png",alt:"hOQu9O.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("进入添加规则弹窗，点击“"),a("strong",[t._v("空白规则")]),t._v("”。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hOQt4f",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hOQt4f.png",alt:"hOQt4f.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("配置规则：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 模式(T)\n^(.*?)/?api/(.*)$\n\n# 重写 URL(L)\nhttp://localhost:8002/{R:0}  \n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hOllGT",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hOllGT.png",alt:"hOllGT.png"}}),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("该设置为将 8001 端口的前端服务器，访问路径中包括 "),a("strong",[t._v("/api/")]),t._v(" 的请求，代理到 8002 端口的后端服务器。")]),t._v(" "),a("p",[t._v("实现效果：前端请求 http://localhost:8001/api/list ，实际请求为http://localhost:8002/api/list")])]),t._v(" "),a("p",[t._v("至此代理配置完成！")]),t._v(" "),a("h2",{attrs:{id:"顺带解决一下刷新后404问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顺带解决一下刷新后404问题"}},[t._v("#")]),t._v(" 顺带解决一下刷新后404问题")]),t._v(" "),a("p",[t._v("主要也是添加一个规则，在进入URL重写界面，点击添加规则，按下面步骤操作及填写即可。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hO1N6g",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hO1N6g.png",alt:"hO1N6g.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/hO12X4",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/09/09/hO12X4.png",alt:"hO12X4.png"}}),a("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=e.exports}}]);