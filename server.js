// geolocalisation
//https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBifxTfw8ipGi_oRYIiEPNRwn4dO_7cdYk

var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.sendfile('./geolocalisation.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('new user position', function (data) {
    console.log(data);
  });
});

server.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
