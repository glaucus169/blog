(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{523:function(t,_,v){"use strict";v.r(_);var e=v(27),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"git命令整理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git命令整理"}},[t._v("#")]),t._v(" git命令整理")]),t._v(" "),v("p",[t._v("版本控制工具一直用的GIT，之前提交代码都是用IDEA集成的GIT可视化工具，命令行几乎不怎么用，由于接下来项目要整合到微服务平台中，项目代码管理也要迁到Gerrit，idea的集成支持不太好，所以整理下GIT的命令，方便后面使用命令行提交代码。\n"),v("img",{attrs:{src:"http://io.storyxc.com/18087435-2b52aaf65be47442.jpg",alt:"180874352b52aaf65be47442.jpg"}})]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Remote:远程仓库\nReporsitory:本地仓库\nWorkSpace:工作区\nIndex:暂存区\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br")])]),v("h2",{attrs:{id:"撤回修改"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#撤回修改"}},[t._v("#")]),t._v(" 撤回修改")]),t._v(" "),v("ul",[v("li",[v("p",[v("code",[t._v("git commit --amend")]),t._v(" :提交完发现漏掉了几个文件没有添加，或者提交信息写错了,此时，可以运行带有 --amend 选项的提交命令来重新提交")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("git checkout -- <file>")]),t._v("  把"),v("code",[t._v("readme.txt")]),t._v("文件在工作区的修改全部撤销，这里有两种情况：")]),t._v(" "),v("p",[t._v("一种是"),v("code",[t._v("readme.txt")]),t._v("自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；")]),t._v(" "),v("p",[t._v("一种是"),v("code",[t._v("readme.txt")]),t._v("已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("git reset [--soft | --mixed | --hard] [HEAD]")])]),t._v(" "),v("ul",[v("li",[t._v("使用soft只会移动HEAD到上一个版本,可以理解为撤回上一次commit,暂存区和工作区不受影响")]),t._v(" "),v("li",[t._v("使用mixed在移动HEAD到上一个版本,并且回退暂存区的内容,工作区不受影响")]),t._v(" "),v("li",[t._v("使用hard,除了移动HEAD指针,取消暂存内容,还会覆盖回退工作区内容,属于比较危险的命令,谨慎使用")]),t._v(" "),v("li",[t._v("不加括号中的参数 默认参数为mixed, 如果想回退多个版本可以修改为HEAD^^^或HEAD~3代表回退3个版本,依此类推")])])]),t._v(" "),v("li",[v("p",[t._v("关于"),v("code",[t._v("git checkout")]),t._v("和"),v("code",[t._v("git reset")]),t._v("建议看下这篇文章,"),v("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E7%BD%AE%E6%8F%AD%E5%AF%86#_git_reset",target:"_blank",rel:"noopener noreferrer"}},[t._v("git重置"),v("OutboundLink")],1)])])]),t._v(" "),v("h2",{attrs:{id:"切换分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),v("p",[v("code",[t._v("git checkout branch_name")])]),t._v(" "),v("p",[t._v("切换分之前要注意本地分支是否有未commit的文件，如果有可以撤销改动，或者commit，再或者使用git stash将当前分支的改动临时保存起来，使当前分支的工作空间和暂存区变干净。然后再进行切换分支；切换回之前的分支，需要恢复被临时保存的改动")]),t._v(" "),v("h2",{attrs:{id:"暂存和恢复本地修改"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#暂存和恢复本地修改"}},[t._v("#")]),t._v(" 暂存和恢复本地修改")]),t._v(" "),v("p",[v("code",[t._v("git stash -u")])]),t._v(" "),v("p",[t._v("恢复本地修改:")]),t._v(" "),v("p",[t._v("1.先查看有多少个临时保存的改动")]),t._v(" "),v("p",[v("code",[t._v("git stash list")])]),t._v(" "),v("p",[t._v("2.再用"),v("code",[t._v("git stash apply --index stash@{n}")]),t._v("，n为使用git stash list查看到的某个改动的数字")]),t._v(" "),v("p",[t._v("3.再用"),v("code",[t._v("git stash drop stash@{n}")]),t._v("删除临时保存的改动")]),t._v(" "),v("p",[t._v("如果只有一个临时的stash，那么可以直接"),v("code",[t._v("git stash apply")]),t._v("即可恢复上次的临时保存记录")]),t._v(" "),v("h2",{attrs:{id:"创建本地分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建本地分支"}},[t._v("#")]),t._v(" 创建本地分支")]),t._v(" "),v("p",[t._v("基于本地master分支创建test分支为例：")]),t._v(" "),v("p",[t._v("先切换到master分支："),v("code",[t._v("git checkout master")])]),t._v(" "),v("p",[t._v("建分支： "),v("code",[t._v("git branch test")])]),t._v(" "),v("p",[t._v("切分支："),v("code",[t._v("git checkout test")])]),t._v(" "),v("p",[t._v("或者")]),t._v(" "),v("p",[t._v("建分支后切到该分支："),v("code",[t._v("git checkout -b test master")])]),t._v(" "),v("p",[t._v("以基于某次commit id创建test分支为例：")]),t._v(" "),v("p",[v("code",[t._v("git checkout -b test 0faceff")])]),t._v(" "),v("p",[t._v("其中的0faceff为commit id的前7位")]),t._v(" "),v("p",[t._v("以基于某个tag创建test分支为例")]),t._v(" "),v("p",[v("code",[t._v("git checkout -b test v0.1.0")])]),t._v(" "),v("p",[t._v("v0.1.0为tag的名称")]),t._v(" "),v("h2",{attrs:{id:"查看分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[t._v("#")]),t._v(" 查看分支")]),t._v(" "),v("p",[v("code",[t._v("git branch")]),t._v(": 只显示本地分支名，当前分支名前有星号")]),t._v(" "),v("p",[v("code",[t._v("git branch -v")]),t._v("：显示本地分支名，当前分支前有星号，显示commit id")]),t._v(" "),v("p",[v("code",[t._v("git branch -vv")]),t._v("：显示本地分支名，当前分支名前有星号，显示commit id，显示追踪的远程分支名")]),t._v(" "),v("p",[v("code",[t._v("git branch -a")]),t._v("：显示所有分支名（包括远程分支）")]),t._v(" "),v("p",[v("code",[t._v("git branch -r")]),t._v("：查看远程分支名")]),t._v(" "),v("h2",{attrs:{id:"删除本地分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#删除本地分支"}},[t._v("#")]),t._v(" 删除本地分支")]),t._v(" "),v("p",[t._v("普通删除："),v("code",[t._v("git branch -d branch_name")])]),t._v(" "),v("p",[t._v("强制删除（分支上有修改未合并到其他分支）："),v("code",[t._v("git branch -D branch_name")])]),t._v(" "),v("h2",{attrs:{id:"更新代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更新代码"}},[t._v("#")]),t._v(" 更新代码")]),t._v(" "),v("p",[v("code",[t._v("git pull")]),t._v("或者"),v("code",[t._v("git fetch")])]),t._v(" "),v("p",[v("code",[t._v('git pull -v --progress "origin"')]),t._v("命令可以显示更详细的信息，git pull命令会fetch所有的远程分支的信息到本地，同时当前本地分支会被合并。")]),t._v(" "),v("p",[t._v("如果本地有修改文件，而且远程仓库也修改了该文件，pull会失败，提示本地的修改会被合并覆盖，此时可以commit本地的修改或者stash本地的修改，再pull。")]),t._v(" "),v("h2",{attrs:{id:"修改代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#修改代码"}},[t._v("#")]),t._v(" 修改代码")]),t._v(" "),v("p",[t._v("首先使用"),v("code",[t._v("git checkout branch_name")]),t._v("切换到正确分支，pull，新建或修改代码，再使用git add 文件名把修改或新增的文件添加到暂存区，再执行commit命令提交到本地仓库。")]),t._v(" "),v("p",[t._v("其中:")]),t._v(" "),v("p",[v("code",[t._v("git add 某个文件")])]),t._v(" "),v("p",[v("code",[t._v("git add 多个文件")]),t._v("（文件名用空格隔开）")]),t._v(" "),v("p",[v("code",[t._v("git add -u")]),t._v("添加所有修改的文件到暂存区")]),t._v(" "),v("p",[v("code",[t._v("git add .")]),t._v("添加所有修改和新增的文件到暂存区")]),t._v(" "),v("p",[v("code",[t._v("git add -A")]),t._v("：添加所有修改，新增和删除的文件到暂存区")]),t._v(" "),v("p",[v("code",[t._v('git commit 文件名 -m "注释"')]),t._v("：commit某个文件")]),t._v(" "),v("p",[v("code",[t._v('git commit 文件1 文件2 -m "注释"')]),t._v(" commit多个文件，用空格隔开")]),t._v(" "),v("p",[v("code",[t._v('git commit -m "注释"')]),t._v("commit所有文件")]),t._v(" "),v("p",[t._v("如果是删除文件，可以使用")]),t._v(" "),v("p",[v("code",[t._v("rm 文件")])]),t._v(" "),v("p",[v("code",[t._v("git add 文件")])]),t._v(" "),v("p",[v("code",[t._v('git commit 文件 -m "注释"')])]),t._v(" "),v("p",[t._v("如果是重命名文件或者移动文件，可以使用")]),t._v(" "),v("p",[v("code",[t._v("git mv 源文件路径 目标文件路径")])]),t._v(" "),v("p",[v("code",[t._v('git commit 文件 -m "注释"')])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("每次编辑前先进行pull操作，避免再push时产生合并冲突")])])]),t._v(" "),v("h3",{attrs:{id:"push代码带远程仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#push代码带远程仓库"}},[t._v("#")]),t._v(" push代码带远程仓库")]),t._v(" "),v("p",[t._v("本地代码从本地branch_name分支推到远端branch_name分支：")]),t._v(" "),v("p",[v("code",[t._v("git checkout branch_name")])]),t._v(" "),v("p",[v("code",[t._v("git pull")])]),t._v(" "),v("p",[v("code",[t._v("git push origin HEAD:refs/for/branch_name")])]),t._v(" "),v("p",[t._v("或者")]),t._v(" "),v("p",[v("code",[t._v("git checkout branch_name")])]),t._v(" "),v("p",[v("code",[t._v("git pull")])]),t._v(" "),v("p",[v("code",[t._v("git push origin branch_name:refs/for/branch_name")])]),t._v(" "),v("h3",{attrs:{id:"查看信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看信息"}},[t._v("#")]),t._v(" 查看信息")]),t._v(" "),v("p",[v("strong",[v("code",[t._v("git status")]),t._v(" 显示有变更的文件")])]),t._v(" "),v("p",[v("strong",[v("code",[t._v("git log")]),t._v(" 显示当前分支的版本历史")])]),t._v(" "),v("p",[v("code",[t._v("git log --stat")]),t._v(" 显示commit历史，以及每次commit发生变更的文件")]),t._v(" "),v("p",[v("code",[t._v("git log -S [keyword]")]),t._v("搜索提交历史，根据关键词")]),t._v(" "),v("p",[v("code",[t._v("git log [tag] HEAD --pretty=format:%s")]),t._v(" 显示某个commit之后的所有变动，每个commit占据一行")]),t._v(" "),v("p",[v("code",[t._v("git log [tag] HEAD --grep feature")]),t._v(' 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件')]),t._v(" "),v("p",[v("code",[t._v("git log -p [file]")]),t._v("显示指定文件相关的每一次diff")]),t._v(" "),v("p",[v("code",[t._v("git log -5 --pretty --oneline")]),t._v(" 显示过去5次提交")]),t._v(" "),v("p",[v("code",[t._v("git shortlog -sn")]),t._v("显示所有提交过的用户，按提交次数排序")]),t._v(" "),v("p",[v("code",[t._v("git blame [file]")]),t._v(" 显示指定文件是什么人在什么时间修改过")]),t._v(" "),v("p",[v("strong",[v("code",[t._v("git diff")]),t._v(" 显示暂存区和工作区的代码差异")])]),t._v(" "),v("p",[v("code",[t._v("git diff --cached [file]")]),t._v(" 显示暂存区和上一个commit的差异")]),t._v(" "),v("p",[v("code",[t._v("git diff HEAD")]),t._v(" 显示工作区与当前分支最新commit之间的差异")]),t._v(" "),v("p",[v("code",[t._v("git diff [first-branch]...[second-branch]")]),t._v(" 显示两次提交之间的差异")]),t._v(" "),v("p",[v("code",[t._v('git diff --shortstat "@{0 day ago}"')]),t._v("显示今天你写了多少行代码")]),t._v(" "),v("p",[v("code",[t._v("git show [commit]")]),t._v(" 显示某次提交的元数据和内容变化")]),t._v(" "),v("p",[v("code",[t._v("git show --name-only [commit]")]),t._v("显示某次提交发生变化的文件")]),t._v(" "),v("p",[v("code",[t._v("git show [commit]:[filename]")]),t._v("显示某次提交时，某个文件的内容")]),t._v(" "),v("p",[v("code",[t._v("git rebase [branch]")]),t._v("从本地master拉取代码更新当前分支：branch 一般为master")]),t._v(" "),v("h2",{attrs:{id:"fetch-vs-pull"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fetch-vs-pull"}},[t._v("#")]),t._v(" fetch vs pull")]),t._v(" "),v("p",[t._v("git fetch是将远程的最新内容拉到本地，用户在检查了以后决定是否合并到本地分支中。\n而git pull 则是将远程的最新内容拉下来后直接合并，即：git pull = git fetch + git merge，这样可能会产生冲突，需要手动解决。")])])}),[],!1,null,null,null);_.default=a.exports}}]);