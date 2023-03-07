# vite-uxp-starter

This project is a starter sample to build Adobe UXP plugin using Vite.

这是一个使用Vite来构建Adobe UXP的示例工程。

## Usage

Just checkout this project and run

下载此项目，然后执行

```
yarn install

yarn watch
# or 
yarn build
```

## Issue

As [Native ESM](https://caniuse.com/es6-module) is not supported in UXP runtime, which means the default output  of Vite is not work in UXP.

```
<script type="module" crossorigin src="./assets/index.xxxx.js"></script>
```

I added a plugin `plugin-legacy` to build `type="text/javascript"`.

Sadly, there seems to bugs in the plugin, which makes `vite build --watch` not work as excepted. See this [issue](https://github.com/vitejs/vite/issues/6133), So I added a isolate `node-watch` to watch files.


## License

You are free to check these codes and modify anything as you need.
