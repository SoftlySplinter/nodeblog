// Main Server Runtime.
//TODO Write modules that will connect into this.

var express = require('express');


var server = express.createServer();

server.set('view engine', 'jade');
server.set('views', 'public/');

server.get('/post/:id', function(req,res) {
  var post = {'id': req.params.id, 'title': 'Test Post', 'content': 'This is a testing post</p><p>Bitches love tests.</p>'};
  res.render('post', {
    'post': post
  });
});

server.get('/*', function(req,res) {
  res.render('index');
});



server.listen(1741);
