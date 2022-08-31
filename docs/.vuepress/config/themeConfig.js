const nav = require("./nav.js");
const htmlModules = require("./htmlModules.js");

// Theme Config
module.exports = {
  nav,
  sidebarDepth: 2,
  repo: "glaucus",
  searchMaxSuggestions: 10,
  lastUpdated: "上次更新",
  docsRepo: "glaucus",
  docsDir: "docs",
  docsBranch: "main",
  editLinks: true,
  editLinkText: "编辑",

  // Vdoing Theme Config
  sidebar: { mode: "structuring", collapsable: false },

  updateBar: {
    showToArticle: false
  },

  category: true,
  tag: true,
  archive: true,

  author: {
    name: "glaucus",
    href: "https://github.com/glaucus169"
  },

  social: {
    icons: [
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/glaucus169"
      },
      {
        iconClass: "icon-gitee",
        title: "Gitee",
        link: "https://gitee.com/glaucusZh"
      },
      {
        iconClass: "icon-youjian",
        title: "发邮件",
        link: "mailto:storyxc@163.com"
      }
    ]
  },

  footer: {
    createYear: 2019,
    copyrightInfo: [
      '<a href="http://storyxc.com" target="_blank" style="font-weight:bold">story</a>',
      ' | ',
      '<a href="http://beian.miit.gov.cn/" target=_blank>豫ICP备19046036号</a>',
    ].join('')
  },

  htmlModules
};
