(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{520:function(s,t,e){"use strict";e.r(t);var a=e(27),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"screen的进阶用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#screen的进阶用法"}},[s._v("#")]),s._v(" screen的进阶用法")]),s._v(" "),e("h2",{attrs:{id:"以detatch模式创建daemon会话"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#以detatch模式创建daemon会话"}},[s._v("#")]),s._v(" 以detatch模式创建daemon会话")]),s._v(" "),e("p",[e("code",[s._v("screen -dmS <name>")])]),s._v(" "),e("h2",{attrs:{id:"向会话窗口中发送文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#向会话窗口中发送文本"}},[s._v("#")]),s._v(" 向会话窗口中发送文本")]),s._v(" "),e("p",[e("code",[s._v("screen -S <name> -X stuff <text>")])]),s._v(" "),e("p",[s._v("例如："),e("code",[s._v("screen -S <name> -X stuff abc")]),s._v("，当attach之后，窗口中已经有了abc")]),s._v(" "),e("p",[s._v("如果想执行命令：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" -S "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -X stuff "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<command> '),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" -S "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -X stuff "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<command> '),e("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),s._v("\n---\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" -S centos -X stuff  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("$'<command> "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n---\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" -S new_screen -X stuff "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cd /dir\n"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"清理screen窗口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清理screen窗口"}},[s._v("#")]),s._v(" 清理screen窗口")]),s._v(" "),e("p",[e("code",[s._v("screen -S <name> -X quit")])])])}),[],!1,null,null,null);t.default=n.exports}}]);