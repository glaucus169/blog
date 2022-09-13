(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{510:function(a,t,s){"use strict";s.r(t);var r=s(27),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux服务器文件目录共享映射配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux服务器文件目录共享映射配置"}},[a._v("#")]),a._v(" Linux服务器文件目录共享映射配置")]),a._v(" "),s("p",[a._v("使用场景：由于公司没有单独的文件服务器/nas之类的共享存储，图片之类的也没有上云，目前业务中上传的文件也是放在应用服务器当中的。生产环境都是高可用的多节点部署，这样就会产生问题。比如用户上传一张图片，请求被分发到A服务器中，由于图片访问的域名是统一的B服务器域名，上传完成后用B服务器的域名去访问静态文件就会404。后续我们考虑搭建fastdfs来统一管理文件。目前的临时解决方案是通过配置服务器共享目录来实现文件在多个节点服务器间的同步。")]),a._v(" "),s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("环境：CentOS 7.6")])]),a._v(" "),s("li",[s("p",[a._v("分别在A、B两台服务器上安装nfs和rpcbind")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("yum install nfs-utils rpcbind")])])])])]),a._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),s("p",[a._v("比如我们暴露的静态资源访问的域名是B服务器的，也就是说要让落在A服务器上传的文件同步写入到B服务器上，这样才能正常访问。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("在B服务器（被映射的服务器）上修改/etc/exports文件，把指定的目录暴露给A服务器并分配权限")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# /需要暴露的目录 A服务器IP（rw,async,no_root_squash)")]),a._v("\n/data/images "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".111.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("rw,async,no_root_squash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("修改完后需要使配置立即生效，执行"),s("code",[a._v("exportfs -arv")]),a._v("命令")])])]),a._v(" "),s("h2",{attrs:{id:"启动nfs服务和rpcbind服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动nfs服务和rpcbind服务"}},[a._v("#")]),a._v(" 启动nfs服务和rpcbind服务")]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("service rpcbind start")])])]),a._v(" "),s("li",[s("p",[s("code",[a._v("service nfs start")])])]),a._v(" "),s("li",[s("p",[a._v("开启4046端口")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("-A INPUT -p tcp -m state --state NEW -m tcp --dport 4046 -j ACCEPT")])])])])]),a._v(" "),s("h2",{attrs:{id:"在a服务器中挂载远程目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在a服务器中挂载远程目录"}},[a._v("#")]),a._v(" 在A服务器中挂载远程目录")]),a._v(" "),s("p",[a._v("执行命令："),s("code",[a._v("mount -o rw -t nfs B服务器IP:/B服务器暴露的路径 /要映射的本机(A服务器)的路径")])]),a._v(" "),s("p",[a._v("例如："),s("code",[a._v("mount -o rw -t nfs 192.168.111.2:/data/images /data/images")])]),a._v(" "),s("h2",{attrs:{id:"验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[a._v("#")]),a._v(" 验证")]),a._v(" "),s("p",[a._v("可以在A服务器的/data/images下上传一些文件，然后看B服务器中的/data/images目录中是否同步，如果同步了则说明挂载成功，共享目录就配置完成了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);