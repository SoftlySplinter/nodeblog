// Main Server Runtime.
//TODO Write modules that will connect into this.

var express = require('express');


var server = express.createServer();

server.set('view engine', 'jade');
server.set('views', 'public/');

server.get('/', function(req,res) {
    res.render('index');
  }
)

server.listen(1741);
