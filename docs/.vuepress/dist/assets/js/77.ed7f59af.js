(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{519:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux中使用selenium"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux中使用selenium"}},[s._v("#")]),s._v(" Linux中使用selenium")]),s._v(" "),a("h2",{attrs:{id:"安装linux版chrome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装linux版chrome"}},[s._v("#")]),s._v(" 安装linux版chrome")]),s._v(" "),a("h3",{attrs:{id:"centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[s._v("#")]),s._v(" centos")]),s._v(" "),a("p",[a("code",[s._v("wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm")])]),s._v(" "),a("p",[a("code",[s._v("yum install google-chrome-stable_current_x86_64.rpm")])]),s._v(" "),a("h2",{attrs:{id:"安装相关库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装相关库"}},[s._v("#")]),s._v(" 安装相关库")]),s._v(" "),a("p",[a("code",[s._v("yum install mesa-libOSMesa-devel gnu-free-sans-fonts wqy-zenhei-fonts")])]),s._v(" "),a("h3",{attrs:{id:"ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[s._v("#")]),s._v(" ubuntu")]),s._v(" "),a("p",[a("code",[s._v("wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb")]),s._v(" "),a("code",[s._v("sudo dpkg -i google-chrome-stable_current_amd64.deb")])]),s._v(" "),a("blockquote",[a("p",[s._v("安装报错")]),s._v(" "),a("p",[s._v("dpkg: error processing package google-chrome-stable (--install):\ndependency problems - leaving unconfigured\nProcessing triggers for mime-support (3.64ubuntu1) ...\nProcessing triggers for man-db (2.9.1-1) ...\nErrors were encountered while processing:\ngoogle-chrome-stable")])]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("sudo apt-get install -f")]),s._v("修复依赖关系，")]),s._v(" "),a("p",[a("em",[s._v("如果系统中有某个软件包不满足依赖条件,这个命令就会自动修复,将要安装那个软件包依赖的软件包。")])]),s._v(" "),a("h2",{attrs:{id:"安装chromedriver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装chromedriver"}},[s._v("#")]),s._v(" 安装chromedriver")]),s._v(" "),a("p",[s._v("淘宝源地址："),a("code",[s._v("http://npm.taobao.org/mirrors/chromedriver/")])]),s._v(" "),a("p",[s._v("需要根据不同版本的chrome进行选择下载，比如我安装的chrome是96版本的，那么chromedriver就需要找对应的96版本")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://io.storyxc.com/image-20220104161559216.png",alt:"image-20220104161559216"}})]),s._v(" "),a("p",[s._v("这里选择一个最近更新的即可")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://io.storyxc.com/image-20220104161718088.png",alt:"image-20220104161718088"}})]),s._v(" "),a("p",[s._v("这里下载linux版本,下载后解压，把解压后的chromedriver可执行文件移动到path下，例如"),a("code",[s._v("/usr/bin")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://npm.taobao.org/mirrors/chromedriver/96.0.4664.45/chromedriver_linux64.zip\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" chromedriver_linux64.zip\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" chromedriver /usr/bin\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/bin/chromedriver\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"使用python测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用python测试"}},[s._v("#")]),s._v(" 使用python测试")]),s._v(" "),a("p",[s._v("linux下无头浏览器模式：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" webdriver\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("webdriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("options "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Options\n\nchrome_options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nchrome_options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--headless'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nchrome_options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--no-sandbox'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nchrome_options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--disable-gpu'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nchrome_options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--disable-dev-shm-usage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndriver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" webdriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("chrome_options"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("chrome_options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.baidu.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./baidu.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("page_source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);