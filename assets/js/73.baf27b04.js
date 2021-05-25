(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{581:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"maven-环境配置及idea中设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-环境配置及idea中设置"}},[t._v("#")]),t._v(" Maven 环境配置及IDEA中设置")]),t._v(" "),s("p",[t._v("Maven 是一个基于 Java 的工具，所以要做的第一件事情就是安装 JDK。")]),t._v(" "),s("p",[t._v("JDK百度下载安装")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("项目")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("要求")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("JDK")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Maven 3.3 要求 JDK 1.7 或以上 Maven 3.2 要求 JDK 1.6 或以上 Maven 3.0/3.1 要求 JDK 1.5 或以上")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("内存")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("没有最低要求")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("磁盘")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Maven 自身安装需要大约 10 MB 空间。除此之外，额外的磁盘空间将用于你的本地 Maven 仓库。你本地仓库的大小取决于使用情况，但预期至少 500 MB")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("操作系统")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("没有最低要求")])])])]),t._v(" "),s("p",[t._v("装好后检查是否成功")]),t._v(" "),s("p",[t._v("打开终端/cmd 输入以下查看版本")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("java -version\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"maven-下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-下载"}},[t._v("#")]),t._v(" Maven 下载")]),t._v(" "),s("p",[t._v("Maven 下载地址：http://maven.apache.org/download.cgi")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://imgtu.com/i/cKBCa8",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://z3.ax1x.com/2021/04/04/cKBCa8.png",alt:"cKBCa8.png"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("下载包后解压到对应目录：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("系统")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("存储位置 (可根据自己情况配置)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Windows")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("D:\\Maven\\apache-maven-3.6.3")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Linux")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("/usr/local/apache-maven-3.6.3")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Mac")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("/usr/local/apache-maven-3.6.3")])])])]),t._v(" "),s("h2",{attrs:{id:"设置-maven-环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-maven-环境变量"}},[t._v("#")]),t._v(" 设置 Maven 环境变量")]),t._v(" "),s("p",[t._v("添加环境变量 MAVEN_HOME：")]),t._v(" "),s("p",[t._v("Windows:")]),t._v(" "),s("p",[t._v('右键 "计算机"，选择 "属性"，之后点击 "高级系统设置"，点击"环境变量"，来设置环境变量，有以下系统变量需要配置：')]),t._v(" "),s("p",[t._v("新建系统变量，变量名"),s("code",[t._v("MAVEN_HOME")]),t._v("，变量值："),s("code",[t._v("D:\\Maven\\apache-maven-3.6.3")])]),t._v(" "),s("p",[t._v("编辑系统变量 "),s("code",[t._v("Path")]),t._v("，添加变量值："),s("code",[t._v("%MAVEN_HOME%\\bin")])]),t._v(" "),s("p",[t._v("Linux & Mac :")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tar -xvf  apache-maven-3.6.3-bin.tar.gz\nsudo mv -f apache-maven-3.6.3 /usr/local/\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("编辑 "),s("strong",[t._v("/etc/profile")]),t._v(" 文件 "),s("strong",[t._v("sudo vim /etc/profile")]),t._v("，在文件末尾添加如下代码：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export MAVEN_HOME=/usr/local/apache-maven-3.6.3\nexport PATH=${PATH}:${MAVEN_HOME}/bin\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("保存文件，并运行命令使环境变量生效：#source /etc/profile")]),t._v(" "),s("p",[t._v("在控制台输入命令: mvn -v，如果能看到 Maven 相关版本信息，则说明 Maven 已经安装成功")]),t._v(" "),s("h2",{attrs:{id:"idea设置本地maven"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea设置本地maven"}},[t._v("#")]),t._v(" IDEA设置本地Maven")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("打开IDEA，进入主界面后点击 configure或者在项目界面点击file，然后点击 settings")])]),t._v(" "),s("li",[s("p",[t._v("在上面的快捷查找框中输入maven，查找与maven相关的设置，然后点击maven。")])]),t._v(" "),s("li",[s("p",[t._v("将Maven home directory: 下拉选择本地maven")])]),t._v(" "),s("li",[s("p",[t._v("将下面的User settings file: 先点右边的Override勾上， 选择本地maven所在目录如"),s("code",[t._v("D:\\Maven\\apache-maven-3.6.3\\conf\\settings .xml")]),t._v("文件，点击Apply应用")])]),t._v(" "),s("li",[s("p",[t._v("推荐配置：设置maven在不联网的情况下使用本地插件")]),t._v(" "),s("p",[t._v("一般使用maven为我们提供好的骨架时，是需要联网的，配置这个，可以在没有网路的情况下，我们可以正常创建工程，并从之前已经使用过的工程中找到相应的骨架。")]),t._v(" "),s("p",[t._v("点击左侧Runner项， 右边VM Options: 输入"),s("code",[t._v("-DarchetypeCatalog=internal")]),t._v(" ，点OK")]),t._v(" "),s("p",[t._v("IDEA设置完成")]),t._v(" "),s("h2",{attrs:{id:"maven配置阿里云镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven配置阿里云镜像"}},[t._v("#")]),t._v(" Maven配置阿里云镜像")]),t._v(" "),s("ol",[s("li",[t._v("打开D盘maven目录下conf文件夹内的setting.xml文件进行配置")])])])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--  配置阿里云  --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("nexus-aliyun"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("*"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Nexus aliyun"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://maven.aliyun.com/nexus/content/groups/public"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("配置默认JDK版本 , 不配置也行")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jdk-1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activeByDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activeByDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jdk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("jdk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maven.compiler.source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maven.compiler.source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maven.compiler.target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maven.compiler.target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maven.compiler.compilerVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maven.compiler.compilerVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("修改本地仓库地址: 还是setting.xml文件,找到"),s("code",[t._v("<localRepository>D:\\Program Files\\apache-maven-3.6.3\\maven-repository</localRepository>")]),t._v(" , 将地址指向你想要的位置即可")])]),t._v(" "),s("p",[t._v("所有配置完成！")]),t._v(" "),s("blockquote",[s("p",[t._v("点滴积累，积少成多")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);