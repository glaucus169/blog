(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{497:function(t,i,s){"use strict";s.r(i);var e=s(27),r=Object(e.a)({},(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"小红书图片爬虫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小红书图片爬虫"}},[t._v("#")]),t._v(" 小红书图片爬虫")]),t._v(" "),s("p",[t._v("发现个小红书博主的笔记图片很nice，想批量下载下来。找了下网上提供的小红书图片接口解析服务，发现只能单个笔记下载，不能批量下载作者所有笔记。而且有的坑爹玩意还要收费。干脆自己整一个，然后发现小红书web端的功能非常有限，几乎可以说没有，估计是出于保护自身产品生态的原因。不过小程序抓包还是比较方便的。")]),t._v(" "),s("h2",{attrs:{id:"加密算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密算法"}},[t._v("#")]),t._v(" 加密算法")]),t._v(" "),s("p",[t._v("抓包过程中唯一的阻碍是小红书的api接口有一个X-sign参数，从网上翻了下大佬的帖子找到了这个加密算法，"),s("code",[t._v("x-sign = 'X' + md5(url处于域名后边部分+'WSUDD')")])]),t._v(" "),s("p",[t._v("代码开源在github，仓库地址：https://github.com/storyxc/xiaohongshu_spider")]),t._v(" "),s("p",[t._v("使用： "),s("code",[t._v("python3 -m spider -u uid -l limit")])]),t._v(" "),s("ul",[s("li",[t._v("uid为作者的小红书id，可以在作者详情页找到")]),t._v(" "),s("li",[t._v("limit为下载页数限制")])])])}),[],!1,null,null,null);i.default=r.exports}}]);