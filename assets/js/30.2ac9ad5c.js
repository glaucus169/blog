(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{471:function(a,t,e){"use strict";e.r(t);var s=e(27),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"linux设置macos时间机器server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux设置macos时间机器server"}},[a._v("#")]),a._v(" linux设置macOS时间机器server")]),a._v(" "),e("h2",{attrs:{id:"安装需要的包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装需要的包"}},[a._v("#")]),a._v(" 安装需要的包")]),a._v(" "),e("p",[e("code",[a._v("sudo apt install netatalk avahi-daemon")])]),a._v(" "),e("h2",{attrs:{id:"编辑netatalk配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编辑netatalk配置文件"}},[a._v("#")]),a._v(" 编辑netatalk配置文件")]),a._v(" "),e("p",[e("code",[a._v("sudo vim /etc/netatalk/afp.conf")])]),a._v(" "),e("h2",{attrs:{id:"添加time-machine配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加time-machine配置"}},[a._v("#")]),a._v(" 添加Time Machine配置")]),a._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[Time Machine]\npath = /mnt/data/backup/time_machine\ntime machine = yes\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"创建目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建目录"}},[a._v("#")]),a._v(" 创建目录")]),a._v(" "),e("p",[e("code",[a._v("sudo mkdir -p /mnt/data/backup/time_machine")])]),a._v(" "),e("p",[e("code",[a._v("sudo chown nobody:nogroup /mnt/data/backup/time_machine")])]),a._v(" "),e("p",[e("code",[a._v("sudo chmod 777 /mnt/data/backup/time_machine")])]),a._v(" "),e("h2",{attrs:{id:"重启netatalk服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启netatalk服务"}},[a._v("#")]),a._v(" 重启netatalk服务")]),a._v(" "),e("p",[e("code",[a._v("sudo systemctl restart netatalk")])]),a._v(" "),e("h2",{attrs:{id:"在mac上进行备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在mac上进行备份"}},[a._v("#")]),a._v(" 在mac上进行备份")]),a._v(" "),e("p",[a._v("时间机器中选择磁盘，连接linux server即可。")])])}),[],!1,null,null,null);t.default=n.exports}}]);