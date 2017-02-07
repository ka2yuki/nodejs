ブラウザ側でJavaScriptは触っていたけどサーバー側もやってみたいと思っているフロントエンジニア

# 種類
Node.jsバージョン管理

- [x] [Homebrew](http://brew.sh/index_ja.html) ★[3833](https://github.com/Homebrew/brew/)
- [x] [nvm](https://github.com/creationix/nvm) ★star 15,000 [^1]
- [ ] [nodebrew](https://github.com/hokaccha/nodebrew) ★ 600

# Homebrew での手順

```zsh
$ brew update #最新に
$ brew install node #インストール
$ node -v #確認
```

# nvm での手順
#### install [source](https://github.com/creationix/nvm#install-script)

```zsh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
```
##### 確認

```zsh
$ ls -A

# なければ..
$ git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
```

#### nvm コマンドを使える様に

```zsh
# ~/.nvm/nvm.sh を .bashrc_profile に
$ echo 'source ~/.nvm/nvm.sh' >> ~/.bash_profile

# 補足： zsh (多分)
$ echo 'source ~/.nvm/nvm.sh' >> ~/.zprofile
```
#### shell を再起動で使える様に[^2]

```zsh
$ exec $SHELL -l
```
#### インストール
Node.jsのバージョンが 偶数 安定版、奇数のバージョンが開発版

```zsh
# 最新版
$ nvm install node

# Version指定
$ nvm ls-remote # インスト可能バージョン確認
$ nvm install v6.0.0 #
```
[CheckVersion](https://nodejs.org/en/download/releases/)

##### 確認
```zsh
node -v
# or
nvm ls

# 困ったら
nvm --help
```

# Hello World！
```zsh
# ファイル作成し、エディタで上記コード
$ echo > example.js


# コピペ
var http = require('http');

http.createServer(function (request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124');


# 実行
$ node example.js
```
アクセス：[http://localhost:8124](http://localhost:8124)

# その他 nvm 使い方
[github: nvm#Usage](https://github.com/creationix/nvm#usage)
[Lig: いまアツいJavaScript！ゼロから始めるNode.js入門〜5分で環境構築編〜 150722](https://liginc.co.jp/web/programming/node-js/85318)

# Node.jsとは
+ サーバー側で動作するJavaScript
+ シングルスレッド で 「[ノンブロッキング](http://nullppo.hateblo.jp/entry/2016/02/05/084905)* [I/O](http://e-words.jp/w/I-O.html)*」 な処理
+ JavaScriptエンジンV8

**シングルスレッド**
メモリ消費が少ない
（ PHP(Apache処理)は同期処理×マルチスレッド )
マルチスレッド は、1リクエスト(処理)に 1スレッド(場所)を確保する為、メモリ消費が多い (C10K問題)

**ノンブロッキングI/O**
データベースに問い合わせたら受信を待たずに、次の処理に移り、結果の受け取りはコールバックで実現する。
DBアクセス と Webページ表示 を別々に行う
C10K問題 を ノンブロッキングI/O (DB処理結果を待たない)で 進める
*C10K問題 : C(クライアント)10K(１万台接続)問題

**GoogleV8**
Google Chrome用に開発された
>C++環境に組み込みやすい利点。「動作が速いこと」という理念の一つにはこの V8 の影響力ももちろん欠かせない。


**Nodejsフレームワーク一覧**
Express (シンプルなフレームワーク)
Backbone.js
AngularJS (Google製MVC)
Sails (Railsライクなフレームワーク)
Meteor

## 他参考
* [Homebrew手順参考:qiita](http://qiita.com/kazukichi/items/884a1379eea5918689ed)
* [nvm 参考:Qiita](http://qiita.com/renoji5126/items/791be40da9ff7de9bbab)
* nvm 参考:http://qiita.com/tagosaku324/items/bf1fe149c38c99728c72
Nodeについて参考
* [Node.js 日本ユーザグループ](http://nodejs.jp/)
* [gihyo.jp](http://gihyo.jp/dev/serial/01/nodejs/0001)




[^1]: nvm(Node Version Manager) は Node.js 自体をバージョン管理するツール<br>npm(Node Package Manager) は Node.js で作られたパッケージモジュールを管理するツール

[^2]: [shell を再起動で使える様に](http://qiita.com/yusabana/items/c4de582c6f85a42817d8#%E3%82%B7%E3%82%A7%E3%83%AB%E3%81%AE%E5%86%8D%E8%B5%B7%E5%8B%95%E6%96%B9%E6%B3%95)
