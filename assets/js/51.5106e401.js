(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{563:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"git拉取远程项目及提交代码到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git拉取远程项目及提交代码到远程仓库"}},[s._v("#")]),s._v(" git拉取远程项目及提交代码到远程仓库")]),s._v(" "),a("h3",{attrs:{id:"新建一个文件夹准备放置项目文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建一个文件夹准备放置项目文件"}},[s._v("#")]),s._v(" 新建一个文件夹准备放置项目文件")]),s._v(" "),a("p",[s._v("建好后右键 Git Bash Here (前提是安装了git) ,若未安装先下载安装   "),a("a",{attrs:{href:"https://gitforwindows.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击下载"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//初始化仓库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n//克隆远程仓库到本地\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone 远程仓库项目地址\n//最好使用SSH地址\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("将项目克隆到本地，之后就可以正常开发了，如果刚克隆完其他人员有提交新的更改，那就先"),a("code",[s._v("git pull")]),s._v("  一下，将最新的拉取下来，然后进行开发工作 。")]),s._v(" "),a("p",[s._v("当今天写好需要提交到git远程仓库：")]),s._v(" "),a("h3",{attrs:{id:"配置用户名和邮箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置用户名和邮箱"}},[s._v("#")]),s._v(" 配置用户名和邮箱")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//设置你的邮箱\ngit config --global user.email "you@example.com"\n\n//设置你的名字\ngit config --global user.name "Your Name"\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"代码提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码提交"}},[s._v("#")]),s._v(" 代码提交:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//将写好的代码提交到暂存区\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n//将代码提交到本地仓库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'本次更新说明'")]),s._v("\n\n//将代码提交到远程仓库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("blockquote",[a("p",[s._v("期间如有提示：Username for '远程仓库地址'：输入你git账号邮箱")]),s._v(" "),a("p",[s._v("​\t\t\t\t\t\t\tPassword for '远程仓库地址'：输入git密码")]),s._v(" "),a("p",[s._v("输入后即可提交到对应远程仓库。")])]),s._v(" "),a("h4",{attrs:{id:"至此完成代码提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#至此完成代码提交"}},[s._v("#")]),s._v(" 至此完成代码提交！")]),s._v(" "),a("h3",{attrs:{id:"解决每次提交都需要输入用户名和密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决每次提交都需要输入用户名和密码"}},[s._v("#")]),s._v(" 解决每次提交都需要输入用户名和密码")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("这个原因是因为克隆项目的时候使用了https方式，使用ssh方式的话就不会每次都提示")]),s._v(" "),a("h4",{attrs:{id:"这里主要就是将https方式更改为ssh方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这里主要就是将https方式更改为ssh方式"}},[s._v("#")]),s._v(" 这里主要就是将https方式更改为ssh方式：")]),s._v(" "),a("p",[s._v("先到git上将项目的ssh地址复制一下，本地项目目录下下右键打开 git bash，查看当前克隆地址")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//查看clone地址\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n//显示以下内容\norigin https://xxxxx.git（fetch）\norigin https://xxxxx.git（push）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"移除https方式-换成ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除https方式-换成ssh"}},[s._v("#")]),s._v(" 移除https方式，换成ssh")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//移除\ngit remote rm origin\n\n//添加(将git@email:username/ProjectName.git换成你复制的ssh地址)\ngit remote add origin git@email:username/ProjectName.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"查看是否修改成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看是否修改成功"}},[s._v("#")]),s._v(" 查看是否修改成功")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//查看\ngit remote -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("修改完成后重新提交 "),a("code",[s._v("push")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//推送到远程仓库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"正常配置好的环境提交代码流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正常配置好的环境提交代码流程"}},[s._v("#")]),s._v(" 正常配置好的环境提交代码流程")]),s._v(" "),a("hr"),s._v(" "),a("ol",[a("li",[a("p",[s._v("git add .    //将所有修改提交到暂存区")])]),s._v(" "),a("li",[a("p",[s._v("git commit -m '更新说明'    //将代码提交到本地仓库")])]),s._v(" "),a("li",[a("p",[s._v("git pull origin master    //将远程最新拉取下来,如果没有更新就可以忽律这一步")])]),s._v(" "),a("li",[a("p",[s._v("git push origin master    //将代码推至远程,完成代码提交")])])]),s._v(" "),a("h2",{attrs:{id:"附一张常见git命令思维导图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附一张常见git命令思维导图"}},[s._v("#")]),s._v(" 附一张常见git命令思维导图")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("建议下载使用")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/2020-10-06_213404.png",alt:""}})]),s._v(" "),a("p",[s._v("感谢某网友提供!")])])}),[],!1,null,null,null);t.default=n.exports}}]);