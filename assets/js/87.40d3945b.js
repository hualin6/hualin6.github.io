(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{607:function(e,t,n){"use strict";n.r(t);var i=n(3),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"nginx优化之gzip压缩提升网站速度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx优化之gzip压缩提升网站速度"}},[e._v("#")]),e._v(" Nginx优化之gzip压缩提升网站速度")]),e._v(" "),n("p",[e._v("gzip配置的常用参数")]),e._v(" "),n("p",[e._v("gzip on|off;  #是否开启gzip")]),e._v(" "),n("p",[e._v("gzip_buffers 32 4K| 16 8K #缓冲(压缩在内存中缓冲几块? 每块多大?)")]),e._v(" "),n("p",[e._v("gzip_comp_level [1-9] #推荐6 压缩级别(级别越高,压的越小,越浪费CPU计算资源)")]),e._v(" "),n("p",[e._v("gzip_disable #正则匹配UA 什么样的Uri不进行gzip")]),e._v(" "),n("p",[e._v("gzip_min_length 200 # 开始压缩的最小长度(再小就不要压缩了,意义不在)")]),e._v(" "),n("p",[e._v("gzip_http_version 1.0|1.1 # 开始压缩的http协议版本(可以不设置,目前几乎全是1.1协议)")]),e._v(" "),n("p",[e._v("gzip_proxied          # 设置请求者代理服务器,该如何缓存内容")]),e._v(" "),n("p",[e._v("gzip_types text/plain application/xml # 对哪些类型的文件用压缩 如txt,xml,html ,css")]),e._v(" "),n("p",[e._v("gzip_vary on|off  # 是否传输gzip压缩标志")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\tgzip on;\n\tgzip_buffers 32 4K;\n\tgzip_comp_level 6;\n  gzip_min_length 1K;\n\tgzip_types text/plain application/x-javascript text/css text/javascript application/x-httpd-php image/jpeg image/gif image/png;\n  gzip_disable "MSIE [1-6]\\."; #配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）\n  gzip_vary on;\n\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("h1",{attrs:{id:"nginx下gzip配置参数详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx下gzip配置参数详解"}},[e._v("#")]),e._v(" nginx下gzip配置参数详解")]),e._v(" "),n("p",[n("strong",[e._v("gzip")])]),e._v(" "),n("p",[e._v("语法: gzip on|off\n默认值: gzip off\n作用域: http, server, location, if (x) location\n开启或者关闭gzip模块")]),e._v(" "),n("p",[n("strong",[e._v("gzip_buffers")])]),e._v(" "),n("p",[e._v("语法: gzip_buffers number size\n默认值: gzip_buffers 4 4k/8k\n作用域: http, server, location\n设置系统获取几个单位的缓存用于存储gzip的压缩结果数据流。 例如 4 4k 代表以4k为单位，按照原始数据大小以4k为单位的4倍申请内存。 4 8k 代表以8k为单位，按照原始数据大小以8k为单位的4倍申请内存。")]),e._v(" "),n("p",[e._v("如果没有设置，默认值是申请跟原始数据相同大小的内存空间去存储gzip压缩结果。")]),e._v(" "),n("p",[n("strong",[e._v("gzip_comp_level")])]),e._v(" "),n("p",[e._v("语法: gzip_comp_level 1..9\n默认值: gzip_comp_level 1\n作用域: http, server, location\ngzip压缩比，1 压缩比最小处理速度最快，9 压缩比最大但处理最慢（传输快但比较消耗cpu）。")]),e._v(" "),n("p",[n("strong",[e._v("gzip_min_length")])]),e._v(" "),n("p",[e._v("语法: gzip_min_length length\n默认值: gzip_min_length 0\n作用域: http, server, location\n设置允许压缩的页面最小字节数，页面字节数从header头中的Content-Length中进行获取。\n默认值是0，不管页面多大都压缩。\n建议设置成大于1k的字节数，小于1k可能会越压越大。 即: gzip_min_length 1024")]),e._v(" "),n("p",[n("strong",[e._v("gzip_http_version")])]),e._v(" "),n("p",[e._v("语法: gzip_http_version 1.0|1.1\n默认值: gzip_http_version 1.1\n作用域: http, server, location\n识别http的协议版本。由于早期的一些浏览器或者http客户端，可能不支持gzip自解压，用户就会看到乱码，所以做一些判断还是有必要的。 注：21世纪都来了，现在除了类似于百度的蜘蛛之类的东西不支持自解压，99.99%的浏览器基本上都支持gzip解压了，所以可以不用设这个值,保持系统默认即可。")]),e._v(" "),n("p",[n("strong",[e._v("gzip_proxied")])]),e._v(" "),n("p",[e._v("语法: gzip_proxied [off|expired|no-cache|no-store|private|no_last_modified|no_etag|auth|any] …\n默认值: gzip_proxied off\n作用域: http, server, location\nNginx作为反向代理的时候启用，开启或者关闭后端服务器返回的结果，匹配的前提是后端服务器必须要返回包含”Via”的 header头。")]),e._v(" "),n("p",[e._v("off – 关闭所有的代理结果数据的压缩\nexpired – 启用压缩，如果header头中包含 “Expires” 头信息\nno-cache – 启用压缩，如果header头中包含 “Cache-Control:no-cache” 头信息\nno-store – 启用压缩，如果header头中包含 “Cache-Control:no-store” 头信息\nprivate – 启用压缩，如果header头中包含 “Cache-Control:private” 头信息\nno_last_modified – 启用压缩,如果header头中不包含 “Last-Modified” 头信息\nno_etag – 启用压缩 ,如果header头中不包含 “ETag” 头信息\nauth – 启用压缩 , 如果header头中包含 “Authorization” 头信息\nany – 无条件启用压缩")]),e._v(" "),n("p",[n("strong",[e._v("gzip_types")])]),e._v(" "),n("p",[e._v("语法: gzip_types mime-type [mime-type ...]\n默认值: gzip_types text/html\n作用域: http, server, location\n匹配MIME类型进行压缩，（无论是否指定）”text/html”类型总是会被压缩的。\n注意：如果作为http server来使用，主配置文件中要包含文件类型配置文件")]),e._v(" "),n("p",[e._v("如果你希望压缩常规的文件类型，可以写成这个样子")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("http\n{\ninclude conf/mime.types;\ngzip on;\ngzip_min_length 1000;\ngzip_buffers 4 8k;\ngzip_http_version 1.1;\ngzip_types text/plain application/x-javascript text/css text/html application/xml;\n\n……\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br")])]),n("p",[e._v("默认情况下，Nginx的gzip压缩是关闭的\n同时，Nginx默认只对text/html进行压缩\n所以，开启gzip的指令如下：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("gzip on;\ngzip_http_version 1.0;\ngzip_disable “MSIE [1-6].”;\ngzip_types text/plain application/x-javascript text/css text/javascript;\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("如果你想让图片也开启gzip压缩，那么用以下这段吧：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("gzip_types text/plain application/x-javascript text/css text/javascript application/x-httpd-php image/jpeg image/gif image/png;\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[n("strong",[e._v("注意：")])]),e._v(" "),n("ol",[n("li",[n("p",[e._v("其中的gzip_http_version的设置，它的默认值是1.1，就是说对HTTP/1.1协议的请求才会进行gzip压缩，如果我们使用了proxy_pass进行反向代理，那么nginx和后端的upstream server之间是用HTTP/1.0协议通信的")]),e._v(" "),n("p",[e._v("This module makes it possible to transfer requests to another server.\nIt is an HTTP/1.0 proxy without the ability for keep-alive requests yet. (As a result, backend connections are created and destroyed on every request.) Nginx talks HTTP/1.1 to the browser and HTTP/1.0 to the backend server. As such it handles keep-alive to the browser.")]),e._v(" "),n("p",[e._v("如果我们使用nginx通过反向代理做Cache Server，而且前端的nginx没有开启gzip，同时，我们后端的nginx上没有设置gzip_http_version为1.0，那么Cache的url将不会进行gzip压缩")])]),e._v(" "),n("li",[n("p",[e._v("gzip_disable的设置是禁用IE6的gzip压缩，又是因为杯具的IE6\nIE6的某些版本对gzip的压缩支持很不好，会造成页面的假死，今天产品的同学就测试出了这个问题，后来调试后，发现是对img进行gzip后造成IE6的假死，把对img的gzip压缩去掉后就正常了，为了确保其它的IE6版本不出问题，所以就加上了gzip_disable的设置")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);