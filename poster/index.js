var http = require('http');
http.post = require('http-post');

require('domready')(function() {
  demo();
});

function demo() {
  var div = document.getElementById('chat-container');
  var button = document.createElement('button');
  button.addEventListener('click', submit);
  button.innerHTML = 'Chat';
  div.appendChild(button);
}

function submit() {
  var text = document.getElementById('message-input').value;
  var out = document.getElementById('chat-output');
  if(!text || text.length <= 0) return;

  http.post('http://127.0.0.1:8000/api/chatterbot/', { 
    text: text,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }, function(res){
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      var json = JSON.parse(chunk);
      out.innerHTML = json.text;
    });
  });
}

