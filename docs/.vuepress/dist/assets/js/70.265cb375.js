(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{511:function(t,s,a){"use strict";a.r(s);var r=a(27),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"腾讯云服务器存在对外攻击行为的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云服务器存在对外攻击行为的处理"}},[t._v("#")]),t._v(" 腾讯云服务器存在对外攻击行为的处理")]),t._v(" "),a("blockquote",[a("p",[t._v("前两天看到腾讯云的轻量应用服务器打折，新人优惠价很诱人，2核4g内存8M带宽 80G SSD 每月1200G流量只要74/年，一直在用的阿里云1核2G内存5M带宽 40G SSD 每月1000G流量都要96/年，赶紧跳了阿里云的车换成腾讯云了。")])]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("换服务器的第二天就收到了腾讯云的告警邮件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://io.storyxc.com/image-20211223102718154.png",alt:"image-20211223102718154"}})]),t._v(" "),a("p",[t._v("卧槽？！ 看到6379立马反应过来是redis没设置密码了，ssh看一下啥情况。")]),t._v(" "),a("h2",{attrs:{id:"排查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排查"}},[t._v("#")]),t._v(" 排查")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("检查下定时任务")]),t._v(" "),a("p",[a("code",[t._v("crontab -l")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://io.storyxc.com/image-20211223102907288.png",alt:"image-20211223102907288"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("查看tcp、udp连接")]),t._v(" "),a("p",[a("code",[t._v('netstat -ano|egrep "tcp|udp"')])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://io.storyxc.com/image-20211223103331473.png",alt:"image-20211223103331473"}})])])]),t._v(" "),a("p",[t._v("​\t\t果然，redis没设置密码，也没bind固定ip被人用来redis登录爆破了")]),t._v(" "),a("p",[t._v("​\t\t增加redis密码，绑定ip，修改服务器密码并重启")])])}),[],!1,null,null,null);s.default=e.exports}}]);