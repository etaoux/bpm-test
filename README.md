# 概述

此项目有三个工程用于演示，在 projects 目录下，分别为：

* etao.ux.x1 包含 abc、part1、part2 三个组件
* etao.ux.x2 包含 cba 一个组件
* etao.ux.x3

# 配置文件示例

* 组件配置文件示例 `etao.ux.x1/components/abc/package.example.json`
* 工程配置文件示例 `etao.ux.x1/package.example.json`

# 安装示例

在 `etao.ux.x3` 目录中执行 `bpm install etao.ux.x2_cba` 后：

* 生成了 `imports` 目录
* `imports` 目录中按照 `namespace/component_name/version/` 进行存储
* `imports` 目录中的组件的 `index.js` 和 `template.html` 都对其中的路径进行了相应的转换

# 发布示例

在 `etao.ux.x1/components/abc` 目录中修改其中 `package.json` 的 `version` 版本号，执行 `bpm publish`，组件就被发布了。