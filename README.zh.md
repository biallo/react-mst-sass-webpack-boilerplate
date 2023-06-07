# react-mst-sass-webpack-boilerplate

一个使用 React, Mobx-State-Tree, React-Router-Dom, Sass, Webpack 的简单样板

## 语言

- 中文
- [English](README.md)


## 项目依赖

- [React](https://reactjs.org)
- [Mobx-State-Tree](https://mobx-state-tree.js.org)
- [React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Sass](https://sass-lang.com)
- [Webpack](https://webpack.js.org)


## 环境依赖

确保环境中的 node.js 版本不低于 v14

## 安装

```
npm install
```

在项目根目录建立环境配置文件，格式可以参考 `.env.example` 文件中的格式，建立 `.env.local` 用于本地开发，建立 `.env` 用于正式环境。
在代码中使用 `process.env.XXX` 访问其中定义的值。

## 开发

```
npm start
```

## 打包

```
npm run build
```

打包后会在根目录生成一个 /dist 目录，入口文件为 `index.html`，将此目录放置于服务器使用类似 nginx 等工具进行配置即可。
