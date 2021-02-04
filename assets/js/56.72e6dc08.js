(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{566:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-1px的问题可以如何去解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1px的问题可以如何去解决"}},[t._v("#")]),t._v(" "),s("strong",[t._v("1. 1px的问题可以如何去解决")])]),t._v(" "),s("p",[t._v("出现1px的原因是设计图上的1px指的是设备像素，而不是CSS像素。DPR这个视网膜屏幕的概念最先是由苹果公司提出，计算公式：DPR = CSS像素 / 设备像素。")]),t._v(" "),s("p",[t._v("以IPhone 6为例，DPR = 750 / 375 = 2，在DPR为2的屏幕下，1px的物理像素会以2px渲染出来，这里给几个思路：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("我们可以用0.5px的CSS像素；")])]),t._v(" "),s("li",[s("p",[t._v("修改viewport")])]),t._v(" "),s("li",[s("p",[t._v("伪类+scale，先给伪类设200%的宽度，然后再transform：scaleY(0.5)")])])]),t._v(" "),s("h2",{attrs:{id:"_2-在浏览器输入一个url的整体过程是怎么样的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在浏览器输入一个url的整体过程是怎么样的"}},[t._v("#")]),t._v(" "),s("strong",[t._v("2. 在浏览器输入一个URL的整体过程是怎么样的")])]),t._v(" "),s("p",[t._v("这个问题一般都会问，因为每一个步都可以进行延伸，也不知道是哪个老哥想出来的鬼才面试题，下面是我的理解：")]),t._v(" "),s("ol",[s("li",[t._v("当我们在浏览器地址栏按下键盘的时候，浏览器就会启动一个算法去书签栏和历史记录中按照我们输入的字母进行筛选、展示一个我们可能会访问的URL")]),t._v(" "),s("li",[t._v("当我们选定了URL按下回车时，浏览器就会开始构建请求行，然后检测这个域名是否合法，如果合法就将此任务给网络请求线程")]),t._v(" "),s("li",[t._v("构建好请求行后就会去检测强缓存是否有效（这个步骤不会发送网络请求），如果无效，就会开始调用DNS协议进行域名解析，如果之前访问过这个URL，那么浏览器会把DNS解析后的IP地址保存下来，下次访问就直接命中（大概可以节约50~200ms），如果没有就需要去网络运营商或者DNS服务器上寻找")]),t._v(" "),s("li",[t._v("拿到DNS解析的IP地址后，就会构建HTTP请求，开始TCP三次握手建立稳定链接：客户端向服务器发送一个SYN（同步序列编码），服务端收到后返回一个新的SYN + ACK（在第一个SYN上做计算后生成的回复消息），客户端收到后回复一个ACK，三次握手建立完毕。为什么是三次？两次太少，四次太多")]),t._v(" "),s("li",[t._v("建立好三次握手后，TCP协议为了传输方便，会将HTTP报文切割并编码成一个个数据包，随后转交给网络层")]),t._v(" "),s("li",[t._v("网络层拿到这些数据包后，通过IP地址，配合ARP协议反查出MAC地址，开始传输数据 服务器收到这些数据后，将在TCP传输层协议中被分割的报文还原成完整的，这个时候一般会校验是否有权限、是否设置了缓存以及是否过期等。如果设置了协商缓存，那么会返回304状态码通知浏览器使用协商缓存（这里可以把协商缓存的字段也说下），否则开始响应。响应完毕后，服务器会判断Connection字段是否为keep-alive（在HTTP 1.1中是默认值），不是则断开")]),t._v(" "),s("li",[t._v("接下来就是浏览器开始解析请求到的文件，首先调用GUI线程并行解析HTML和CSS文件，对HTML文件使用标记化和建树算法，根据文件中设置的<!DOCTYPE>标准来生成DOM树，对CSS文件进行格式化和标准化生成CSSOM树，最后合并成合成树。注意HTML和CSS文件解析是互不影响的，但是会影响最后的合成树生成的速度，所以CSS文件中不要放@import，它总是在CSS文件解析完毕后再去加载对应的资源")]),t._v(" "),s("li",[t._v("另外GUI线程和JS线程是互斥的，当解析到HTML文件中的script标签时，就会挂起GUI线程，从而阻塞渲染，所以script标签中不要写async，它总是异步加载，然后立即执行，但你可以写defer 拿到合成树后，为了提高渲染效率，因为复杂的图层总是会由GUP单独绘制（GPU加速），不会影响其他的图层，所以开始创建图层树。普通文档流可以算是复杂图层，除此之外absolute、transform、opacity、canvas等元素都能形成复杂图层，所以说动画最好放在absolute等元素上、用transform代替left/top")]),t._v(" "),s("li",[t._v("浏览器将这些图层的绘制生成一个个绘制指令，然后交给合成池去进行绘制，生成图块和位图，最后显示出当前的页面")])]),t._v(" "),s("h2",{attrs:{id:"_3-浏览器存储cookie、localstorage、sessionstorage的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-浏览器存储cookie、localstorage、sessionstorage的区别"}},[t._v("#")]),t._v(" "),s("strong",[t._v("3. 浏览器存储Cookie、localStorage、sessionStorage的区别")])]),t._v(" "),s("h5",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),s("p",[t._v("由于HTTP是无状态的应用层协议，导致服务器无法记住客户端用户的操作，而Cookie主要用来记录用户的身份信息，它的大小只有4kb，不管服务端是否需要用到它，它总是被来回的传递（但不支持跨域），它和HTTP缓存一样，也可以通过设置max-age和expires字段决定过期时间。")]),t._v(" "),s("p",[t._v("在安全上，由于JS脚本可以读取Cookie，所以我们得通过Set-Cookie中设置httpOnly禁止JS读取，预防XSS攻击。除此之外，不应该用Cookie传递敏感信息。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("所以可以看出Cookie主要是用来维持状态，而不是做本地存储的\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h5",{attrs:{id:"localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[t._v("#")]),t._v(" localStorage")]),t._v(" "),s("p",[t._v("H5中新提出的Web存储技术，大小是5MB，远大于Cookie体积。由于保存在浏览器端，所以我们可以直接通过API调用：")]),t._v(" "),s("ul",[s("li",[t._v('存：localStorage.setItem("key","value")')]),t._v(" "),s("li",[t._v('取：localStorage.getItem("key")')])]),t._v(" "),s("p",[t._v("它的生命周期是永久，除非手动清除。应用场景上，我们可以用它来保存图片这种内容稳定的资源")]),t._v(" "),s("h5",{attrs:{id:"sessionstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[t._v("#")]),t._v(" sessionStorage")]),t._v(" "),s("p",[t._v("和localStorage一样，不仅都是H5提出的Web存储技术，而且用法和空间大小也极为相似，最大不同的地方有两点：")]),t._v(" "),s("ul",[s("li",[t._v("sessionStorage的生命周期是当前标签页关闭")]),t._v(" "),s("li",[t._v("无法跨标签页访问，也就是Tab")])]),t._v(" "),s("p",[t._v("相同点是它们三个都是存在客户端，且无法跨域")]),t._v(" "),s("h2",{attrs:{id:"_4-cookie如何进行设置的-js能改变哪些值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-cookie如何进行设置的-js能改变哪些值"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4. Cookie如何进行设置的，JS能改变哪些值")])]),t._v(" "),s("p",[t._v("要搞清楚这个问题，我们得先去看看Cookie它保存的有哪些值？")]),t._v(" "),s("h5",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" name")]),t._v(" "),s("p",[t._v("这个就是Cookie的name，因此同域名下的Cookie会被name值相同的覆盖掉")]),t._v(" "),s("h5",{attrs:{id:"value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[t._v("#")]),t._v(" value")]),t._v(" "),s("p",[t._v("因为Cookie是以key-value的形式存储的，所以这里的value就是对应的属性值，且必须经过URL编码")]),t._v(" "),s("h5",{attrs:{id:"domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[t._v("#")]),t._v(" domain")]),t._v(" "),s("p",[t._v("这个就指的是域名，这里有一个小知识点，只有域名完全相同才可以共用一个Cookie，比如，www.manice.com和play.mdnice.com是无法共用一个Cookie的，不过可以通过设置domain为顶级域名就可以公用了，具体的大家可以百度，一搜一大把")]),t._v(" "),s("h5",{attrs:{id:"httponly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[t._v("#")]),t._v(" HttpOnly")]),t._v(" "),s("p",[t._v("这个想必大家比较的熟悉，预防XSS攻击的，设置为true后，JS脚本就无法读取到Cookie里面的值")]),t._v(" "),s("p",[t._v("还有一些诸如path、secure等就不一一赘述了，所以JS脚本能读到Cookie，那就可以对其进行更改")]),t._v(" "),s("h2",{attrs:{id:"_5-描述一下浏览器缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-描述一下浏览器缓存"}},[t._v("#")]),t._v(" "),s("strong",[t._v("5. 描述一下浏览器缓存")])]),t._v(" "),s("p",[t._v("这个部分有很多内容可以说：")]),t._v(" "),s("h5",{attrs:{id:"强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),s("p",[t._v("不需要发送HTTP请求，只会构建请求行，根据HTTP协议的不同分为两种：")]),t._v(" "),s("p",[t._v("HTTP 1.0中的Expires，过期时间，潜在的问题是服务器时间和客户端时间不一致")]),t._v(" "),s("p",[t._v("HTTP 1.1中的Cache-Control，可以设置max-age来设置缓存生效时间，超过时间段就需要重新发起请求，关于Cache-Control还有很多属性：")]),t._v(" "),s("ul",[s("li",[t._v("max-age：资源最大有效时间")]),t._v(" "),s("li",[t._v("no-cache：不缓存，但实际上每次在请求静态资源的时候会向服务端发送一个过期认证请求，需要配合ETag或者last-modified")]),t._v(" "),s("li",[t._v("no-store：始终都去服务端请求最新资源，优先级最高")]),t._v(" "),s("li",[t._v("private/public：在请求资源的时候，可能会经过一些CND、Nginx中间代理服务器，如果设置了private，在max-age过期的情况下，即使中间服务器提示可以使用本地缓存资源，依然会向原服务器发送请求，而public相反")])]),t._v(" "),s("h5",{attrs:{id:"协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),s("p",[t._v("需要请求头中添加tag，服务器根据tag来判断是否使用缓存，所以被称为协商缓存。tag分为两种Last-Modified和ETag")]),t._v(" "),s("ul",[s("li",[t._v("Last-Modified")])]),t._v(" "),s("p",[t._v("最后修改时间。在第一次请求完毕后，服务器给浏览器返回的响应头里会带有Last-Modified，浏览器在下一次请求的时候会携带If-Modified-Since，表示服务器资源最后修改时间，最后进行相应的操作。否则返回304，但只能以秒为单位，所以不够精准(不在意这几秒的差距也OK)")]),t._v(" "),s("ul",[s("li",[t._v("ETag")])]),t._v(" "),s("p",[t._v("ETag是给当前的文件资源添加唯一的文件标识，只要内容有改动就值就会变。服务器会将其加在响应头中，浏览器会在下次请求的时候将其作为If-None-Match字段的内容发送给服务器。服务器根据值做不同的操作")]),t._v(" "),s("ul",[s("li",[t._v("两者对比：")])]),t._v(" "),s("p",[t._v("ETag优先级比Last-Modified高，因为它可以精确的判断是否需要更新。虽然性能不如Last-Modified")]),t._v(" "),s("h5",{attrs:{id:"缓存位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[t._v("#")]),t._v(" 缓存位置")]),t._v(" "),s("p",[t._v("强缓存和协商缓存的位置按优先级排列分别是：")]),t._v(" "),s("ul",[s("li",[t._v("Service Worker")])]),t._v(" "),s("p",[t._v("借鉴了Web Worker，让JS运行在主线程之外，脱离了浏览器窗体，所以也无法访问DOM，但可以帮助我们实现离线缓存、网络代理等功能")]),t._v(" "),s("ul",[s("li",[t._v("Memory Cache")])]),t._v(" "),s("p",[t._v("内存缓存。存取最快，但寿命很短")]),t._v(" "),s("ul",[s("li",[t._v("Disk Cache")])]),t._v(" "),s("p",[t._v("硬盘缓存。存取慢，寿命长，空间也大，如果缓存内容过大，那么就用这种方法，否则是内存缓存")]),t._v(" "),s("ul",[s("li",[t._v("Push Cache")])]),t._v(" "),s("p",[t._v("推送缓存。HTTP 2.0的内容，只存储在session中，当会话结束后就会被释放，而且在Chrome浏览器中只会保存5分钟")]),t._v(" "),s("ul",[s("li",[t._v("Cookie策略机制")])]),t._v(" "),s("p",[t._v("它是一个用于服务端和客户端之间的认证，当服务端返回了这个cookie，那么每次请求这个域名下资源的时候（即使是二级域名也会带），都会带上这个cookie，且如果不设置cookie的过期时间，只要关闭了浏览器，cookie就会失效，所以可以通过设置max-age")]),t._v(" "),s("p",[t._v("另外出于安全考量，我们需要给cookie设置一个httpOnly，设置secure cookie，只有在https服务下才会在application/cookie中写入cookie")]),t._v(" "),s("h5",{attrs:{id:"副作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#副作用"}},[t._v("#")]),t._v(" 副作用")]),t._v(" "),s("p",[t._v("有的时候缓存反而碍事，因为浏览器会对html文件进行一个自动的缓存，所以我们最好在进行联调的时候设置一个：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Cache-Control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("no-cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h5",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("首先会通过Cache-Control判断可使用强缓存")]),t._v(" "),s("p",[t._v("如果不可以则使用协商缓存，服务器通过判断请求头中的If-Modified-Since和If-None-Match判断资源是否更新？")]),t._v(" "),s("ul",[s("li",[t._v("更新：返回200以及最新内容")]),t._v(" "),s("li",[t._v("无更新：返回304以及使用缓存中的资源")])]),t._v(" "),s("h4",{attrs:{id:"较为稳妥的实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#较为稳妥的实践"}},[t._v("#")]),t._v(" 较为稳妥的实践")]),t._v(" "),s("p",[t._v("先说说强缓存和协商缓存的问题点：")]),t._v(" "),s("ul",[s("li",[t._v("强缓存：设置了cache-control字段，那么如果服务器的资源突然更新了，用户看到的内容就不是最新的了，当然你要是能接受那就OK")]),t._v(" "),s("li",[t._v("协商缓存：每次都会去询问一次服务器资源是否有更新，还是会造成一定的资源浪费，毕竟我们是追求极致的程序员")])]),t._v(" "),s("p",[t._v("那么最好的方案是配合Webpack：")]),t._v(" "),s("ol",[s("li",[t._v("HTML文件：使用协商缓存")]),t._v(" "),s("li",[t._v("CSS、JS和图片：使用强缓存，并且给文件名都附带上Hash值")])]),t._v(" "),s("h4",{attrs:{id:"contenthash的讲究"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contenthash的讲究"}},[t._v("#")]),t._v(" contentHash的讲究")]),t._v(" "),s("p",[t._v("当css文件hash改变的时候，js文件hash也会随之改变，所以我们可以在webpack打包的时候使用contentHash")]),t._v(" "),s("h2",{attrs:{id:"_6-http的状态码有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-http的状态码有哪些"}},[t._v("#")]),t._v(" "),s("strong",[t._v("6. HTTP的状态码有哪些")])]),t._v(" "),s("p",[t._v("常见的状态码:")]),t._v(" "),s("h5",{attrs:{id:"_1xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1xx"}},[t._v("#")]),t._v(" 1XX")]),t._v(" "),s("ul",[s("li",[t._v("100：等待后续处理，比如POST请求发送大实体数据时")])]),t._v(" "),s("h5",{attrs:{id:"_2xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2xx"}},[t._v("#")]),t._v(" 2XX")]),t._v(" "),s("ul",[s("li",[t._v("200：请求成功处理，且返回了请求的数据")]),t._v(" "),s("li",[t._v("204：请求成功处理，但没有返回任何实体部分")])]),t._v(" "),s("h5",{attrs:{id:"_3xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3xx"}},[t._v("#")]),t._v(" 3XX")]),t._v(" "),s("ul",[s("li",[t._v("301：永久重定向跳转（重定向可能会降低网页的打开速度）")]),t._v(" "),s("li",[t._v("302：临时重定向跳转（因为是临时跳转，所以也不会进行缓存）")]),t._v(" "),s("li",[t._v("304：没有资源更新，熟悉缓存的小伙伴应该知道这个状态码")])]),t._v(" "),s("h5",{attrs:{id:"_4xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4xx"}},[t._v("#")]),t._v(" 4XX")]),t._v(" "),s("ul",[s("li",[t._v("401：需要认证，前端鉴权中会用到这个状态码")]),t._v(" "),s("li",[t._v("403：对当前资源没有访问权限")]),t._v(" "),s("li",[t._v("404：没有请求的资源")])]),t._v(" "),s("h5",{attrs:{id:"_5xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5xx"}},[t._v("#")]),t._v(" 5XX")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("502：服务器正常，但发生未知错误。当用户账号或密码填错时，会出现这个状态码")])]),t._v(" "),s("li",[s("p",[t._v("503：服务器处于停机维护中，也就是没有开启")])])]),t._v(" "),s("h2",{attrs:{id:"_7-http的请求头包含什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-http的请求头包含什么"}},[t._v("#")]),t._v(" "),s("strong",[t._v("7. HTTP的请求头包含什么")])]),t._v(" "),s("p",[t._v("由于较多就讲几个常见的")]),t._v(" "),s("ul",[s("li",[t._v("Connection：表示是否需要长连接。在HTTP/1.1中默认为keep-alive，可以设置close字段关闭")]),t._v(" "),s("li",[t._v("Cache-Control：表示缓存机制，它有多个字段，如no-cache、no-store等等")]),t._v(" "),s("li",[t._v("Cookie：用来做状态存储，解决HTTP协议中无法保存用户状态的弊端，不管请求中是否需要，都会将保存在当前域下的所有cookie传递给服务器")]),t._v(" "),s("li",[t._v("还有协商缓存相关的，If-None-Match、If-Match、If-Modified-Since、If-Unmodified-Since")]),t._v(" "),s("li",[t._v("Referer：请求来源，可以用来预防CSRF攻击")]),t._v(" "),s("li",[t._v("Upgrade：指定某种协议，比如指定使用Websocket协议通信")])]),t._v(" "),s("h2",{attrs:{id:"_8-解决跨域的方法有哪几种"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-解决跨域的方法有哪几种"}},[t._v("#")]),t._v(" "),s("strong",[t._v("8. 解决跨域的方法有哪几种")])]),t._v(" "),s("p",[t._v("同源:")]),t._v(" "),s("p",[s("strong",[t._v("protocol（协议）、domain（域名）、port（端口）三者一致。")])]),t._v(" "),s("p",[t._v("以下协议、域名、端口一致。")]),t._v(" "),s("p",[t._v("http://www.example.com:80/a.js")]),t._v(" "),s("p",[t._v("http://www.example.com:80/b.js")]),t._v(" "),s("p",[t._v("解决方法:")]),t._v(" "),s("p",[t._v("方法比较多,不一一详解,常用的方案有CORS和Nginx反向代理")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/ky.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_9-描述一下cors的过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-描述一下cors的过程"}},[t._v("#")]),t._v(" "),s("strong",[t._v("9. 描述一下CORS的过程")])]),t._v(" "),s("p",[t._v("CORS这个是后端进行处理的，但前端也得懂点。CORS翻译过来就是"),s("code",[t._v("Cross-Origin-Resource-Shared")]),t._v("，即跨域资源共享，它分为简单请求和复杂请求，复杂请求又会多发一次预检请求，不过预检请求也不一定就是安全的，依然要注意"),s("code",[t._v("CSRF攻击")])]),t._v(" "),s("p",[t._v("服务端设置了"),s("code",[t._v("Access-Control-Allow-Origin")]),t._v("，也就是"),s("code",[t._v("资源控制允许源")]),t._v("（感觉翻译过来怪怪的），就会开启CORS，每次浏览器在发送请求的时候都会带上"),s("code",[t._v("Origin字段")]),t._v("，它由"),s("code",[t._v("协议、域名和端口号")]),t._v("组成，如：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("Origin: https://127.0.0.0:8080\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然后让服务端判断是否可以给Origin这个源返回数据。")]),t._v(" "),s("h2",{attrs:{id:"_10-描述一下jsonp的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-描述一下jsonp的原理"}},[t._v("#")]),t._v(" "),s("strong",[t._v("10. 描述一下JSONP的原理")])]),t._v(" "),s("p",[t._v("因为script中的src属性不受同源策略影响，所以我们可以先在全局定义一个回调函数，然后在Ajax请求时，将函数名作为参数传递，当服务器返回数据到客户端时就会之前我们之前定义好的回调函数，这里给一下代码：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收三个参数，要发起请求的URL、请求的参数、回调函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("jsonp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里是拼接参数的方法")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("createUrl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 申明一个字符串")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dataStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for...in循环遍历参数")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" k "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进行拼接")]),t._v("\n            dataStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后将回调函数也加上去")]),t._v("\n        dataStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("callback=")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("cb"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回最终的结果")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("dataStr"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回一个Promise对象")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在页面上创建script标签")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" script "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将script标签中的src属性设置为上面函数返回的参数")]),t._v("\n        script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将script标签插入到body中")]),t._v("\n        document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加回调")]),t._v("\n        window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功的回调，会将我们要请求的参数作为参数传入")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行完毕后移除script标签")]),t._v("\n            document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);