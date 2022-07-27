# react-mst-sass-webpack-boilerplate
一个使用 react, mobx-state-tree, sass, webpack 的简单样板

## 项目依赖
- <a href="https://reactjs.org" target="_blank">React</a>
- <a href="https://mobx-state-tree.js.org" target="_blank">MobX-State-Tree</a>
- <a href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank">React-Router-Dom</a>
- <a href="https://webpack.js.org" target="_blank">Webpack</a>
- <a href="https://sass-lang.com" target="_blank">Sass</a>


## 环境依赖
确保环境中的 node.js 版本不低于 v14

安装依赖的 node_modules

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
