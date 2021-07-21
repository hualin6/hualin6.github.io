(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{584:function(t,e,l){"use strict";l.r(e);var a=l(3),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h2",{attrs:{id:"docker-常用指令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用指令"}},[t._v("#")]),t._v(" Docker 常用指令")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("命令")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("拉取镜像")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker pull [镜像名称:版本]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("镜像列表")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker images")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("删除镜像")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker rmi[镜像名称:版本]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("镜像操作记录")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker history [镜像名称:版本]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("给镜像设置新的仓库")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker tag [镜像名称:版本] [新镜像名称:新版本]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("查看镜像详细")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker inspect [镜像名称:版本]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("搜索镜像")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker search [关键字]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("仓库登录")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker login")])])])]),t._v(" "),l("hr"),t._v(" "),l("h3",{attrs:{id:"容器操作"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#容器操作"}},[t._v("#")]),t._v(" 容器操作")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("命令")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("启动容器并进入")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker run -ti --name [容器名称] [镜像名称:版本] bash")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("容器列表")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker ps -a")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("容器提交为新的镜像")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker commit [容器名称] my_image:v1.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("容器后台运行")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('docker run -d --name [容器名称] [镜像名称:版本] bash -c "echo hello world"')])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("容器结束后自动删除")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('docker run --rm --name [容器名称] [镜像名称:版本] bash -c "echo hello world"')])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("删除容器")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker rm [容器名称]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("进入容器 exec")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker exec -ti [容器名称] bash")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("进入容器 attach")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker attach [容器名称]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("停止容器")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker stop [容器名称]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Docker 日志")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker logs [容器名称]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("查看容器详细")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker inspect [容器名称]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("查看容器最近一个进程")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker top [容器名称]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("docker top [容器名称]")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker restart [容器名称]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("暂停一个容器进程")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker pause [容器名称]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("取消暂停")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker unpause [容器名称]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("终止容器")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker kill [容器名称]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("端口映射")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("docker run -ti --name [容器名称] -p 8080:80 [镜像名称:版本] bash")])])])]),t._v(" "),l("hr"),t._v(" "),l("h3",{attrs:{id:"内存限制"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#内存限制"}},[t._v("#")]),t._v(" 内存限制")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("简介")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("-m, - -memory")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("内存限制，格式：数字+单位，单位可以是 b, k, m, g，最小 4M")])])])]),t._v(" "),l("hr"),t._v(" "),l("h3",{attrs:{id:"cpu-限制"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#cpu-限制"}},[t._v("#")]),t._v(" CPU 限制")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("简介")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v('-- -cpuset-cpus=""')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("允许使用的 CPU 集")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("-c,- -cpu-shares=0")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CPU 共享权值")])])])]),t._v(" "),l("hr"),t._v(" "),l("h3",{attrs:{id:"dockerfile-指令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-指令"}},[t._v("#")]),t._v(" dockerfile 指令")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("示例")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("FROM")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("基于这个 Image 开始")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("FROM nginx:latest")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ENV")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("环境变量")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ENV localfile /usr/local/nginx")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RUN")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("新层中执行命令")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("RUN /bin/bash -c 'source HOME")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("LABEL")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置 metadata")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('LABEL version="1.0"')])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MAINTAINER")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("维护者 (deprecated)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('maintainer="admin@163.com"')])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("EXPOSE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("声明容器监听端口")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("EXPOSE 80 443")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ADD")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("添加文件")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ADD ./dist ${foo}/html")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("COPY")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("复制文件")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("COPY ./dist ${foo}/html")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ENTRYPOINT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("容器启动时执行指令")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("CMD")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("容器启动时执行指令默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('CMD ["-la"]')])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("WORKDIR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置工作目录")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WORKDIR /path/to/workdir")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("VOLUME")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("挂载点")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('VOLUME ["/data"]')])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("USER")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("指定操作用户")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("USER www")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);