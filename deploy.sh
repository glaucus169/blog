#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
#echo 'blog.storyxc.com' > CNAME

#if [ -z "${GITHUB_TOKEN}" ]; then
#  echo "GITHUB_TOKEN is not set"
#  exit 1
#else
#  msg='github actions自动部署'
#  githubUrl=https://storyxc:${GITHUB_TOKEN}@github.com/storyxc/vuepress.git
#  git config --global user.name "glaucus"
#  git config --global user.email "13101905507@163.com"
#fi1

git init
git add -A
git commit -m 'deploy'

git push -f git@gitee.com:glaucusZh/glaucus-blog.git master

cd -

rm -rf docs/.vuepress/dist