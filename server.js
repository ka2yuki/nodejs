var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    qs = require('querystring');
var set = require('./settings');
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/pub_html/bbs.ejs','utf-8');
var posts = []; // postのデータを入れる配列を作る

function renderForm(posts, res){
  var data = ejs.render(template,{
    posts: posts
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(data);
}

server.on('request' , function(req, res){
    if (req.method === 'POST'){
      // 決まり文句
      req.data = ""; // request data を 初期化
      req.on("readable",function(){
      // form から どんどん　送られてくる deta を処理 'readable'
        req.data += req.read() || '';
        //read() でデータ取ってきてもデータがあるとは限らない
      });
      req.on("end",function(){ // すべての受信が終わったら
        var query = qs.parse(req.data);
        posts.push(query.name);
        // 入ってきたのは 名前の部分、名前を posts に 入れる push
        renderForm(posts, res);
      });
    }else {
      renderForm(posts, res);
    }
}).listen(set.port);

console.log('Server running at http://127.0.0.1:8124');
