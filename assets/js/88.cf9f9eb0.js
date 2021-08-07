(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{609:function(e,v,s){"use strict";s.r(v);var a=s(3),_=Object(a.a)({},(function(){var e=this,v=e.$createElement,s=e._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("认识 VIM")]),e._v(" "),s("p",[e._v("刚开始 用 VIM 打开文件的时候，需要从宏观的去了解一下 VIM 这个编辑器。")]),e._v(" "),s("p",[e._v("VIM 有四个模式，：")]),e._v(" "),s("ul",[s("li",[e._v("正常模式 (Normal-mode)")]),e._v(" "),s("li",[e._v("插入模式 (Insert-mode)")]),e._v(" "),s("li",[e._v("命令模式 (Command-mode)")]),e._v(" "),s("li",[e._v("可视模式 (Visual-mode)")])]),e._v(" "),s("p",[e._v("什么是正常模式（Normal-mode) ？")]),e._v(" "),s("p",[e._v("正常模式一般用于浏览文件，也包括一些复制、粘贴、删除等操作。这时击键时，一些组合键会被当成功能键，而不会在文本中键入对应的字符。")]),e._v(" "),s("p",[e._v("在这个模式下，我们可能通过键盘在文本中跳来跳去，跳动的范围从小到大是字符、单词、行、句子、段落和屏幕。\n启动 VIM 后默认位于正常模式。不论是什么模式，按下 "),s("code",[e._v("<Esc>")]),e._v("键(有时需要按两下）都会进入正常模式。")]),e._v(" "),s("p",[e._v("什么是插入模式？（Insert-mode)")]),e._v(" "),s("p",[e._v("在正常模式中按下个别字母键（后面会详细介绍），会进入插入模式。")]),e._v(" "),s("p",[e._v("例如按"),s("code",[e._v("i")]),e._v("键会进行插入模式。该模式启动以后，就会进入编辑状态，通过键盘输入内容。")]),e._v(" "),s("p",[e._v("什么是命令模式（Command-mode)")]),e._v(" "),s("p",[e._v("在正常模式中，按下"),s("code",[e._v("：")]),e._v("（冒号）键或者"),s("code",[e._v("/")]),e._v("（撇号），会进入命令模式。在命令模式中可以执行一些输入并执行一些 VIM 或插件提供的指令，就像在shell里一样。这些指令包括设置环境、文件操作、调用某个功能等等。")]),e._v(" "),s("p",[e._v("什么是可视模式（Visual-mode）")]),e._v(" "),s("p",[e._v("在正常模式按下"),s("code",[e._v("v, V, <Ctrl>+v")]),e._v("，可以进入可视模式。可视模式中的操作有点像拿鼠标进行操作，选择文本的时候有一种鼠标选择的即视感，有时候会很方便。")]),e._v(" "),s("p",[e._v("以上是关于 VIM 四种模式的解读，网上的文章有很多。但是 zempty 认为 VIM 只有两个模式，便于理解（纯个人见解，用熟 VIM 以后，应该会赞同这个理解）：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("操作模式")])]),e._v(" "),s("li",[s("p",[e._v("编辑模式")])])]),e._v(" "),s("p",[e._v("一个好的编辑器我们无非就使用它的两个功能：")]),e._v(" "),s("p",[e._v("1、通过一些快捷键操作编辑器实现我们的功能：复制，黏贴，查询。。。")]),e._v(" "),s("p",[e._v("2、我们用来编辑，输入内容进入编辑器。")]),e._v(" "),s("p",[e._v("什么是操作模式（个人理解）？")]),e._v(" "),s("p",[e._v("操作 VIM 实现我们的功能需求，该模式可以包括上面四种模式中的三种（正常模式/命令模式/可视模式/），这三种模式是通过终端输入命令去实现相应的功能需求：查询/复制/黏贴/替换。。。")]),e._v(" "),s("p",[e._v("什么是编辑模式（个人理解）？")]),e._v(" "),s("p",[e._v("输入状态下，输入内容。（对应于上面四种模式中的插入模式）。")]),e._v(" "),s("p",[e._v("VIM 有一个很重要的按键需要一开始就做出说明，那就是键盘中的 "),s("ESC",[e._v(" ,这个按键用来切换模式。当 VIM 处于编辑模式的时候，该按键可以切换到命令模式.")])],1),e._v(" "),s("ESC",[e._v(" 这个按键有点特殊，它脱离了主键盘区，每次操作这个按键的时候都会有些蛮烦。估计很多使用 VIM 的人都会有这个痛点，因此有了一个解决方案，`control + [` 这两个按键取代`"),s("ESC",[e._v("`。 \n"),s("p",[e._v("曾经很长一段时间我都是用"),s("code",[e._v("control + [")]),e._v(" 用来取代"),s("code",[e._v("<ESC>")]),e._v("，但是还是感觉有些难受？")]),e._v(" "),s("p",[e._v("VIM 有一个配置文件，在 linux 系统中，该配置文件是 .vimrc , 该文件位于 ～ 目录下面 （～ 目录是家目录，也就是用户目录，不了解的可以科学上网查询），是一个隐藏文件，如果该文件不存在可以手动创建一个。")]),e._v(" "),s("p",[e._v(".vimrc 可以有很多配置，例如显示行号，快捷键配置，插件配置等等。VIM 很多个性化的设置都离不开这个配置文件。zempty 认为 .vimrc 有一个特别重要的配置，那就是配置如下的一行：")]),e._v(" "),s("p",[e._v("#将ESC键映射为两次j键"),s("br"),e._v(" "),s("code",[e._v("inoremap jj <Esc>")])]),e._v(" "),s("p",[e._v("这个配置是将 "),s("ESC",[e._v(" 功能键用 jj (连续按两次 j) 来取代。这个配置可以很大程度提高 VIM 的使用效率，下文的讲解 zempty 都会用 jj 来取代键盘上的 "),s("ESC",[e._v("。")])],1)],1),e._v(" "),s("p",[e._v("用 VIM 打开文件")]),e._v(" "),s("p",[e._v("如何用 VIM 去打开一个文件呢？")]),e._v(" "),s("p",[e._v("现在假如有一个文件 file1 ,只需要在文件前面加上 vim 关键字就好：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vim file1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面这个命令将会打开 file1 这个文件.")]),e._v(" "),s("p",[e._v("如何用 VIM 一次性打开多个文件呢？")]),e._v(" "),s("p",[e._v("现在有多个文件 file1 ，file2 , ... ,filen.")]),e._v(" "),s("p",[e._v("现在举例打开两个文件 file1，file2")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vim file1 file2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("该方式打开文件，显示屏默认显示第一个文件也就是 file1，如何进行文件间的切换呢？VIM 的正常模式下（参考上文关于正常模式的描述）按下键盘上的冒号"),s("code",[e._v("：")]),e._v("这时会在显示屏底部出现冒号"),s("code",[e._v("：")]),e._v("（进入了 VIM 的命令模式）然后在输入 ls 屏幕上会出现打开的所有文件的序号和文件名，我们继续输入冒号"),s("code",[e._v("：")]),e._v(" ，然后输入 bn (这里的 n需要做一个解释并不是键盘上的 n ,而是文件序号的代指，如 b1 代表显示屏上切换到第一个文件，b2 代表显示屏上切换到第二个文件)。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":ls\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面这个命令将会列出 VIM 打开的所有文件。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":b2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面的这个命令将会在显示屏上显示第二个文件。")]),e._v(" "),s("p",[e._v("如何在显示屏上一次性显示多个文件呢？")]),e._v(" "),s("p",[e._v("VIM 可以实现分屏操作，一个屏幕被多个文件给分占，有左右和上下两种分屏的方式。")]),e._v(" "),s("p",[e._v("左右分屏如下操作：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vim -On file1 file2 ... filen\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这里的 n 是代表有几个文件需要分屏，从左至右依次显示 n 个文件。")]),e._v(" "),s("p",[e._v("上下分屏如下操作：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vim -on file1 file2 ... filen\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这个命令跟上一个命令不同的是其中的参数 -on 中的 o 是小写，这样将会上下依次显示 n 个文件。")]),e._v(" "),s("p",[e._v("VIM 如何进行分屏操作呢？")]),e._v(" "),s("p",[e._v("请记住一个重要的组合键 "),s("code",[e._v("Ctrl + w")]),e._v(" ,操作分屏离不开这个组合健(这里的组合健可没有 + ，只是 Ctrl 和 w 组合实现一个动能,下文谈到的组合健都这样描述 )。")]),e._v(" "),s("p",[e._v("按住组合键 "),s("code",[e._v("Ctrl + w")]),e._v(" ，然后在按下 s")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl + w s\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面这个命令将会上下分割当前打开的文件。")]),e._v(" "),s("p",[e._v("按住冒号"),s("code",[e._v("：")]),e._v("，紧接着输入 sp ,在键入文件名，如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":sp file\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面的这个命令将会上下分割当前文件和新打开的 file 。")]),e._v(" "),s("p",[e._v("按住组合键 "),s("code",[e._v("Ctrl + w")]),e._v(" ,然后在按下 v")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl +w v\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面的这个命令将会左右分割当前的文件")]),e._v(" "),s("p",[e._v("按住冒号 "),s("code",[e._v("：")]),e._v("，紧接着输入 vsp ,在键入文件名称，如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":vsp file\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面的这个命令将会左右分割当前打开的文件和新打开的文件 file 。")]),e._v(" "),s("p",[e._v("分屏以后如何在文件间切换光标，和移动分屏？")]),e._v(" "),s("p",[e._v("1.切换左右分屏的光标 ：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl + w h \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将当前光标定位到左边的屏幕")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl + w l\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将当前的光标定位到右边的屏幕")]),e._v(" "),s("p",[e._v("2.移动左右分屏 ：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl + w H\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将当前的分屏移动到左边")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl + w L \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将当前的分屏移动到右边")]),e._v(" "),s("p",[e._v("3.切换上下分屏的光标 ：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl + w j\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将当前的光标移动到下面的分屏")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl + w k\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将当前光标移动到上面的分屏")]),e._v(" "),s("p",[e._v("4.移动上下分屏：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl + w J\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将当前的分屏移动到下面的分屏")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl + w K\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将当前的分屏移动到上面的分屏")]),e._v(" "),s("p",[e._v("如何关闭分屏呢？")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl + w c \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面这个命令是关闭当前的分屏")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Ctrl + w q \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面的这个命令也是关闭当前的分屏，如果是最后一个分屏将会退出 VIM 。")]),e._v(" "),s("p",[e._v("VIM 的退出")]),e._v(" "),s("p",[e._v("VIM 的最终操作就是 VIM 的退出，如何进行 VIM 的有效退出呢？下面针对 VIM 的退出来做一下说明：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":w \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("保存当前对文件的修改，但是不退出文件。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":w!\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("强制保存但是不退出文件。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":w file\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("保存当前的文件修改到 file 文件当中。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":q!\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("退出文件，对文件的修改不做保存。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":qa!\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("退出所有的文件，对所有的文件修改都不做保存。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":wq\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("退出文件并保存对文件的修改。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":x\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("退出文件并保存对文件的修改。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":e file\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("打开另一个文件。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":e!\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("放弃对文件的所有修改，恢复文件到上次保存的位置。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":saveas file\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("另存为 file。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":bn `和 ` :bp\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("当打开多个文件的时候可以输入 "),s("code",[e._v(":bn")]),e._v(" 和"),s("code",[e._v(":bp")]),e._v(" 进行上一个文件或者下一个文件的切换。")]),e._v(" "),s("p",[e._v("以上的命令都是在命令行模式下的操作（也就是输入冒号"),s("code",[e._v("：")]),e._v("紧接着输入相应的字符命令如 "),s("code",[e._v(":q!")]),e._v(" 就会执行退出操作）。 zempty 在这里要推荐一个常用的操作就是"),s("code",[e._v("ZZ")]),e._v(" , 当你对文件进行了修改，需要保存退出，那么可以在键盘上快速的键入两个大些的 Z (ZZ),这样文件就会快速的保存退出了😀。")]),e._v(" "),s("p",[e._v("VIM 的输入模式")]),e._v(" "),s("p",[e._v("编辑器的主要功能就是输入文本，编辑文本，很多编辑器在打开文件的时候就可以通过键盘录入文字，但是 VIM 有稍许的不同，刚刚接触 VIM 的时候是很难对 VIM 进行编辑操作的，记得我在刚接触它的时候是很崩溃的（千万个草泥马在内心奔腾），但是你接触久了，了解的多了，也就理解如此设计的美妙之处。")]),e._v(" "),s("p",[e._v("如何使用 VIM 编辑文本？")]),e._v(" "),s("p",[e._v("这里有必要再强调一下，在使用 VIM 打开文件的时候，这时候的状态是正常模式（Normal-mode）,请务必记住这个模式，如果你不确定当前是否处在正常模式，请连续按两下键盘上的"),s("code",[e._v("jj")]),e._v(" (这个"),s("code",[e._v("jj")]),e._v("需要读者去做相应的配置，上文有做过讲解)，VIM 处理编辑文本需要从正常模式(Normal)切换到插入模式(Insert-mode),进入插入模式的时候你应该会在屏幕顶部看到 INSERT 的提示，这时候就可以编辑文本了。")]),e._v(" "),s("p",[e._v("如何从正常模式进入插入模式呢？")]),e._v(" "),s("p",[e._v("请记住下面几个常用启动录入文本的键盘字符"),s("code",[e._v("i,I,a,A,o,O,s,S")]),e._v("。")]),e._v(" "),s("p",[s("code",[e._v("i")]),e._v("是在光标所在的字符之前插入需要录入的文本。")]),e._v(" "),s("p",[s("code",[e._v("I")]),e._v(" 是在光标所在行的行首插入需要录入的文本。")]),e._v(" "),s("p",[s("code",[e._v("a")]),e._v(" 是在光标所在的字符之后插入需要录入的文本。")]),e._v(" "),s("p",[s("code",[e._v("A")]),e._v(" 是在光标所在行的行尾插入需要录入的文本。")]),e._v(" "),s("p",[s("code",[e._v("o")]),e._v(" 是光标所在行的下一行行首插入需要录入的文本。")]),e._v(" "),s("p",[s("code",[e._v("O")]),e._v(" 是光标所在行的上一行行首插入需要录入的文本。")]),e._v(" "),s("p",[s("code",[e._v("s")]),e._v(" 删除光标所在处的字符然后插入需要录入的文本。")]),e._v(" "),s("p",[s("code",[e._v("S")]),e._v("删除光标所在行，在当前行的行首开始插入需要录入的文本。")]),e._v(" "),s("p",[e._v("还有一个可能经常用到的就是 "),s("code",[e._v("cw")]),e._v(" ，删除从光标处开始到该单词结束的所有字符，然后插入需要录入的文本（这个命令是两个字符的合体 cw ）。")]),e._v(" "),s("p",[e._v("VIM 的命令模式")]),e._v(" "),s("p",[e._v("关于命令模式上文有提到过，下面主要来列举几个常用的命令模式操作（命令输入完以后，需要按下 Enter 键去执行命令）：")]),e._v(" "),s("p",[e._v("文本的行号设置最好不要设置在配置文件中（因为复制文件的时候行号的出现会很麻烦），在命令行实现就好。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":set nu\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("该命令会显示行号。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":set nonu\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("该命令会取消行号。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("定位到 n 行。")]),e._v(" "),s("p",[e._v("VIM 进行关键字的查找。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/{目标字符串}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("如：/zempty  会在文本中匹配 zempty 的地方高亮。")]),e._v(" "),s("p",[e._v("查找文本中匹配的目标字符串，查到以后，输入键盘上的 n 会去寻找下一个匹配，N 会去寻找上一个匹配。")]),e._v(" "),s("p",[e._v("VIM 处理大小写的区分")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":set ic\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("编辑器将不会区分大小写，如果你进行该设置之后，进行关键字查询如 /zempty 如果文本中有 Zempty ,zEmpty,....,只要是字符相同不会区分大小写都会进行匹配。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":set noic\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("区分大小写的查询。")]),e._v(" "),s("p",[e._v("VIM 删除多行文本")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":n1,n2d\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("n1 和 n2 指的是起始行号和结束行号，d 是删除关键字")]),e._v(" "),s("p",[e._v("VIM 处理文本的替换")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":{作用范围}s/{目标}/{替换}/{替换的标志}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("作用范围分为当前行、全文、选区等等。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":s/zempty/handsome/g\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将会把当前光标所在行的 zempty 替换成 handsome")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":%s/zempty/handsome/g\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将会把全文中的 zempty 替换成 handsome")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":n1,n2s/zempty/handsome/g\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这里的 n1 和 n2 值得是行号，将会替换掉 n1 到 n2 的所有 zempty 为 handsome.")]),e._v(" "),s("p",[e._v("选区，在可视模式下选择区域后输入"),s("code",[e._v(":")]),e._v("，VIM 会自动补全为 "),s("code",[e._v(":'<,'>")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":'<,'>s/zempty/handsome/g\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这个操作咋一看起来有点懵逼，这个操作是可视模式 (Visual-mode) 下选区中的替换操作（可视模式下文会谈到），可视模式下输入"),s("code",[e._v("：")]),e._v("会自动补全 "),s("code",[e._v(":'<,'>")]),e._v(" 这个是可视范围下的操作范围，类似于 % 和 n1,n2，代表操作的文本范围，上面的例子就是替换掉可视区域的 zempty 为 handsome。")]),e._v(" "),s("p",[e._v("下面来谈谈替换的标志。")]),e._v(" "),s("p",[e._v("上文中命令结尾的 "),s("code",[e._v("g")]),e._v("即是替换标志之一，表示全局 "),s("code",[e._v("global")]),e._v("替换（即替换目标的所有出现）。 还有很多其他有用的替换标志：")]),e._v(" "),s("p",[e._v("空替换标志表示只替换从光标位置开始，目标的第一次出现")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":s/zempty/handsome\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("作用于当前行，从光标处开始查找替换，仅仅替换第一次匹配 zempty 的地方为handsome 。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":%s/zempty/handsome\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("替换掉文件中所有行第一次出现 zempty 的地方为 handsome 。")]),e._v(" "),s("p",[e._v("i 表示大小写不敏感查找，I 表示大小写敏感：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":%s/zempty/handsome/i\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("替换掉所有行第一个出现 zempty (不区分大小写) 为 handsome 。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":%s/zempty/handsome/gi\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("替换掉所有行出现 zempty (不区分大小写) 为 handsome 。")]),e._v(" "),s("p",[e._v('c 表示需要确认，例如全局查找"zempty"替换为"handsome"并且需要确认：')]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":%s/zempty/handsome/gc\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("VIM 执行 Linux 命令")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":!command\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("code",[e._v(":")]),e._v(" 后面紧跟着"),s("code",[e._v("!")]),e._v(" ，"),s("code",[e._v("!")]),e._v(" 后面紧跟着 linux 命令（ command 指操作 Linux 系统的一系列命令，如创建文件，新建文件夹，查询文件的属性的等），例子如下，")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" :!date\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("执行 date 命令显示时间，执行完命令以后按下键盘上的 Enter 就会返回到文件。")]),e._v(" "),s("p",[e._v("VIM 执行命令，并且添加结果至操作文本光标处")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":r !command\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v(": 后面紧跟着 r , r 后面是空格，紧接着是 !command( command 解释同上)，例子如下，")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":r !date \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("执行 date 命令显示时间，并且添加命令结果到文本中。")]),e._v(" "),s("p",[e._v("定义快捷键")]),e._v(" "),s("p",[e._v("下面举例说明：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":map ^M I#<ESC>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面的例子也就是通过快捷键 "),s("code",[e._v("Ctrl + m")]),e._v("在文件光标处所在行的行首插入 # （ # 代表注释）。")]),e._v(" "),s("p",[s("code",[e._v(":")]),e._v("后面的 map 是关键字 ，后面是 key 和 value 。")]),e._v(" "),s("p",[e._v("key 对应的是 ^M ， 这个 key 需要强调一下 ^M 是 Ctrl + v + m 打出来的（按下这三个键，VIM 会显示成 ^M ）,^M 代表快捷键是"),s("code",[e._v("Ctrl + m")]),e._v(" , Ctrl + v + n 就是 ^N ,代表快捷键是 Ctrl + n 。Ctrl + v + x 就是 ^X (这里的 x 是代表 26 个字母中的任意一个) 代表快捷键"),s("code",[e._v("Ctrl + x")]),e._v("(这里的 x 是代表 26 个字母中的任意一个)。")]),e._v(" "),s("p",[e._v("value 对应的是 "),s("code",[e._v("I#<ESC>")]),e._v(",表示按下快捷键以后执行的相应操作，"),s("code",[e._v("I")]),e._v("是切换光标至行首并切换到编辑模式，"),s("code",[e._v("#")]),e._v("是行首输入的内容（ # 是VIM 文件中的注释符号 ），"),s("code",[e._v("<ESC>")]),e._v(" 是退出编辑模式。")]),e._v(" "),s("p",[e._v("举例如下：")]),e._v(" "),s("p",[s("code",[e._v(":map ^D Ahelloworld<ESC>")]),e._v("表示在文件的光标所在行的行尾，添加 helloworld 字符串。")]),e._v(" "),s("p",[e._v("使用 ab")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":ab email kickcodeman@gmail.com\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("code",[e._v(":")]),e._v(" 后面的 ab 是关键字 ,该命令执行后，然后切换到编辑模式下,输入 email 会把输入的 email 自动替换成 kickcodeman@gmail.com。")]),e._v(" "),s("p",[e._v("这个命令主要是处理频繁输入同样的长串字符串。")]),e._v(" "),s("p",[e._v("VIM 的正常模式（Normal-model）")]),e._v(" "),s("p",[e._v("VIM 正常模式下，主要进行的操作有光标的移动，复制文本，删除文本，黏贴文本等。")]),e._v(" "),s("p",[e._v("快速移动光标")]),e._v(" "),s("p",[e._v("几个重要的快捷键")]),e._v(" "),s("p",[e._v("请记住这几个快捷键 "),s("code",[e._v("h,j,k,l")]),e._v(" 这几个按键主要是用来快速移动光标的，"),s("code",[e._v("h")]),e._v(" 是向左移动光标，"),s("code",[e._v("l")]),e._v(" 是向右移动光标，"),s("code",[e._v("j")]),e._v(" 是向下移动光标，"),s("code",[e._v("k")]),e._v(" 是向上移动光标，"),s("code",[e._v("h , j , k ,l")]),e._v("在主键盘区完全可以取代键盘上的 "),s("code",[e._v("↑ ,↓ ,← , →")]),e._v("的功能。")]),e._v(" "),s("p",[e._v("在当前行上移动光标")]),e._v(" "),s("p",[s("code",[e._v("0")]),e._v(" 移动到行头")]),e._v(" "),s("p",[s("code",[e._v("^")]),e._v("  移动到本行的第一个不是 blank 字符")]),e._v(" "),s("p",[s("code",[e._v("$")]),e._v(" 移动到行尾")]),e._v(" "),s("p",[s("code",[e._v("g_")]),e._v(" 移动到本行最后一个不是 blank 字符的位置")]),e._v(" "),s("p",[s("code",[e._v("w")]),e._v(" 光标移动到下一个单词的开头")]),e._v(" "),s("p",[s("code",[e._v("e")]),e._v(" 光标移动到下一个单词的结尾")]),e._v(" "),s("p",[s("code",[e._v("fa")]),e._v(" 移动到本行下一个为 a 的字符处，fb 移动到下一个为 b 的字符处")]),e._v(" "),s("p",[s("code",[e._v("nfa")]),e._v("移动到本行光标处开始的第 n 个 字符为 a 的地方（n 是 1，2，3，4 ... 数字）")]),e._v(" "),s("p",[s("code",[e._v("Fa")]),e._v(" 同 "),s("code",[e._v("fa")]),e._v(" 一样，光标移动方向同"),s("code",[e._v("fa")]),e._v(" 相反")]),e._v(" "),s("p",[s("code",[e._v("nFa")]),e._v(" 同 "),s("code",[e._v("nfa")]),e._v(" 类似，光标移动方向同 "),s("code",[e._v("nfa")]),e._v("相反")]),e._v(" "),s("p",[s("code",[e._v("ta")]),e._v("移动光标至 a 字符的前一个字符")]),e._v(" "),s("p",[s("code",[e._v("nta")]),e._v(" 移动到第二个 a 字符的前一个字符处")]),e._v(" "),s("p",[s("code",[e._v("Ta")]),e._v("同 "),s("code",[e._v("ta")]),e._v(" 移动光标方向相反")]),e._v(" "),s("p",[s("code",[e._v("nTa")]),e._v(" 同"),s("code",[e._v("nta")]),e._v(" 移动光标方向相反")]),e._v(" "),s("p",[e._v("跨行移动光标")]),e._v(" "),s("p",[s("code",[e._v("nG")]),e._v(" 光标定位到第 n 行的行首")]),e._v(" "),s("p",[s("code",[e._v("gg")]),e._v(" 光标定位到第一行的行首")]),e._v(" "),s("p",[s("code",[e._v("G")]),e._v(" 光标定位到最后一行的行首")]),e._v(" "),s("p",[s("code",[e._v("%")]),e._v("  匹配括号移动，包括 ( , { , [ 需要把光标先移动到括号上")]),e._v(" "),s("p",[s("code",[e._v("*")]),e._v(" 和"),s("code",[e._v("#")]),e._v(" 匹配光标当前所在的单词，移动光标到下一个（或者上一个）匹配的单词（ "),s("code",[e._v("*")]),e._v(" 是下一个，"),s("code",[e._v("#")]),e._v("是上一个）")]),e._v(" "),s("p",[e._v("翻页操作")]),e._v(" "),s("p",[s("code",[e._v("ctrl+f")]),e._v(" 查看下一页内容")]),e._v(" "),s("p",[s("code",[e._v("ctrl+b")]),e._v(" 查看上一页内容")]),e._v(" "),s("p",[e._v("VIM 的复制，黏贴 ，删除")]),e._v(" "),s("p",[e._v("三个重要的快捷键 "),s("code",[e._v("d")]),e._v(" , "),s("code",[e._v("y")]),e._v(" , "),s("code",[e._v("p")])]),e._v(" "),s("p",[s("code",[e._v("d")]),e._v(" 是删除的意思，通常搭配一个字符 ( 删除范围 ) 实现删除功能，常用的如下：")]),e._v(" "),s("p",[s("code",[e._v("dw")]),e._v("删除一个单词")]),e._v(" "),s("p",[s("code",[e._v("dnw")]),e._v(" 删除 n 个单词，")]),e._v(" "),s("p",[s("code",[e._v("dfa")]),e._v(" 删除光标处到下一个 a 的字符处（ fa 定位光标到 a 处 ）")]),e._v(" "),s("p",[s("code",[e._v("dnfa")]),e._v(" 删除光标处到第 n 个 a 的字符处")]),e._v(" "),s("p",[s("code",[e._v("dd")]),e._v(" 删除一整行")]),e._v(" "),s("p",[s("code",[e._v("ndd")]),e._v(" 删除光标处开始的 n 行")]),e._v(" "),s("p",[s("code",[e._v("d$")]),e._v(" 删除光标到本行的结尾")]),e._v(" "),s("p",[s("code",[e._v("dH")]),e._v(" 删除文本开始到光标所在行的文本")]),e._v(" "),s("p",[s("code",[e._v("dG")]),e._v("删除光标所在行到文本的结束")]),e._v(" "),s("p",[s("code",[e._v("y")]),e._v("是复制的意思，通常搭配一个字符（复制范围）实现复制的功能，常用的如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("yw` 复制一个单词，还有` ynw\nyfa` 复制光标到下一个 a 的字符处,还有`ynfa\nyy` 复制一行，还有 `nyy\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[s("code",[e._v("y$")]),e._v(" 复制光标到本号的结尾")]),e._v(" "),s("p",[s("code",[e._v("yH")]),e._v(" 复制文本开始到光标所在行的文本")]),e._v(" "),s("p",[s("code",[e._v("yG")]),e._v(" 复制光标所在行到文本的结束")]),e._v(" "),s("p",[s("code",[e._v("p")]),e._v(" ，"),s("code",[e._v("P")]),e._v("是黏贴的意思，当执行完复制或者黏贴的命令以后，VIM 会把文本寄存起来。")]),e._v(" "),s("p",[s("code",[e._v("p")]),e._v(" 在光标后开始复制")]),e._v(" "),s("p",[s("code",[e._v("P")]),e._v(" 大写的 P 光标前开始复制")]),e._v(" "),s("p",[e._v("撤销操作和恢复")]),e._v(" "),s("p",[s("code",[e._v("u")]),e._v("撤销刚才的操作")]),e._v(" "),s("p",[s("code",[e._v("ctrl + r")]),e._v(" 恢复撤销操作")]),e._v(" "),s("p",[e._v("删除字符操作和替换")]),e._v(" "),s("p",[s("code",[e._v("x")]),e._v(" 删除光标当前所在的字符")]),e._v(" "),s("p",[s("code",[e._v("r")]),e._v(" 替换掉光标当前所在的字符")]),e._v(" "),s("p",[s("code",[e._v("R")]),e._v(" 替换掉从光标开始以后的所有字符，除非 "),s("code",[e._v("<ESC >")]),e._v(" 退出，或者 "),s("code",[e._v("jj")]),e._v("（代替 "),s("ESC",[e._v(" 上文有提到）退出。")])],1),e._v(" "),s("p",[e._v("大小写转换")]),e._v(" "),s("p",[s("code",[e._v("~")]),e._v("将光标下的字母改变大小写\n"),s("code",[e._v("3~")]),e._v("将光标位置开始的3个字母改变其大小写\n"),s("code",[e._v("g~~")]),e._v("改变当前行字母的大小写\n"),s("code",[e._v("gUU")]),e._v("将当前行的字母改成大写\n"),s("code",[e._v("guu")]),e._v("将当前行的字母全改成小写\n"),s("code",[e._v("3gUU")]),e._v("将从光标开始到下面3行字母改成大写\n"),s("code",[e._v("gUw")]),e._v("将光标下的单词改成大写。\n"),s("code",[e._v("guw")]),e._v(" 将光标下的单词改成小写")]),e._v(" "),s("p",[e._v("VIM 的重复命令\n. 该命令是重复上一个操作的命令\nn"),s("command",[e._v("重复某个命令 n 次，如 10p复制 10 次，10dd 删除十次。")])],1),e._v(" "),s("p",[e._v("VIM 可视化模式（Visual-mode)\nv,V,Ctrl+v\nv字符可视化，按下键盘上的v以后，屏幕底部应该会有一个 VISUAl 的提示，操作 h,j,k,l就会选中文本，继续按 v 退出可视化模式。")]),e._v(" "),s("p",[e._v("V 行可视化，按下键盘上的 V 以后，屏幕底部应该有一个 VISUAL LINE 的提示，操作 j,k 可以向上或者向下以行为单位选中文本，继续按下 V 退出可视化模式。\nCtrl+v 块状可视化，按下键盘上的 Ctrl+v 以后，屏幕底部应该会有一个提示 VISUALBLOCK ，可以通过 h,j,k,l 块状的操作选择区域，这是很多编辑器都不可以做到的，继续按下 Ctrl+v 会退出可视化模式。")]),e._v(" "),s("p",[e._v("可视化模式下操作文本\n可视化模式下选择操作区域以后，按下 d会删除选择的区域，按下 y 会复制选择的区域，按下 p 会黏贴选择的区域。")]),e._v(" "),s("p",[e._v('可视化模式下 v 的特殊操作\n当操作的文本光标在 “”，‘’ ，（），{} ，[（双引号，单引号，小括号，大括号，中括号）当中的时候,可以通过 va"选中 ”“ 内的所有内容包括双引号 ， vi" 选中 "" 内的所有内容，不包括 ""。va,vi 会快速选择区域，va 后面会紧跟一个区域结束标志，a 会选中结束符标志，i 就不会。\n例子如下：\n"hello world [VIM is so strong],{we all can master vim skill}"\n假设当前光标定位在上面的文本 M 处：\nva] 操作将会选中一下文本：\n“hello world [VIM is so strong],{we all can master vim skill}“\nvi] 操作将会选中如下的区域，没有包含 []：\n“hello world [VIM is so strong],{we all can master vim skill}“')]),e._v(" "),s("p",[e._v("块区域下的特殊操作\nCtrl+v 选中块区域以后，按下大写的 I 或者 A 可以在区域的前面或者后面输入内容，按下 jj 或者 "),s("ESC",[e._v(",可以看到选中的区域前面或者后面会有输入的内容。")])],1),e._v(" "),s("p",[e._v("VIM 的代码提示功能\n在编辑模式下 ，快捷键 Ctrl+n 或者 Ctrl+p 会有代码提示功能，我们可以实现快速录入的效果。")]),e._v(" "),s("p",[e._v("VIM 的宏录制\n假设需要操作的文本如下,需要将如下的多行文本的首行键入一个 tab 键。\nhello\nhello world\nhello world , vim")]),e._v(" "),s("p",[e._v("宏录制的录制操作\n先将光标移动到第一行，在普通模式下按下 q 键（宏录制是 q 键启动的),在按一个 a （字母随意）,表示该宏注册为 a  ，按下 I 在行首插入一个 tab 键，按下jj或者 "),s("ESC",[e._v("退出编辑模式,按下 j 将光标移动到下一行行首，最后按下 q 键完成录制操作（宏录制是 q 键结束的）。总结上面例子的操作流程：\nq → a → I → tab → jj → j → q上面的例子成功地把在行首插入 tab 的功能录制了下来，那么如何应用到其他行呢？")])],1),e._v(" "),s("p",[e._v("宏录制的使用\n上述的例子，在正常模式下，按 @a执行宏录制的一系列动作，将会在第二行执行插入 tab 。@@ 是对上一次宏使用的重复操作。\nn@a 就会执行 n 次一系列的动作。\n使用宏录制可以一次执行一系列的操作，可以针对一些重复度较高的操作进行宏录制。\n结束")])])],1)],1)}),[],!1,null,null,null);v.default=_.exports}}]);