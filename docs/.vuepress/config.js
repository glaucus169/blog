const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: "vdoing",
  title: "百草春生",
  description: 'glaucus技术博客',
  base: "/",
  markdown: {
    lineNumbers: true
  },
  head,
  themeConfig,
  plugins
}