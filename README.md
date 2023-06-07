# react-mst-sass-webpack-boilerplate

A boilerplate using React, Mobx-State-Tree, React-Router-Dom, Sass, Webpack

## Language

- [中文](README.zh.md)
- English

## Project dependencies

- [React](https://reactjs.org)
- [Mobx-State-Tree](https://mobx-state-tree.js.org)
- [React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Sass](https://sass-lang.com)
- [Webpack](https://webpack.js.org)


## Project dev dependencies

Make sure you have Node.js >= 14.0.0 installed on your machine.


## Installation

```
npm install
```

create `.env.local` for local development, and create `.env` for the production environment.

the format can refer to the format in the `.env.example` file.

Use `process.env.XXX` in code to access the values defined there.


## Development

```
npm start
```

## Production

```
npm run build
```

After the package is generated, a `/dist` directory will be generated in the root directory.
