(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{529:function(t,s,a){"use strict";a.r(s);var r=a(27),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iterm2配置ssh快速连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterm2配置ssh快速连接"}},[t._v("#")]),t._v(" iterm2配置ssh快速连接")]),t._v(" "),a("p",[t._v("macos生态的ssh工具有很多，但是试了很多还是感觉很差劲，不如windows生态的mobaxterm和xshell，可惜这两个软件没有mac的版本。不过iterm2作为mac生态下的终端工具代表倒是很简洁方便，但是没有专门的ssh工具那种简易的远程连接配置，需要自己动手折腾一下才可以。")]),t._v(" "),a("h2",{attrs:{id:"安装iterm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装iterm2"}},[t._v("#")]),t._v(" 安装iterm2")]),t._v(" "),a("p",[t._v("官网下载，不赘述。")]),t._v(" "),a("h2",{attrs:{id:"配置profile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置profile"}},[t._v("#")]),t._v(" 配置profile")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("command+,")]),t._v("打开偏好设置，选择profiles"),a("img",{attrs:{src:"https://io.storyxc.com/image-20211120112843166.png",alt:"image-20211120112843166"}})])]),t._v(" "),a("li",[a("p",[t._v("新建一个profile设置，将command设置从login shell改为command，并输入需要执行的ssh指令")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://io.storyxc.com/image-20211120113120836.png",alt:"image-20211120113120836"}})])]),t._v(" "),a("li",[a("p",[t._v("切换到advanced选项卡，选择编辑triggers触发器。新增一个触发器，action选择send text，触发的表达式改为"),a("code",[t._v("root@xxx.xxx.xxx.xxx's password")]),t._v("，参数改为登陆账户的密码+"),a("code",[t._v("\\n")]),t._v("，这里注意一定要加\\n代表输入回车，不然就会卡在输入密码那里需要手动回车才能登陆，然后勾选上instant立即触发。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://io.storyxc.com/image-20211120113408181.png",alt:"image-20211120113408181"}})])])]),t._v(" "),a("p",[t._v("​")]),t._v(" "),a("p",[t._v("​\t\t"),a("img",{attrs:{src:"https://io.storyxc.com/image-20211120114241239.png",alt:"image-20211120114241239"}})]),t._v(" "),a("p",[t._v("这里触发器的表达式即是输入ssh命令时，服务器给出的需要输入密码的提示文字，所以想配置什么服务器的触发器直接改个登陆名和服务器地址就可以")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://io.storyxc.com/image-20211120114556561.png",alt:"image-20211120114556561"}})]),t._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("配置完毕后，可以根据菜单栏的profiles选项卡，选择需要连接的服务器即可")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://io.storyxc.com/image-20211120114848453.png",alt:"image-20211120114848453"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://io.storyxc.com/image-20211120114946181.png",alt:"image-20211120114946181"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);