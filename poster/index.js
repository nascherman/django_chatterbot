var http = require('http');
http.post = require('http-post');

http.post('http://127.0.0.1:8000/api/chatterbot/', { text: process.argv[1] }, function(res){
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
});