<!-- [![Build status](https://ci.appveyor.com/api/projects/status/5iy5b7t8x8avp4rw/branch/master?svg=true)](https://ci.appveyor.com/project/YingbiaoWang/mstc-csl/branch/master) -->

![Continous Integration](https://github.com/yingbiao/mstc-csl/workflows/Continuous%20Integration/badge.svg?branch=master)

# 墨尔本神学院中文部 Zotero 样式

# 安装

1. 下载文件 [melbourne-school-of-theology-chinese.csl](https://github.com/yingbiao/mstc-csl/raw/master/melbourne-school-of-theology-chinese.csl), 请确保文件的后缀是.csl
2. 打开 Zotero 的 Preferences
3. 在 Cite 标签页添加下载的样式

# 注意事项

## Zotero 中语言设置

英文的参考资料请把语言（Language）一项设置成`en-US`,  
简体中文的参考资料请把语言（Language）一项设置成`zh-CN`，  
繁体中文的参考资料请把语言（Language）一项设置成`zh-TW`，  
如果语言未注明，则系统自动使用`zh-CN`。

## 中文名字

中文的名字请用一个输入框，姓和名输入在一起，不要拆开。

## Development

- Clone this repo
- Install packages: `npm i`
- Update submodules: `git submodule update --init --recursive`
- Run test: `npm run test`
