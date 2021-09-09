(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{564:function(e,a,s){"use strict";s.r(a);var r=s(3),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vmware-workstation-与-device-credential-guard-不兼容。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vmware-workstation-与-device-credential-guard-不兼容。"}},[e._v("#")]),e._v(" VMware Workstation 与 Device/Credential Guard 不兼容。")]),e._v(" "),s("p",[e._v("有段时间没开虚拟机了，今天想用下Ubuntu，打开VM，启动Ubuntu系统，")]),e._v(" "),s("h2",{attrs:{id:"提示-vmware-workstation-与-device-credential-guard-不兼容-无法启动系统-报错界面如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提示-vmware-workstation-与-device-credential-guard-不兼容-无法启动系统-报错界面如下"}},[e._v("#")]),e._v(" 提示 VMware Workstation 与 Device/Credential Guard 不兼容，无法启动系统，报错界面如下：")]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/vmerr1.png",alt:"VMware Workstation 与 Device/Credential Guard 不兼容"}})]),e._v(" "),s("h3",{attrs:{id:"根据vm相关问题得知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据vm相关问题得知"}},[e._v("#")]),e._v(" 根据VM相关问题得知：")]),e._v(" "),s("p",[e._v("在以下情况下，无法启动Windows 10 1909或更早版本的主机上的VMware Workstation 12.5或更高版本中的虚拟机的电源：")]),e._v(" "),s("ul",[s("li",[e._v("凭据保护/设备保护已启用。")]),e._v(" "),s("li",[e._v("Windows沙盒已启用")]),e._v(" "),s("li",[e._v("虚拟机平台已启用")]),e._v(" "),s("li",[e._v("WSL2已启用")]),e._v(" "),s("li",[e._v("Hyper-V已启用")])]),e._v(" "),s("p",[e._v("多番查找发现确实有多种原因引起这个报错，并非只有一个原因，我之前使用正常，有段时间没用，期间有升级过系统，有开启过内核隔离(基于虚拟化的安全性可保护设备的核心部分)的"),s("strong",[e._v("内存完整性")]),e._v("，虽然现在点击了关闭，但查看系统信息中的 "),s("strong",[e._v("基于虚拟化的安全性")]),e._v(" 状态依然是启用，当解决了这个不兼容报错后又提示与Hyper-V不兼容，报错如下：")]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/2020-10-03_202736.png",alt:"Hyper-V不兼容"}})]),e._v(" "),s("h3",{attrs:{id:"这里就跟据了解的情况来解决这两个报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#这里就跟据了解的情况来解决这两个报错"}},[e._v("#")]),e._v(" 这里就跟据了解的情况来解决这两个报错：")]),e._v(" "),s("blockquote",[s("p",[e._v("看个人遇到的情况，不必将我这所有以下步骤走一遍，如果前面两步不能解决就整个步骤都一样设置一下吧。（设置后需要重启电脑！！！）")])]),e._v(" "),s("ol",[s("li",[s("h4",{attrs:{id:"打开windows10设置-更新和安全-windows-安全中心-打开-windows安全中心-设备安全性-内核隔离详细信息-关闭内存完整性。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开windows10设置-更新和安全-windows-安全中心-打开-windows安全中心-设备安全性-内核隔离详细信息-关闭内存完整性。"}},[e._v("#")]),e._v(" 打开Windows10设置--\x3e更新和安全--\x3eWindows 安全中心--\x3e打开 Windows安全中心--\x3e设备安全性--\x3e内核隔离详细信息--关闭内存完整性。")])]),e._v(" "),s("li",[s("h4",{attrs:{id:"win-r-输入-gpedit-msc-计算机配置-管理模板-系统-device-guard-将右侧部署windows-defender-应用程序控制和打开基于虚拟化的安全-两项均设置为-已禁用-。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#win-r-输入-gpedit-msc-计算机配置-管理模板-系统-device-guard-将右侧部署windows-defender-应用程序控制和打开基于虚拟化的安全-两项均设置为-已禁用-。"}},[e._v("#")]),e._v(" win+R  输入 "),s("strong",[e._v("gpedit.msc")]),e._v(" ，计算机配置--\x3e管理模板--\x3e系统--\x3eDevice Guard--\x3e将右侧"),s("code",[e._v("部署Windows Defender 应用程序控制")]),e._v("和"),s("code",[e._v("打开基于虚拟化的安全")]),e._v(" 两项均设置为 "),s("strong",[e._v("已禁用")]),e._v(" 。")])]),e._v(" "),s("li",[s("h4",{attrs:{id:"打开控制面板-程序和功能-启用或关闭windows功能-将hyper-v前面的-√-去掉。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开控制面板-程序和功能-启用或关闭windows功能-将hyper-v前面的-√-去掉。"}},[e._v("#")]),e._v(" 打开控制面板--\x3e程序和功能--\x3e启用或关闭Windows功能，将Hyper-V前面的 "),s("code",[e._v("√")]),e._v(" 去掉。")])]),e._v(" "),s("li",[s("h4",{attrs:{id:"下载一个-device-guard-and-credential-guard-hardware-readiness-tool-工具-下载地址-device-guard-and-credential-guard-hardware-readiness-tool-点击红色的-download-进行下载-下载后解压-按-win-x-使用powershell-管理员-切换目录到工具的解压后位置-输入以下命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载一个-device-guard-and-credential-guard-hardware-readiness-tool-工具-下载地址-device-guard-and-credential-guard-hardware-readiness-tool-点击红色的-download-进行下载-下载后解压-按-win-x-使用powershell-管理员-切换目录到工具的解压后位置-输入以下命令"}},[e._v("#")]),e._v(" 下载一个 "),s("code",[e._v("Device Guard and Credential Guard hardware readiness tool")]),e._v(" 工具，下载地址："),s("a",{attrs:{href:"https://www.microsoft.com/en-us/download/details.aspx?id=53337",target:"_blank",rel:"noopener noreferrer"}},[e._v("Device Guard and Credential Guard hardware readiness tool"),s("OutboundLink")],1),e._v("  ，点击红色的 "),s("span",{staticStyle:{color:"red"}},[e._v("Download")]),e._v(" 进行下载，下载后解压，按 win+x  使用PowerShell（管理员） ，切换目录到工具的解压后位置，输入以下命令：")])])]),e._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Set-ExecutionPolicy")]),e._v(" RemoteSigned\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"选择确认-y-继续执行以下命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择确认-y-继续执行以下命令"}},[e._v("#")]),e._v(" 选择确认：Y ,  继续执行以下命令：")]),e._v(" "),s("blockquote",[s("p",[e._v("这里说明一下：DG_Readiness_Tool_v3.6.ps1  是我当前下载的版本，需根据你下载版本做修改，如果是一样的"),s("code",[e._v("v3.6.ps1")]),e._v(" 版本，那就直接复制命令过去用就可以了。")])]),e._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\\DG_Readiness_Tool_v3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Disable "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("AutoReboot  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("执行后电脑将会重启，我这里提示一分钟后自动重启，重启后会进入一个DOS窗口，窗口底部提示按win  F3关闭DG,或按ESC取消，这里我们按 "),s("strong",[e._v("F3")]),e._v("  即可关闭继续虚拟化的安全性，然后电脑再次重启，现在 Device/Credential Guard 不兼容 就解决了，若有跟我一样开启VM系统还有一个与Hyper-V不兼容的报错，那就使用PowerShell（管理员) 再执行以下命令：")]),e._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[e._v("bcdedit "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("set")]),e._v(" hypervisorlaunchtype off\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("PS")]),e._v(" C:\\WINDOWS\\system32> bcdedit "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("set")]),e._v(" hypervisorlaunchtype off\n操作成功完成。\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("PS")]),e._v(" C:\\WINDOWS\\system32>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("提示操作完成就可以了，至此我的Ubuntu启动正常了。")]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/2020-10-03_220731.png",alt:"启动正常"}})]),e._v(" "),s("blockquote",[s("p",[e._v("记得操作设置后重启以下电脑。")])]),e._v(" "),s("p",[e._v("查看系统信息中 "),s("strong",[e._v("基于虚拟化的安全性")]),e._v("  当前启用状态命令：win+r 输入  msinfo32.exe，系统摘要项中查看。")])])}),[],!1,null,null,null);a.default=t.exports}}]);