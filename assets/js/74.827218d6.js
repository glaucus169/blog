(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{516:function(s,e,a){"use strict";a.r(e);var t=a(27),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux私钥登陆提示server-refused-our-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux私钥登陆提示server-refused-our-key"}},[s._v("#")]),s._v(" Linux私钥登陆提示server refused our key")]),s._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("p",[s._v("家庭内网装了个物理机的Ubuntu server，用的最新版本的22.04，然后用windows端的mobaxterm和navicat使用ssh私钥连接内网服务器时返回了"),a("code",[s._v("Server refused our key")]),s._v("的异常")]),s._v(" "),a("h2",{attrs:{id:"问题原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题原因"}},[s._v("#")]),s._v(" 问题原因")]),s._v(" "),a("p",[a("code",[s._v("openssh 8.8")]),s._v("开始默认禁用了使用"),a("code",[s._v("SHA-1")]),s._v("哈希算法的"),a("code",[s._v("RSA")]),s._v("签名,看了一下ubuntu server 22.04的默认openssh版本：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("➜  ~ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -V\nOpenSSH_8.9p1 Ubuntu-3, OpenSSL "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v(".2 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" Mar "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("https://www.openssh.com/txt/release-8.8")]),s._v(" "),a("p",[s._v("This release disables RSA signatures using the SHA-1 hash algorithm\nby default. This change has been made as the SHA-1 hash algorithm is\ncryptographically broken, and it is possible to create chosen-prefix\nhash collisions for <USD$50K [1]")])]),s._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加配置")]),s._v("\nPubkeyAcceptedKeyTypes +ssh-rsa\n\n\nsystemctl restart sshd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);