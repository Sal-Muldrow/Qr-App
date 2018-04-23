var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/data.html', function(req, res){
  res.sendFile(__dirname + '/data.html');
});
app.get('/qrcode.min.js', function(req, res){
  res.sendFile(__dirname + '/qrcode.min.js');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
