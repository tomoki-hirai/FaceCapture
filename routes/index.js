var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
// 書き込むディレクトリか変えるなこここを変えて
const dirPath = path.resolve(__dirname, '../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
  var text = "";

  // 一回に送られてくるデータ数
  // ejs をいじったら変えて
  var fileSum = 20;
  // 以下ファイル書き込み
  for (var i = 0; i < fileSum; i++) {
    text += req.body[0]['data']+"\n";
  }
  fs.appendFile(dirPath + '\\data.csv', text);
  console.log(dirPath);
  // クライアントへ返事
  res.send('success');
});

module.exports = router;
