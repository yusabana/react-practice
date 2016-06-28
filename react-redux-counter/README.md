Boilerplate
=======

## redux単体で動かす

```
npm install --save-dev babel-cli babel-preset-es2015 eslint
npm install --save redux
```

echo '{ "presets": ["es2015"] }' > .babelrc'


## react と redux が動くまで(webpackでビルドしてブラウザ上で動く)

* [webpackを使った開発の効率化方法やloaderの種類をTLで話してきました【スライド付き】 | 株式会社LIG](http://liginc.co.jp/web/js/149577)
* [webpackを使い倒す - Thujikun blog](http://thujikun.github.io/blog/2014/12/07/webpack/)
* すごい参考になる。。[webpackとbabelでES6コードをさくっと書く - getalog](http://geta6.hatenablog.com/entry/2016/04/05/165201)

----------

### 上記の 「redux単体で動かす」 に加えて、、以下を実行する

* babel, webpack, react関連の設定(webpackでbabelを使ってビルドする)

```
npm install --save-dev webpack webpack-dev-server file-loader babel-loader babel-core babel-preset-react
npm install --save react react-dom react-redux

echo '{ "presets": ["es2015", "react"] }' > .babelrc'
```

* webpack.config.babel.js を作る

refs. http://stackoverflow.com/a/31906902

* package.jsonにnpm-scriptで start と webpack を追加

* .eslintrcにreact関連の設定を追加


* reactのシンタックスチェックができるeslintのプラグインも入れておく
  * https://github.com/yannickcr/eslint-plugin-react

```
npm install --save-dev eslint-plugin-react
```

.eslinntrcに以下の設定を入れてみる

```
plugins:
  - react

extends:
  - plugin:react/recommended

```

* ファイル配備 src/index.html, src/app.jsx をおいて `npm start` すると 127.0.0.1:8080/webpack-dev-server でアクセスできる



## css sass

css や sass を使うときは以下の様なプラグインも差しこむ必要があるかも

[webpackでcssとimageをバンドルする - Qiita](http://qiita.com/rglay/items/1bdbee5dd5657012b5fa)
css-loader, sass-loader

* [PostCSS とは何か // Speaker Deck](https://speakerdeck.com/jmblog/postcss-tohahe-ka)
  * sassかまして、postcssでautoprefixerを使う

