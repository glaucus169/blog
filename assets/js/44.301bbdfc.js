(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{486:function(a,s,t){"use strict";t.r(s);var l=t(27),c=Object(l.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mybatis的classpath配置导致的jar包读取问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis的classpath配置导致的jar包读取问题"}},[a._v("#")]),a._v(" mybatis的classpath配置导致的jar包读取问题")]),a._v(" "),t("p",[a._v("今天同事碰到个问题，在服务中引入了另一个服务的mapper文件后找不到其中配置的resultMap引发报错。后经排查是因为配置文件中classpath的配置问题引起的。")]),a._v(" "),t("p",[t("code",[a._v("classpath:")]),a._v(": 只会从当前服务的class目录下寻找文件")]),a._v(" "),t("p",[t("code",[a._v("classpath*:")]),a._v(": 会从class目录下寻找文件，还会从引入的依赖（打包后lib文件夹中的jar包）中寻找文件")]),a._v(" "),t("p",[a._v("所以当把mybatis的classpath配置从"),t("code",[a._v("classpath:")]),a._v("改为"),t("code",[a._v("classpath*:")]),a._v("后问题能解决了")])])}),[],!1,null,null,null);s.default=c.exports}}]);